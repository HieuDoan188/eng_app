'use strict';
const test = require('node:test');
const assert = require('node:assert');
const T = require('../js/tracker.js');

const at = (y, m, d, h = 12) => new Date(y, m - 1, d, h).getTime();

test('record accumulates into the local day', () => {
  const logs = {};
  T.record(logs, at(2026, 9, 30, 8), { newCards: 1, correct: 1, seconds: 10 });
  T.record(logs, at(2026, 9, 30, 22), { reviews: 2, seconds: 5 });
  assert.deepStrictEqual(logs['2026-09-30'], { reviews: 2, newCards: 1, correct: 1, again: 0, seconds: 15, quiz: 0, quizCorrect: 0 });
});

test('addDays crosses month and year boundaries', () => {
  assert.strictEqual(T.addDays('2026-12-31', 1), '2027-01-01');
  assert.strictEqual(T.addDays('2026-03-01', -1), '2026-02-28');
});

test('streak counts consecutive days and survives an unstudied today', () => {
  const logs = {};
  T.record(logs, at(2026, 9, 27), { reviews: 1 });
  T.record(logs, at(2026, 9, 28), { quiz: 1 });
  T.record(logs, at(2026, 9, 29), { newCards: 3 });
  assert.strictEqual(T.streak(logs, at(2026, 9, 29)), 3);
  assert.strictEqual(T.streak(logs, at(2026, 9, 30)), 3); // today not studied yet
  assert.strictEqual(T.streak(logs, at(2026, 10, 1)), 0); // missed a day
});

test('longestStreak finds the best run', () => {
  const logs = {};
  ['2026-09-01', '2026-09-02', '2026-09-05', '2026-09-06', '2026-09-07'].forEach((k) => (logs[k] = Object.assign(T.emptyDay(), { reviews: 1 })));
  assert.strictEqual(T.longestStreak(logs), 3);
});

test('calendar returns whole weeks starting on Monday', () => {
  const cells = T.calendar({}, at(2026, 9, 30), 4); // a Wednesday
  assert.strictEqual(cells.length, 28);
  assert.strictEqual(new Date(cells[0].key + 'T00:00').getDay(), 1);
  assert.strictEqual(cells.filter((c) => c.future).length, 4); // Thu-Sun
});

test('record keeps per-book counters next to the totals', () => {
  const logs = {};
  T.record(logs, at(2026, 9, 30), { newCards: 1, 'new:japanese-1000': 1, 'book:japanese-1000': 1 });
  T.record(logs, at(2026, 9, 30), { reviews: 1, 'book:korean-1000': 1 });
  const day = logs['2026-09-30'];
  assert.strictEqual(day['new:japanese-1000'], 1);
  assert.strictEqual(day['book:korean-1000'], 1);
  assert.strictEqual(T.cardsStudied(day), 2);
  assert.strictEqual(T.totals(logs).newCards, 1);
});
