// Basics (alphabet / sounds) practice logic.
// Pure functions: shared by the browser (window.BasicsCore) and the Node tests.
(function (root) {
  'use strict';

  const KNOWN_STREAK = 3; // correct answers in a row to count a letter as "known"

  function itemKey(lang, groupId, item) {
    return lang + ':' + groupId + ':' + item.ch;
  }

  function isKnown(stat) {
    return !!stat && stat.streak >= KNOWN_STREAK;
  }

  // Returns a new stat after one answer.
  function recordAnswer(stat, correct) {
    const s = Object.assign({ streak: 0, right: 0, wrong: 0 }, stat);
    if (correct) {
      s.right += 1;
      s.streak += 1;
    } else {
      s.wrong += 1;
      s.streak = 0;
    }
    return s;
  }

  function groupProgress(lang, group, stats) {
    const known = group.items.filter((it) => isKnown(stats[itemKey(lang, group.id, it)])).length;
    return { known, total: group.items.length };
  }

  function shuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Picks up to 3 wrong options for `item`, preferring look-alikes/sound-alikes
  // (same `set`), then the rest of the group. Options are unique by `field`.
  function distractors(item, pool, field, rng) {
    const seen = new Set([item[field]]);
    const same = shuffle(pool.filter((x) => x !== item && item.set && x.set === item.set), rng);
    const rest = shuffle(pool.filter((x) => x !== item), rng);
    const out = [];
    for (const x of same.concat(rest)) {
      if (out.length === 3) break;
      if (!seen.has(x[field])) {
        seen.add(x[field]);
        out.push(x);
      }
    }
    return out;
  }

  // Builds a practice round for one group.
  // opts: { lang, length, canListen, rng }
  // Question types: 'read' (see the letter, pick its sound) and
  // 'listen' (hear it, pick the letter). Weakest letters come first.
  function buildPractice(group, stats, opts) {
    const rng = opts.rng || Math.random;
    const length = opts.length || 10;
    const modes = (group.modes || ['read', 'listen']).filter((m) => m !== 'listen' || opts.canListen);
    if (!modes.length) modes.push('read');
    const scored = group.items.map((it) => {
      const st = stats[itemKey(opts.lang, group.id, it)];
      return { it, weight: (st ? st.streak : 0) + rng() };
    });
    scored.sort((a, b) => a.weight - b.weight);
    const picked = scored.slice(0, Math.min(length, scored.length)).map((s) => s.it);
    return shuffle(picked, rng).map((it) => {
      const choices = modes.filter((m) => m !== 'listen' || it.listen !== false);
      const type = choices.length ? choices[Math.floor(rng() * choices.length)] : 'read';
      const field = type === 'read' ? 'rom' : 'ch';
      const options = shuffle([it].concat(distractors(it, group.items, field, rng)), rng);
      return { item: it, type, field, options, answer: options.indexOf(it) };
    });
  }

  const api = { KNOWN_STREAK, itemKey, isKnown, recordAnswer, groupProgress, buildPractice, distractors };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.BasicsCore = api;
})(this);
