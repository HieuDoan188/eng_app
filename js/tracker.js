// Daily study log, streaks and goal tracking.
// Pure functions: shared by the browser (window.Tracker) and the Node tests.
(function (root) {
  'use strict';

  function dateKey(ts) {
    const d = new Date(ts);
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  function addDays(key, n) {
    const [y, m, d] = key.split('-').map(Number);
    return dateKey(new Date(y, m - 1, d + n).getTime());
  }

  function emptyDay() {
    return { reviews: 0, newCards: 0, correct: 0, again: 0, seconds: 0, quiz: 0, quizCorrect: 0 };
  }

  // Mutates `logs` (a map of dateKey -> day) by adding `delta` to the given day.
  function record(logs, ts, delta) {
    const key = dateKey(ts);
    const day = Object.assign(emptyDay(), logs[key]);
    for (const k of Object.keys(delta)) day[k] = (day[k] || 0) + delta[k];
    logs[key] = day;
    return day;
  }

  function cardsStudied(day) {
    return day ? day.reviews + day.newCards : 0;
  }

  function isActive(day) {
    return !!day && cardsStudied(day) + day.quiz > 0;
  }

  // Consecutive active days ending today. If today has no activity yet the
  // streak is still alive as long as yesterday was active.
  function streak(logs, now) {
    let key = dateKey(now);
    if (!isActive(logs[key])) key = addDays(key, -1);
    let count = 0;
    while (isActive(logs[key])) {
      count += 1;
      key = addDays(key, -1);
    }
    return count;
  }

  function longestStreak(logs) {
    const keys = Object.keys(logs).filter((k) => isActive(logs[k])).sort();
    let best = 0;
    let run = 0;
    let prev = null;
    for (const k of keys) {
      run = prev && addDays(prev, 1) === k ? run + 1 : 1;
      best = Math.max(best, run);
      prev = k;
    }
    return best;
  }

  // Last `weeks` full weeks (Mon-Sun columns) ending with the current week,
  // as an array of { key, day, future } in column-major order.
  function calendar(logs, now, weeks) {
    const today = dateKey(now);
    const d = new Date(now);
    const mondayOffset = (d.getDay() + 6) % 7;
    const start = addDays(today, -mondayOffset - (weeks - 1) * 7);
    const cells = [];
    for (let i = 0; i < weeks * 7; i++) {
      const key = addDays(start, i);
      cells.push({ key, day: logs[key] || null, future: key > today });
    }
    return cells;
  }

  function totals(logs) {
    const t = emptyDay();
    let activeDays = 0;
    for (const k of Object.keys(logs)) {
      const day = logs[k];
      for (const f of Object.keys(t)) t[f] += day[f] || 0;
      if (isActive(day)) activeDays += 1;
    }
    t.activeDays = activeDays;
    return t;
  }

  const api = { dateKey, addDays, emptyDay, record, cardsStudied, isActive, streak, longestStreak, calendar, totals };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Tracker = api;
})(this);
