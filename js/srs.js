// Spaced-repetition scheduling (a simplified SM-2).
// Pure functions: shared by the browser (window.SRS) and the Node tests.
(function (root) {
  'use strict';

  const MINUTE = 60 * 1000;
  const DAY = 24 * 60 * MINUTE;
  const MIN_EASE = 1.3;
  const START_EASE = 2.5;
  const MASTERED_DAYS = 21; // interval at which a card counts as "mastered"
  const RELEARN_DELAY = 10 * MINUTE; // a failed card comes back this soon

  const GRADES = { AGAIN: 0, HARD: 1, GOOD: 2, EASY: 3 };

  function newCard() {
    return { reps: 0, interval: 0, ease: START_EASE, due: 0, lapses: 0, last: 0 };
  }

  function startOfDay(ts) {
    const d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }

  // Returns a new card state after answering with `grade` at time `now`.
  function schedule(card, grade, now) {
    const c = Object.assign(newCard(), card);
    c.last = now;

    if (grade === GRADES.AGAIN) {
      c.ease = Math.max(MIN_EASE, c.ease - 0.2);
      if (c.reps > 0) c.lapses += 1;
      c.reps = 0;
      c.interval = 0;
      c.due = now + RELEARN_DELAY;
      return c;
    }

    let interval;
    if (c.reps === 0) {
      interval = grade === GRADES.EASY ? 4 : 1;
    } else if (c.reps === 1) {
      interval = grade === GRADES.HARD ? 3 : grade === GRADES.GOOD ? 6 : 8;
    } else {
      const factor = grade === GRADES.HARD ? 1.2 : grade === GRADES.GOOD ? c.ease : c.ease * 1.3;
      interval = Math.max(c.interval + 1, Math.round(c.interval * factor));
    }

    if (grade === GRADES.HARD) c.ease = Math.max(MIN_EASE, c.ease - 0.15);
    if (grade === GRADES.EASY) c.ease += 0.15;

    c.reps += 1;
    c.interval = interval;
    // Due at the start of the target day, so a card is ready all day long.
    c.due = startOfDay(now) + interval * DAY;
    return c;
  }

  function isDue(card, now) {
    return !!card && card.due <= now;
  }

  // "new" = never seen, "learning" = seen but not yet at a stable interval,
  // "review" = in the long-term cycle, "mastered" = interval >= 21 days.
  function status(card) {
    if (!card) return 'new';
    if (card.interval >= MASTERED_DAYS) return 'mastered';
    if (card.reps >= 2) return 'review';
    return 'learning';
  }

  // Human-friendly preview of the next interval for each button.
  function previewLabel(card, grade, now) {
    const next = schedule(card || newCard(), grade, now);
    if (next.interval === 0) return Math.max(1, Math.round((next.due - now) / MINUTE)) + 'm';
    const days = next.interval;
    if (days < 30) return days + 'd';
    if (days < 365) return Math.round(days / 30) + 'mo';
    return (days / 365).toFixed(1) + 'y';
  }

  const api = { GRADES, DAY, MASTERED_DAYS, newCard, schedule, isDue, status, previewLabel, startOfDay };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SRS = api;
})(this);
