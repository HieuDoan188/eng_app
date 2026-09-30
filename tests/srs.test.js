'use strict';
const test = require('node:test');
const assert = require('node:assert');
const SRS = require('../js/srs.js');

const { GRADES, DAY } = SRS;
const NOW = new Date(2026, 8, 30, 10, 0, 0).getTime();

test('a new card answered Good is due tomorrow', () => {
  const c = SRS.schedule(undefined, GRADES.GOOD, NOW);
  assert.strictEqual(c.reps, 1);
  assert.strictEqual(c.interval, 1);
  assert.strictEqual(c.due, SRS.startOfDay(NOW) + DAY);
  assert.strictEqual(SRS.status(c), 'learning');
});

test('Easy on a new card skips ahead', () => {
  assert.strictEqual(SRS.schedule(undefined, GRADES.EASY, NOW).interval, 4);
});

test('intervals grow with successive Good answers', () => {
  let c = SRS.schedule(undefined, GRADES.GOOD, NOW);
  c = SRS.schedule(c, GRADES.GOOD, c.due);
  assert.strictEqual(c.interval, 6);
  const before = c.interval;
  c = SRS.schedule(c, GRADES.GOOD, c.due);
  assert.ok(c.interval > before);
  assert.strictEqual(SRS.status(c), 'review');
});

test('Again resets the card, counts a lapse and comes back within minutes', () => {
  let c = SRS.schedule(undefined, GRADES.GOOD, NOW);
  c = SRS.schedule(c, GRADES.GOOD, NOW);
  c = SRS.schedule(c, GRADES.AGAIN, NOW);
  assert.strictEqual(c.reps, 0);
  assert.strictEqual(c.lapses, 1);
  assert.ok(c.due > NOW && c.due - NOW <= 15 * 60 * 1000);
  assert.ok(c.ease < 2.5);
});

test('ease never drops below 1.3', () => {
  let c;
  for (let i = 0; i < 30; i++) c = SRS.schedule(c, GRADES.AGAIN, NOW);
  assert.strictEqual(c.ease, 1.3);
});

test('a card reaches mastered after enough Good reviews', () => {
  let c;
  let t = NOW;
  for (let i = 0; i < 5; i++) {
    c = SRS.schedule(c, GRADES.GOOD, t);
    t = c.due;
  }
  assert.strictEqual(SRS.status(c), 'mastered');
});

test('isDue and previewLabel', () => {
  const c = SRS.schedule(undefined, GRADES.GOOD, NOW);
  assert.strictEqual(SRS.isDue(c, NOW), false);
  assert.strictEqual(SRS.isDue(c, c.due), true);
  assert.strictEqual(SRS.previewLabel(undefined, GRADES.AGAIN, NOW), '10m');
  assert.strictEqual(SRS.previewLabel(undefined, GRADES.GOOD, NOW), '1d');
});

test('previewLabel shows days for a Good answer late in the day', () => {
  const lateEvening = new Date(2026, 8, 30, 22, 0, 0).getTime();
  assert.strictEqual(SRS.previewLabel(undefined, GRADES.GOOD, lateEvening), '1d');
});
