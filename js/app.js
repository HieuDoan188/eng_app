// LangTrack - personal language study app.
// Vanilla JS, no build step. Progress lives in localStorage on this device;
// use Settings -> Export to back it up or move it to another device.
(function () {
  'use strict';

  const { GRADES } = SRS;
  const STORAGE_KEY = 'langtrack.v1';
  const BOOKS = window.LT_BOOKS || [];
  const $app = document.getElementById('app');
  const $tip = document.getElementById('tooltip');

  const DEFAULT_SETTINGS = {
    activeBook: BOOKS.length ? BOOKS[0].id : null,
    dailyNew: 10, // new sentences introduced per day, per language
    dailyGoal: 30, // cards (new + reviews) to count the day as "goal met"
    direction: 'recognize', // recognize | recall | mixed
    autoplay: true,
    showRom: true,
    ttsRate: 0.9,
    theme: 'auto',
  };

  // ---------- Persistence ----------

  function loadState() {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch (e) {
      saved = null;
    }
    const s = saved && typeof saved === 'object' ? saved : {};
    return {
      version: 1,
      settings: Object.assign({}, DEFAULT_SETTINGS, s.settings),
      cards: s.cards || {},
      logs: s.logs || {},
    };
  }

  let state = loadState();
  let storageOk = true;

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageOk = true;
    } catch (e) {
      storageOk = false;
    }
  }

  // ---------- Book helpers ----------

  function getBook(id) {
    return BOOKS.find((b) => b.id === id) || BOOKS[0] || null;
  }

  function activeBook() {
    return getBook(state.settings.activeBook);
  }

  function cardKey(book, item) {
    return book.id + ':' + item.n;
  }

  function allItems(book, chapterId) {
    const chapters = chapterId ? book.chapters.filter((c) => c.id === chapterId) : book.chapters;
    return chapters.flatMap((c) => c.items.map((it) => Object.assign({ chapter: c.id }, it)));
  }

  function itemStats(book, items) {
    const counts = { total: items.length, new: 0, learning: 0, review: 0, mastered: 0, due: 0 };
    const now = Date.now();
    for (const it of items) {
      const card = state.cards[cardKey(book, it)];
      counts[SRS.status(card)] += 1;
      if (card && SRS.isDue(card, now)) counts.due += 1;
    }
    counts.seen = counts.total - counts.new;
    return counts;
  }

  function today() {
    return state.logs[Tracker.dateKey(Date.now())] || Tracker.emptyDay();
  }

  // New cards started today in this book. Counts logged before per-book keys
  // existed only came from the first (Korean) book, so the unattributed part
  // of the day's total belongs to it.
  function newToday(book) {
    const t = today();
    let n = t['new:' + book.id] || 0;
    if (BOOKS[0] && book.id === BOOKS[0].id) {
      const attributed = Object.keys(t).filter((k) => k.startsWith('new:')).reduce((sum, k) => sum + t[k], 0);
      n += Math.max(0, t.newCards - attributed);
    }
    return n;
  }

  function newLeftToday(book) {
    return Math.max(0, state.settings.dailyNew - newToday(book));
  }

  // Cards answered per book over the last `days` days (today included).
  function studiedRecently(book, days) {
    let n = 0;
    for (let i = 0; i < days; i++) {
      const d = state.logs[Tracker.addDays(Tracker.dateKey(Date.now()), -i)];
      if (d) n += d['book:' + book.id] || 0;
    }
    return n;
  }

  function setActiveBook(id) {
    state.settings.activeBook = getBook(id).id;
    save();
    renderLangSwitch();
  }

  // ---------- Utils ----------

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function fmtMinutes(seconds) {
    const m = Math.round(seconds / 60);
    if (m < 60) return m + ' min';
    return Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
  }

  function plural(n, word) {
    return n + ' ' + word + (n === 1 ? '' : 's');
  }

  function pct(a, b) {
    return b ? Math.round((a / b) * 100) : 0;
  }

  function applyTheme() {
    const t = state.settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }

  // ---------- Text-to-speech ----------

  const tts = {
    supported: 'speechSynthesis' in window,
    voiceFor(lang) {
      if (!this.supported) return null;
      const prefix = lang.split('-')[0];
      const voices = speechSynthesis.getVoices();
      return voices.find((v) => v.lang === lang) || voices.find((v) => v.lang && v.lang.startsWith(prefix)) || null;
    },
    speak(text, lang) {
      if (!this.supported || !text) return;
      speechSynthesis.cancel();
      // Speak "~" placeholders (ASCII, full-width and wave dash) as a pause, not a symbol.
      const u = new SpeechSynthesisUtterance(text.replace(/[~～〜]/g, ' '));
      u.lang = lang;
      u.rate = state.settings.ttsRate;
      const v = this.voiceFor(lang);
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    },
  };
  if (tts.supported) speechSynthesis.onvoiceschanged = () => {};

  // ---------- Tooltip (hover layer for heatmap cells) ----------

  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest('[data-tip]');
    if (!el) {
      $tip.hidden = true;
      return;
    }
    $tip.textContent = el.getAttribute('data-tip');
    $tip.hidden = false;
    const r = el.getBoundingClientRect();
    const w = $tip.offsetWidth;
    $tip.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + 'px';
    $tip.style.top = Math.max(8, r.top - $tip.offsetHeight - 8) + 'px';
  });

  // ---------- Shared widgets ----------

  function heatLevel(day) {
    const n = day ? Tracker.cardsStudied(day) + day.quiz : 0;
    if (!n) return 0;
    const goal = Math.max(1, state.settings.dailyGoal);
    if (n < goal / 2) return 1;
    if (n < goal) return 2;
    if (n < goal * 2) return 3;
    return 4;
  }

  function heatmapHtml(weeks) {
    const now = Date.now();
    const todayKey = Tracker.dateKey(now);
    const cells = Tracker.calendar(state.logs, now, weeks).map((c) => {
      if (c.future) return '<span class="cell future" aria-hidden="true"></span>';
      const d = c.day;
      const n = d ? Tracker.cardsStudied(d) : 0;
      const tip = c.key + ': ' + (d && Tracker.isActive(d)
        ? n + ' cards' + (d.quiz ? ', ' + d.quiz + ' quiz' : '') + ', ' + fmtMinutes(d.seconds)
        : 'no study');
      return '<span class="cell l' + heatLevel(d) + (c.key === todayKey ? ' today' : '') + '" data-tip="' + esc(tip) + '" aria-label="' + esc(tip) + '"></span>';
    });
    return (
      '<div class="heatmap" role="img" aria-label="Study activity for the last ' + weeks + ' weeks">' + cells.join('') + '</div>' +
      '<div class="legend" style="margin-top:8px"><span>Less</span>' +
      [0, 1, 2, 3, 4].map((l) => '<span><i style="background:var(--heat-' + l + ')"></i></span>').join('') +
      '<span>More</span><span class="muted">· darkest = 2× daily goal</span></div>'
    );
  }

  function ringHtml(value, goal) {
    const r = 40;
    const c = 2 * Math.PI * r;
    const p = Math.min(1, goal ? value / goal : 0);
    return (
      '<svg class="ring" viewBox="0 0 96 96" role="img" aria-label="' + value + ' of ' + goal + ' cards today">' +
      '<circle class="track" cx="48" cy="48" r="' + r + '"></circle>' +
      '<circle class="fill" cx="48" cy="48" r="' + r + '" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - p)).toFixed(1) + '" transform="rotate(-90 48 48)"></circle>' +
      '<text x="48" y="55" text-anchor="middle">' + pct(value, goal) + '%</text></svg>'
    );
  }

  function progressBar(stats) {
    const seenOnly = stats.seen - stats.mastered;
    const tip = stats.seen + ' / ' + stats.total + ' learned · ' + stats.mastered + ' mastered';
    return (
      '<div class="bar" data-tip="' + esc(tip) + '" role="img" aria-label="' + esc(tip) + '">' +
      (stats.mastered ? '<span class="mastered" style="width:' + (stats.mastered / stats.total) * 100 + '%"></span>' : '') +
      (seenOnly ? '<span class="seen" style="width:' + (seenOnly / stats.total) * 100 + '%"></span>' : '') +
      '</div>'
    );
  }

  function barLegend() {
    return '<div class="legend"><span><i style="background:var(--heat-4)"></i>Mastered (21d+ interval)</span><span><i style="background:var(--heat-2)"></i>Learning / in review</span><span><i style="background:var(--surface-2);border:1px solid var(--border)"></i>Not started</span></div>';
  }

  function tile(label, value, sub) {
    return '<div class="card tile"><div class="label">' + esc(label) + '</div><div class="value">' + esc(value) + '</div>' + (sub ? '<div class="sub">' + esc(sub) + '</div>' : '') + '</div>';
  }

  // A sentence in the language being learned, with its pronunciation line when the book has one.
  function targetHtml(book, it, cls, showRom) {
    return '<div class="' + cls + '" lang="' + esc(book.lang) + '">' + esc(it.text) + '</div>' +
      (showRom && it.rom ? '<div class="rom">' + esc(it.rom) + '</div>' : '');
  }

  function statusBadge(card) {
    const s = SRS.status(card);
    return '<span class="badge ' + s + '">' + s + '</span>';
  }

  // ---------- Views ----------

  function viewDashboard() {
    const book = activeBook();
    if (!book) {
      $app.innerHTML = '<p>No books installed. Run <code>npm run build:data</code>.</p>';
      return;
    }
    const t = today();
    const stats = itemStats(book, allItems(book));
    const newCount = Math.min(newLeftToday(book), stats.new);
    const studied = Tracker.cardsStudied(t);
    const goal = state.settings.dailyGoal;
    const streak = Tracker.streak(state.logs, Date.now());
    const canStudy = stats.due + newCount > 0;
    const nextChapter = book.chapters.find((c) => itemStats(book, c.items.map((it) => it)).new > 0);

    $app.innerHTML =
      '<div class="stack">' +
      '<div class="card goal">' + ringHtml(studied, goal) +
      '<div style="flex:1"><h1>Today</h1>' +
      '<p class="muted">' + studied + ' / ' + goal + ' cards · ' + fmtMinutes(t.seconds) + ' studied' +
      (studied >= goal ? ' · <strong style="color:var(--good)">Goal met ✓</strong>' : '') + '</p>' +
      '<div class="row">' +
      (canStudy
        ? '<a class="btn primary" href="#/study">Study ' + esc(book.language) + ' · ' + stats.due + ' due + ' + newCount + ' new</a>'
        : '<a class="btn" href="#/study">All done for today 🎉 · learn more</a>') +
      '<a class="btn" href="#/quiz">Quick quiz</a>' +
      '</div></div></div>' +

      '<div class="grid grid-4">' +
      tile('Streak', plural(streak, 'day'), 'Best: ' + plural(Tracker.longestStreak(state.logs), 'day')) +
      tile('Due now', stats.due, 'reviews waiting') +
      tile('Learned', stats.seen + ' / ' + stats.total, pct(stats.seen, stats.total) + '% of the book') +
      tile('Mastered', stats.mastered, 'interval ≥ 21 days') +
      '</div>' +

      '<div class="card"><div class="row spread"><h2>' + esc(book.flag) + ' ' + esc(book.title) + '</h2><a class="small" href="#/book/' + esc(book.id) + '">Open book →</a></div>' +
      '<p class="muted small">' + esc(book.subtitle) + '</p>' + progressBar(stats) +
      '<div style="margin-top:8px">' + barLegend() + '</div>' +
      (nextChapter ? '<p class="small" style="margin-top:10px">Up next: <a href="#/chapter/' + esc(book.id) + '/' + nextChapter.id + '">Chapter ' + nextChapter.id + ' · ' + esc(nextChapter.title) + '</a></p>' : '') +
      '</div>' +

      (BOOKS.length > 1 ? languagesCard() : '') +
      '<div class="card"><h2>Activity</h2>' + heatmapHtml(16) + '</div>' +
      (storageOk ? '' : '<p class="notice">⚠ Progress could not be saved in this browser (private mode?). Use Settings → Export to keep a copy.</p>') +
      '</div>';
    bindSwitchButtons();
  }

  // Overview of every language: progress, what's due, and a one-tap switch.
  function languagesCard() {
    const active = activeBook();
    return '<div class="card"><h2>Your languages</h2><ul class="list">' +
      BOOKS.map((b) => {
        const s = itemStats(b, allItems(b));
        const newCount = Math.min(newLeftToday(b), s.new);
        const isActive = b.id === active.id;
        return '<li><div class="row spread"><div><strong>' + esc(b.flag) + ' ' + esc(b.language) + '</strong>' +
          (isActive ? ' <span class="badge review">Active</span>' : '') +
          '<div class="small muted">' + s.seen + ' / ' + s.total + ' learned · ' + s.mastered + ' mastered · ' + s.due + ' due · ' + newCount + ' new today</div></div>' +
          '<button class="btn small' + (s.due + newCount > 0 ? ' primary' : '') + '" data-study="' + esc(b.id) + '">Study</button></div>' +
          '<div style="margin-top:8px">' + progressBar(s) + '</div></li>';
      }).join('') +
      '</ul></div>';
  }

  function bindSwitchButtons() {
    $app.querySelectorAll('[data-study]').forEach((btn) =>
      btn.addEventListener('click', () => {
        setActiveBook(btn.getAttribute('data-study'));
        location.hash = '#/study';
      })
    );
  }

  function viewLibrary() {
    $app.innerHTML =
      '<h1>Library</h1><p class="muted">Books you are studying. New books can be added from <code>data/raw/</code> (see README).</p>' +
      '<div class="grid grid-2">' +
      BOOKS.map((b) => {
        const s = itemStats(b, allItems(b));
        const active = b.id === state.settings.activeBook;
        return '<div class="card"><h2>' + esc(b.flag) + ' ' + esc(b.title) + '</h2><p class="muted small">' + esc(b.subtitle) + ' · ' + esc(b.language) + ' → ' + esc(b.meaningLang.toUpperCase()) + ' · ' + b.chapters.length + ' chapters</p>' +
          progressBar(s) + '<p class="small" style="margin-top:6px">' + s.seen + ' / ' + s.total + ' learned · ' + s.due + ' due</p>' +
          '<div class="row"><a class="btn primary small" href="#/book/' + esc(b.id) + '">Open</a>' +
          (active ? '<span class="badge review">Active</span>' : '<button class="btn small" data-activate="' + esc(b.id) + '">Set active</button>') + '</div></div>';
      }).join('') +
      '</div>';
    $app.querySelectorAll('[data-activate]').forEach((btn) =>
      btn.addEventListener('click', () => {
        setActiveBook(btn.getAttribute('data-activate'));
        viewLibrary();
      })
    );
  }

  function viewBook(bookId) {
    const book = getBook(bookId);
    const s = itemStats(book, allItems(book));
    $app.innerHTML =
      '<p class="small"><a href="#/library">← Library</a></p>' +
      '<h1>' + esc(book.flag) + ' ' + esc(book.title) + '</h1><p class="muted">' + esc(book.subtitle) + '</p>' +
      '<div class="card">' + progressBar(s) + '<div style="margin-top:8px">' + barLegend() + '</div></div>' +
      '<div class="card" style="margin-top:16px"><ul class="list">' +
      book.chapters.map((c) => {
        const cs = itemStats(book, c.items);
        return '<li><div class="row spread"><div><strong>' + c.id + '. ' + esc(c.title) + '</strong> <span class="muted">' + esc(c.titleNative) + '</span>' +
          '<div class="small muted">' + c.items.length + ' sentences · #' + c.items[0].n + '–' + c.items[c.items.length - 1].n + ' · ' + cs.seen + ' learned' + (cs.due ? ' · ' + cs.due + ' due' : '') + '</div></div>' +
          '<div class="row"><a class="btn small" href="#/chapter/' + esc(book.id) + '/' + c.id + '">Browse</a>' +
          '<a class="btn small primary" href="#/study/' + esc(book.id) + '/' + c.id + '">Study</a></div></div>' +
          '<div style="margin-top:8px">' + progressBar(cs) + '</div></li>';
      }).join('') +
      '</ul></div>';
  }

  function viewChapter(bookId, chapterId) {
    const book = getBook(bookId);
    const ch = book.chapters.find((c) => c.id === chapterId) || book.chapters[0];
    const idx = book.chapters.indexOf(ch);
    const prev = book.chapters[idx - 1];
    const next = book.chapters[idx + 1];
    $app.innerHTML =
      '<p class="small"><a href="#/book/' + esc(book.id) + '">← ' + esc(book.title) + '</a></p>' +
      '<div class="row spread"><h1>' + ch.id + '. ' + esc(ch.title) + ' <span class="muted">' + esc(ch.titleNative) + '</span></h1>' +
      '<a class="btn primary" href="#/study/' + esc(book.id) + '/' + ch.id + '">Study this chapter</a></div>' +
      '<div class="card table-wrap"><table class="table"><thead><tr><th class="num">#</th><th>Sentence</th><th>Meaning</th><th class="hide-sm">Status</th><th></th></tr></thead><tbody>' +
      ch.items.map((it) =>
        '<tr><td class="num muted">' + it.n + '</td><td>' + targetHtml(book, it, 'target', true) + '</td>' +
        '<td lang="vi">' + esc(it.meaning) + '</td><td class="hide-sm">' + statusBadge(state.cards[cardKey(book, it)]) + '</td>' +
        '<td><button class="btn small icon-btn" data-say="' + it.n + '" aria-label="Play audio">🔊</button></td></tr>'
      ).join('') +
      '</tbody></table></div>' +
      '<div class="row spread" style="margin-top:12px">' +
      (prev ? '<a class="btn small" href="#/chapter/' + esc(book.id) + '/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="btn small" href="#/chapter/' + esc(book.id) + '/' + next.id + '">' + esc(next.title) + ' →</a>' : '') +
      '</div>' +
      (tts.supported ? '' : '<p class="notice" style="margin-top:12px">Audio is not supported in this browser.</p>');
    $app.querySelectorAll('[data-say]').forEach((btn) =>
      btn.addEventListener('click', () => {
        const it = ch.items.find((x) => x.n === Number(btn.getAttribute('data-say')));
        tts.speak(it.text, book.ttsLang);
      })
    );
  }

  // ----- Study session (flashcards + SRS) -----

  let session = null;

  function buildQueue(book, chapterId) {
    const now = Date.now();
    const items = allItems(book, chapterId);
    const due = [];
    const fresh = [];
    for (const it of items) {
      const card = state.cards[cardKey(book, it)];
      if (!card) fresh.push(it);
      else if (SRS.isDue(card, now)) due.push({ it, due: card.due });
    }
    due.sort((a, b) => a.due - b.due);
    const allowed = Math.min(fresh.length, newLeftToday(book));
    const newOnes = fresh.slice(0, allowed);
    // Interleave: one new card after every 3 reviews, so new material is spread out.
    const queue = [];
    const reviews = due.map((d) => d.it);
    while (reviews.length || newOnes.length) {
      for (let i = 0; i < 3 && reviews.length; i++) queue.push(reviews.shift());
      if (newOnes.length) queue.push(newOnes.shift());
    }
    return { queue, freshLeft: fresh.length - allowed };
  }

  function startSession(bookId, chapterId, extraNew) {
    const book = getBook(bookId || state.settings.activeBook);
    if (extraNew) {
      // "Learn more" beyond today's limit: raise today's allowance for this session only.
      state.settings.dailyNew += extraNew;
    }
    const built = buildQueue(book, chapterId);
    if (extraNew) state.settings.dailyNew -= extraNew;
    session = {
      book,
      chapterId,
      queue: built.queue,
      pos: 0,
      flipped: false,
      seen: new Set(),
      shownAt: Date.now(),
      direction: null,
      done: { total: 0, correct: 0, again: 0, newCards: 0 },
    };
    renderStudy();
  }

  function currentDirection() {
    const d = state.settings.direction;
    if (d === 'mixed') return Math.random() < 0.5 ? 'recognize' : 'recall';
    return d;
  }

  function renderStudy() {
    const s = session;
    const scope = s.book.flag + ' ' + s.book.language + ' · ' + (s.chapterId ? 'Chapter ' + s.chapterId : 'All chapters');
    if (s.pos >= s.queue.length) {
      const more = buildQueue(s.book, s.chapterId);
      $app.innerHTML =
        '<div class="card flash">' +
        (s.done.total
          ? '<div class="front">🎉 Session complete</div><p class="muted">' + s.done.total + ' cards · ' + s.done.newCards + ' new · ' + pct(s.done.correct, s.done.total) + '% recalled first try</p>'
          : '<div class="front">Nothing due right now</div><p class="muted">No ' + esc(s.book.language) + ' reviews are due and today\'s ' + state.settings.dailyNew + ' new sentences are done. You can learn more or take a quiz.</p>') +
        '<div class="row" style="justify-content:center">' +
        '<a class="btn primary" href="#/">Back to Today</a>' +
        (more.freshLeft > 0 ? '<button class="btn" id="more">Learn 10 more new</button>' : '') +
        '<a class="btn" href="#/quiz' + (s.chapterId ? '/' + esc(s.book.id) + '/' + s.chapterId : '') + '">Quiz yourself</a></div></div>';
      const moreBtn = document.getElementById('more');
      if (moreBtn) moreBtn.addEventListener('click', () => startSession(s.book.id, s.chapterId, 10));
      return;
    }
    const it = s.queue[s.pos];
    const card = state.cards[cardKey(s.book, it)];
    if (!s.flipped) {
      s.direction = currentDirection();
      s.shownAt = Date.now();
    }
    const recall = s.direction === 'recall';
    const isNew = !card;
    const textHtml = targetHtml(s.book, it, recall ? 'big' : 'front', state.settings.showRom || s.flipped);
    const meaningHtml = '<div class="' + (recall ? 'front meaning' : 'big') + '" lang="vi">' + esc(it.meaning) + '</div>';
    const now = Date.now();

    $app.innerHTML =
      '<div class="study-top"><a class="small" href="#/">✕ End</a>' +
      '<span class="small muted">' + scope + ' · ' + (s.queue.length - s.pos) + ' left</span>' +
      '<span class="badge ' + (isNew ? 'learning' : 'review') + '">' + (isNew ? 'new' : 'review') + '</span></div>' +
      '<div class="card flash" id="flash">' +
      '<div class="tag">#' + it.n + ' · ' + (recall ? 'Say it in ' + esc(s.book.language) : 'What does it mean?') + '</div>' +
      (recall ? meaningHtml : textHtml) +
      (!recall || s.flipped ? '<button class="btn small icon-btn" id="say" aria-label="Play audio">🔊</button>' : '') +
      (s.flipped ? '<div class="answer">' + (recall ? textHtml : meaningHtml) + '</div>' : '') +
      '</div>' +
      (s.flipped
        ? '<div class="grades">' +
          [['again', 'Again', GRADES.AGAIN], ['hard', 'Hard', GRADES.HARD], ['good', 'Good', GRADES.GOOD], ['easy', 'Easy', GRADES.EASY]]
            .map(([cls, label, g]) => '<button class="btn ' + cls + '" data-grade="' + g + '">' + label + '<small>' + SRS.previewLabel(card, g, now) + '</small></button>').join('') +
          '</div><div class="kbd-hint"><kbd>1</kbd>–<kbd>4</kbd> grade · <kbd>P</kbd> play audio</div>'
        : '<button class="btn primary" id="flip" style="width:100%;margin-top:12px;justify-content:center">Show answer</button>' +
          '<div class="kbd-hint"><kbd>Space</kbd> show answer · <kbd>P</kbd> play audio</div>');

    const say = document.getElementById('say');
    if (say) say.addEventListener('click', () => tts.speak(it.text, s.book.ttsLang));
    const flip = document.getElementById('flip');
    if (flip) flip.addEventListener('click', flipCard);
    $app.querySelectorAll('[data-grade]').forEach((b) => b.addEventListener('click', () => grade(Number(b.getAttribute('data-grade')))));

    if (state.settings.autoplay && ((!recall && !s.flipped) || (recall && s.flipped))) tts.speak(it.text, s.book.ttsLang);
  }

  function flipCard() {
    if (!session || session.flipped) return;
    session.flipped = true;
    renderStudy();
  }

  function grade(g) {
    const s = session;
    if (!s || !s.flipped) return;
    const it = s.queue[s.pos];
    const key = cardKey(s.book, it);
    const prev = state.cards[key];
    const now = Date.now();
    state.cards[key] = SRS.schedule(prev, g, now);

    const firstTime = !s.seen.has(key);
    const seconds = Math.min(60, Math.round((now - s.shownAt) / 1000));
    const delta = { seconds };
    if (firstTime) {
      s.seen.add(key);
      s.done.total += 1;
      delta['book:' + s.book.id] = 1;
      if (!prev) {
        delta.newCards = 1;
        delta['new:' + s.book.id] = 1;
        s.done.newCards += 1;
      } else delta.reviews = 1;
      if (g === GRADES.AGAIN) {
        delta.again = 1;
        s.done.again += 1;
      } else {
        delta.correct = 1;
        s.done.correct += 1;
      }
    }
    Tracker.record(state.logs, now, delta);
    save();

    if (g === GRADES.AGAIN) {
      // Show it again a few cards later in this session.
      s.queue.splice(Math.min(s.queue.length, s.pos + 4), 0, it);
    }
    s.pos += 1;
    s.flipped = false;
    renderStudy();
  }

  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, select, textarea')) return;
    if (session && currentRoute().name === 'study') {
      const it = session.queue[session.pos];
      if (e.key === ' ' || e.key === 'Enter') {
        if (!session.flipped && it) {
          e.preventDefault();
          flipCard();
        }
      } else if (/^[1-4]$/.test(e.key) && session.flipped) {
        grade(Number(e.key) - 1);
      } else if ((e.key === 'p' || e.key === 'P') && it) {
        tts.speak(it.text, session.book.ttsLang);
      }
    } else if (quiz && currentRoute().name === 'quiz') {
      if (/^[1-4]$/.test(e.key) && quiz.answered === null) answerQuiz(Number(e.key) - 1);
      else if ((e.key === 'Enter' || e.key === ' ') && quiz.answered !== null) {
        e.preventDefault();
        nextQuiz();
      }
    }
  });

  // ----- Quiz (multiple choice) -----

  const QUIZ_LEN = 10;
  let quiz = null;

  function startQuiz(bookId, chapterId) {
    const book = getBook(bookId || state.settings.activeBook);
    const items = allItems(book, chapterId);
    const learned = items.filter((it) => state.cards[cardKey(book, it)]);
    // Quiz what you have learned; if that's too little, fall back to the scope's first sentences.
    const pool = learned.length >= 4 ? learned : items.slice(0, Math.max(4, Math.min(items.length, 20)));
    const everything = allItems(book);
    const questions = shuffle(pool).slice(0, QUIZ_LEN).map((it) => {
      const types = ['meaning', 'target'];
      if (tts.supported) types.push('listen');
      const type = types[Math.floor(Math.random() * types.length)];
      const field = type === 'target' ? 'text' : 'meaning';
      const distractors = [];
      const seen = new Set([it[field]]);
      // Prefer distractors from the same chapter: they are more plausible.
      const sameChapter = shuffle(everything.filter((x) => x.chapter === it.chapter));
      const rest = shuffle(everything);
      for (const x of sameChapter.concat(rest)) {
        if (distractors.length === 3) break;
        if (!seen.has(x[field])) {
          seen.add(x[field]);
          distractors.push(x);
        }
      }
      const options = shuffle([it].concat(distractors));
      return { it, type, field, options, answer: options.indexOf(it) };
    });
    quiz = { book, chapterId, questions, pos: 0, score: 0, answered: null, usedFallback: learned.length < 4, shownAt: Date.now() };
    renderQuiz();
  }

  function renderQuiz() {
    const q = quiz;
    if (q.pos >= q.questions.length) {
      $app.innerHTML =
        '<div class="card flash"><div class="front">' + q.score + ' / ' + q.questions.length + '</div>' +
        '<p class="muted">' + (q.score === q.questions.length ? 'Perfect! 🎉' : 'Missed sentences are now due for review.') + '</p>' +
        '<div class="row" style="justify-content:center"><button class="btn primary" id="again">New quiz</button><a class="btn" href="#/study">Review</a><a class="btn" href="#/">Today</a></div></div>';
      document.getElementById('again').addEventListener('click', () => startQuiz(q.book.id, q.chapterId));
      return;
    }
    const cur = q.questions[q.pos];
    const it = cur.it;
    let prompt;
    if (cur.type === 'meaning') prompt = '<div class="tag">What does this mean?</div>' + targetHtml(q.book, it, 'front', state.settings.showRom);
    else if (cur.type === 'target') prompt = '<div class="tag">Pick the ' + esc(q.book.language) + ' sentence</div><div class="front meaning" lang="vi">' + esc(it.meaning) + '</div>';
    else prompt = '<div class="tag">Listen and pick the meaning</div><button class="btn primary" id="listen">🔊 Play</button>';

    $app.innerHTML =
      '<div class="study-top"><a class="small" href="#/">✕ End</a><span class="small muted">' + esc(q.book.flag) + ' Question ' + (q.pos + 1) + ' / ' + q.questions.length + ' · Score ' + q.score + '</span><span></span></div>' +
      (q.usedFallback && q.pos === 0 ? '<p class="notice">You haven\'t learned many sentences yet, so this quiz uses the first sentences of the book. Study first for a personalised quiz.</p>' : '') +
      '<div class="card flash" style="min-height:180px">' + prompt + (q.answered !== null && cur.type === 'listen' ? targetHtml(q.book, it, 'target', true) : '') + '</div>' +
      '<div class="choices" style="margin-top:12px">' +
      cur.options.map((o, i) => {
        let cls = 'choice';
        if (q.answered !== null) {
          if (i === cur.answer) cls += ' correct';
          else if (i === q.answered) cls += ' wrong';
        }
        return '<button class="' + cls + '" data-choice="' + i + '"' + (q.answered !== null ? ' disabled' : '') + ' lang="' + (cur.field === 'text' ? esc(q.book.lang) : 'vi') + '"><kbd>' + (i + 1) + '</kbd> ' + esc(o[cur.field]) + '</button>';
      }).join('') + '</div>' +
      (q.answered !== null ? '<button class="btn primary" id="next" style="width:100%;margin-top:12px;justify-content:center">Next →</button>' : '');

    $app.querySelectorAll('[data-choice]').forEach((b) => b.addEventListener('click', () => answerQuiz(Number(b.getAttribute('data-choice')))));
    const listen = document.getElementById('listen');
    if (listen) listen.addEventListener('click', () => tts.speak(it.text, q.book.ttsLang));
    const next = document.getElementById('next');
    if (next) next.addEventListener('click', nextQuiz);
    if (cur.type === 'listen' && q.answered === null) tts.speak(it.text, q.book.ttsLang);
  }

  function answerQuiz(i) {
    const q = quiz;
    const cur = q.questions[q.pos];
    if (q.answered !== null || !cur || i >= cur.options.length) return;
    q.answered = i;
    const ok = i === cur.answer;
    if (ok) q.score += 1;
    const now = Date.now();
    Tracker.record(state.logs, now, { quiz: 1, quizCorrect: ok ? 1 : 0, ['book:' + q.book.id]: 1, seconds: Math.min(60, Math.round((now - q.shownAt) / 1000)) });
    const key = cardKey(q.book, cur.it);
    // A miss on a learned sentence makes it due again right away.
    if (!ok && state.cards[key]) state.cards[key] = Object.assign({}, state.cards[key], { due: now });
    save();
    renderQuiz();
  }

  function nextQuiz() {
    quiz.pos += 1;
    quiz.answered = null;
    quiz.shownAt = Date.now();
    renderQuiz();
  }

  // ----- Progress / stats -----

  function viewStats() {
    const book = activeBook();
    const t = Tracker.totals(state.logs);
    const s = itemStats(book, allItems(book));
    const now = Date.now();
    const rows = [];
    for (let i = 0; i < 14; i++) {
      const key = Tracker.addDays(Tracker.dateKey(now), -i);
      const d = state.logs[key] || Tracker.emptyDay();
      const answered = d.correct + d.again;
      rows.push('<tr><td>' + key + '</td><td class="num">' + d.newCards + '</td><td class="num">' + d.reviews + '</td><td class="num">' + (answered ? pct(d.correct, answered) + '%' : '–') +
        '</td><td class="num">' + (d.quiz ? d.quizCorrect + '/' + d.quiz : '–') + '</td><td class="num">' + fmtMinutes(d.seconds) + '</td><td>' +
        (Tracker.cardsStudied(d) >= state.settings.dailyGoal ? '✓ met' : Tracker.isActive(d) ? 'partial' : '–') + '</td></tr>');
    }
    const upcoming = [];
    for (let i = 1; i <= 7; i++) {
      const end = SRS.startOfDay(now) + (i + 1) * SRS.DAY;
      const start = SRS.startOfDay(now) + i * SRS.DAY;
      const n = Object.keys(state.cards).filter((k) => k.startsWith(book.id + ':') && state.cards[k].due >= start && state.cards[k].due < end).length;
      upcoming.push('<tr><td>' + Tracker.addDays(Tracker.dateKey(now), i) + '</td><td class="num">' + n + '</td></tr>');
    }
    $app.innerHTML =
      '<h1>Progress</h1>' +
      '<div class="grid grid-4">' +
      tile('Current streak', plural(Tracker.streak(state.logs, now), 'day'), 'Best: ' + plural(Tracker.longestStreak(state.logs), 'day')) +
      tile('Days studied', t.activeDays, 'all time') +
      tile('Cards reviewed', t.reviews + t.newCards, t.newCards + ' first-time') +
      tile('Study time', fmtMinutes(t.seconds), 'all time') +
      '</div>' +
      '<div class="card" style="margin-top:16px"><h2>Activity · last 26 weeks</h2>' + heatmapHtml(26) + '</div>' +
      '<div class="grid grid-2" style="margin-top:16px">' +
      (BOOKS.length > 1 ? languagesTable() : '') +
      '<div class="card"><h2>' + esc(book.flag) + ' ' + esc(book.title) + '</h2>' + progressBar(s) + '<div style="margin-top:8px">' + barLegend() + '</div>' +
      '<table class="table" style="margin-top:12px"><tbody>' +
      [['Not started', s.new], ['Learning', s.learning], ['In review', s.review], ['Mastered', s.mastered], ['Due now', s.due]].map((r) => '<tr><td>' + r[0] + '</td><td class="num">' + r[1] + '</td></tr>').join('') +
      '</tbody></table></div>' +
      '<div class="card"><h2>' + esc(book.language) + ' reviews coming up</h2><table class="table"><thead><tr><th>Day</th><th class="num">Cards due</th></tr></thead><tbody>' + upcoming.join('') + '</tbody></table></div>' +
      '</div>' +
      '<div class="card table-wrap" style="margin-top:16px"><h2>Last 14 days</h2><table class="table"><thead><tr><th>Date</th><th class="num">New</th><th class="num">Reviews</th><th class="num">Recall</th><th class="num">Quiz</th><th class="num">Time</th><th>Goal</th></tr></thead><tbody>' +
      rows.join('') + '</tbody></table></div>';
  }

  function languagesTable() {
    return '<div class="card table-wrap" style="grid-column:1/-1"><h2>By language</h2><table class="table"><thead><tr><th>Language</th><th class="num">Learned</th><th class="num">Mastered</th><th class="num">Due</th><th class="num">Last 7 days</th></tr></thead><tbody>' +
      BOOKS.map((b) => {
        const s = itemStats(b, allItems(b));
        return '<tr><td>' + esc(b.flag) + ' ' + esc(b.language) + '</td><td class="num">' + s.seen + ' / ' + s.total + '</td><td class="num">' + s.mastered + '</td><td class="num">' + s.due + '</td><td class="num">' + studiedRecently(b, 7) + '</td></tr>';
      }).join('') +
      '</tbody></table><p class="small muted">Last 7 days counts flashcards and quiz answers. The streak and daily goal cover all languages together.</p></div>';
  }

  // ----- Settings -----

  function viewSettings() {
    const st = state.settings;
    const book = activeBook();
    const voice = tts.voiceFor(book.ttsLang);
    $app.innerHTML =
      '<h1>Settings</h1>' +
      '<div class="card stack">' +
      '<h2>Daily routine</h2>' +
      '<div class="grid grid-2">' +
      '<label class="field"><span>New sentences per day (per language)</span><input type="number" min="0" max="200" id="dailyNew" value="' + st.dailyNew + '"></label>' +
      '<label class="field"><span>Daily goal (cards)</span><input type="number" min="1" max="1000" id="dailyGoal" value="' + st.dailyGoal + '"></label>' +
      '</div>' +
      '<h2>Flashcards</h2>' +
      '<label class="field"><span>Card direction</span><select id="direction">' +
      [['recognize', 'Sentence → meaning (recognize)'], ['recall', 'Meaning → sentence (recall)'], ['mixed', 'Mixed']].map(([v, l]) => '<option value="' + v + '"' + (st.direction === v ? ' selected' : '') + '>' + l + '</option>').join('') +
      '</select></label>' +
      '<label class="check"><input type="checkbox" id="showRom"' + (st.showRom ? ' checked' : '') + '> Show pronunciation (romanization, romaji, pinyin…) before revealing the answer</label>' +
      '<label class="check"><input type="checkbox" id="autoplay"' + (st.autoplay ? ' checked' : '') + '> Play audio automatically</label>' +
      '<label class="field"><span>Speech speed: <output id="rateOut">' + st.ttsRate + '</output>×</span><input type="range" min="0.5" max="1.3" step="0.1" id="ttsRate" value="' + st.ttsRate + '"></label>' +
      '<p class="small muted">' + esc(book.flag + ' ' + book.language) + ' · ' + (tts.supported ? (voice ? 'Voice: ' + esc(voice.name) : 'No ' + esc(book.language) + ' voice found on this device — install one in your OS language settings for audio.') : 'Speech is not supported in this browser.') +
      ' <button class="btn small" id="testVoice">Test</button></p>' +
      '<h2>Appearance</h2>' +
      '<label class="field"><span>Theme</span><select id="theme">' +
      [['auto', 'Match system'], ['light', 'Light'], ['dark', 'Dark']].map(([v, l]) => '<option value="' + v + '"' + (st.theme === v ? ' selected' : '') + '>' + l + '</option>').join('') +
      '</select></label>' +
      '</div>' +
      '<div class="card stack" style="margin-top:16px"><h2>Your data</h2>' +
      '<p class="small muted">Progress is stored in this browser only. Export a backup regularly, or to move to another device.</p>' +
      '<div class="row"><button class="btn" id="export">Export progress</button>' +
      '<label class="btn">Import progress<input type="file" id="import" accept="application/json" hidden></label>' +
      '<button class="btn" id="reset" style="color:var(--bad)">Reset all progress</button></div>' +
      '<p class="small" id="dataMsg" role="status"></p></div>';

    const bindNum = (id, min, max) =>
      document.getElementById(id).addEventListener('change', (e) => {
        const v = Math.max(min, Math.min(max, Math.round(Number(e.target.value) || 0)));
        e.target.value = v;
        st[id] = v;
        save();
      });
    bindNum('dailyNew', 0, 200);
    bindNum('dailyGoal', 1, 1000);
    document.getElementById('direction').addEventListener('change', (e) => { st.direction = e.target.value; save(); });
    document.getElementById('showRom').addEventListener('change', (e) => { st.showRom = e.target.checked; save(); });
    document.getElementById('autoplay').addEventListener('change', (e) => { st.autoplay = e.target.checked; save(); });
    document.getElementById('ttsRate').addEventListener('input', (e) => {
      st.ttsRate = Number(e.target.value);
      document.getElementById('rateOut').textContent = st.ttsRate;
      save();
    });
    document.getElementById('testVoice').addEventListener('click', () => tts.speak(book.chapters[0].items[0].text, book.ttsLang));
    document.getElementById('theme').addEventListener('change', (e) => { st.theme = e.target.value; save(); applyTheme(); });

    const msg = document.getElementById('dataMsg');
    document.getElementById('export').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'langtrack-backup-' + Tracker.dateKey(Date.now()) + '.json';
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      msg.textContent = 'Backup downloaded.';
    });
    document.getElementById('import').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      file.text().then((text) => {
        try {
          const data = JSON.parse(text);
          if (!data || typeof data.cards !== 'object' || typeof data.logs !== 'object') throw new Error('not a LangTrack backup');
          if (!confirm('Replace your current progress with this backup?')) return;
          state = { version: 1, settings: Object.assign({}, DEFAULT_SETTINGS, data.settings), cards: data.cards, logs: data.logs };
          save();
          applyTheme();
          viewSettings();
          document.getElementById('dataMsg').textContent = 'Progress imported.';
        } catch (err) {
          msg.textContent = 'Import failed: ' + err.message;
        }
      });
    });
    document.getElementById('reset').addEventListener('click', () => {
      if (!confirm('Delete ALL progress and study history? This cannot be undone.')) return;
      state = { version: 1, settings: state.settings, cards: {}, logs: {} };
      save();
      msg.textContent = 'Progress reset.';
    });
  }

  // ---------- Language switcher (top bar) ----------

  const $lang = document.getElementById('langSwitch');

  function renderLangSwitch() {
    if (!$lang) return;
    $lang.innerHTML = BOOKS.map((b) => '<option value="' + esc(b.id) + '"' + (b.id === activeBook().id ? ' selected' : '') + '>' + esc(b.flag + ' ' + b.language) + '</option>').join('');
    $lang.hidden = BOOKS.length < 2;
  }

  if ($lang) {
    $lang.addEventListener('change', () => {
      setActiveBook($lang.value);
      // Pages tied to one book go back to Today; the others re-render for the new language.
      const { name } = currentRoute();
      if (['book', 'chapter', 'study', 'quiz'].includes(name) && location.hash !== '#/') location.hash = '#/';
      else route();
    });
  }

  // ---------- Router ----------

  function currentRoute() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    return { name: parts[0] || 'dashboard', args: parts.slice(1) };
  }

  function route() {
    const { name, args } = currentRoute();
    $tip.hidden = true;
    if (tts.supported) speechSynthesis.cancel();
    if (name !== 'study') session = null;
    if (name !== 'quiz') quiz = null;
    const navName = { book: 'library', chapter: 'library', study: 'dashboard' }[name] || name;
    document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('active', a.getAttribute('data-nav') === navName));

    switch (name) {
      case 'library': viewLibrary(); break;
      case 'book': viewBook(args[0]); break;
      case 'chapter': viewChapter(args[0], Number(args[1])); break;
      case 'study': startSession(args[0], args[1] ? Number(args[1]) : null); break;
      case 'quiz': startQuiz(args[0], args[1] ? Number(args[1]) : null); break;
      case 'stats': viewStats(); break;
      case 'settings': viewSettings(); break;
      default: viewDashboard();
    }
    window.scrollTo(0, 0);
  }

  applyTheme();
  renderLangSwitch();
  window.addEventListener('hashchange', route);
  route();
})();
