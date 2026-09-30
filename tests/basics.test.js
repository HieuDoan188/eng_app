'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const BC = require('../js/basics-core.js');
const { BOOKS } = require('../scripts/build-books.js');

const FILES = { ko: 'ko.js', ja: 'ja.js', 'zh-CN': 'zh.js', ru: 'ru.js', es: 'es.js' };
const window = {};
for (const f of Object.values(FILES)) {
  new Function('window', fs.readFileSync(path.join(__dirname, '../data/basics', f), 'utf8'))(window);
}
const BASICS = window.LT_BASICS;

test('every book language has a basics course, and index.html loads it', () => {
  const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  for (const b of BOOKS) {
    assert.ok(BASICS[b.lang], `basics for ${b.lang}`);
    assert.ok(html.includes('data/basics/' + FILES[b.lang]), `index.html loads ${FILES[b.lang]}`);
  }
  assert.ok(html.includes('js/basics-core.js'));
});

for (const [lang, course] of Object.entries(BASICS)) {
  test(`${lang}: alphabet groups are well-formed`, () => {
    assert.ok(course.intro);
    assert.ok(course.groups.length >= 3);
    const ids = new Set();
    for (const g of course.groups) {
      assert.ok(!ids.has(g.id), `unique group id ${g.id}`);
      ids.add(g.id);
      assert.ok(g.title && g.desc && g.items.length >= 5, `${g.id} has title, desc and items`);
      const chars = new Set();
      for (const it of g.items) {
        assert.ok(it.ch && it.rom && it.say, `${g.id}: item has ch, rom and say: ${JSON.stringify(it)}`);
        assert.ok(!chars.has(it.ch), `${g.id}: duplicate ${it.ch}`);
        chars.add(it.ch);
      }
      // Practice needs 4 distinct answers for every question type the group uses.
      const modes = g.modes || ['read', 'listen'];
      if (modes.includes('read')) assert.ok(new Set(g.items.map((i) => i.rom)).size >= 4, `${g.id}: ≥4 distinct sounds`);
    }
  });

  test(`${lang}: lessons cover pronunciation and grammar with valid quizzes`, () => {
    const ids = new Set();
    const kinds = { pronunciation: 0, grammar: 0 };
    for (const l of course.lessons) {
      assert.ok(!ids.has(l.id), `unique lesson id ${l.id}`);
      ids.add(l.id);
      assert.ok(l.kind in kinds, `${l.id}: kind`);
      kinds[l.kind] += 1;
      assert.ok(l.title && l.summary && l.body.length, `${l.id}: text`);
      assert.ok(l.examples.length >= 3, `${l.id}: examples`);
      for (const e of l.examples) assert.ok(e.t && e.v && typeof e.r === 'string', `${l.id}: example fields`);
      for (const t of l.tables || []) for (const r of t.rows) assert.strictEqual(r.length, t.head.length, `${l.id}: table row width`);
      assert.ok(l.quiz.length >= 2, `${l.id}: quiz`);
      for (const q of l.quiz) {
        assert.ok(q.o.length >= 2 && q.a >= 0 && q.a < q.o.length, `${l.id}: answer index`);
        assert.strictEqual(new Set(q.o).size, q.o.length, `${l.id}: duplicate options in "${q.q}"`);
      }
    }
    assert.ok(kinds.pronunciation >= 5, 'at least 5 pronunciation lessons');
    assert.ok(kinds.grammar >= 10, 'at least 10 grammar lessons');
  });
}

// Deterministic RNG for the practice tests.
function seeded(n) {
  let x = n;
  return () => ((x = (x * 16807) % 2147483647) / 2147483647);
}

test('recordAnswer tracks streaks; 3 in a row makes a letter known', () => {
  let s;
  s = BC.recordAnswer(s, true);
  s = BC.recordAnswer(s, true);
  assert.strictEqual(BC.isKnown(s), false);
  s = BC.recordAnswer(s, true);
  assert.strictEqual(BC.isKnown(s), true);
  s = BC.recordAnswer(s, false);
  assert.deepStrictEqual(s, { streak: 0, right: 3, wrong: 1 });
});

test('buildPractice: 10 questions, 4 unique options with the answer included', () => {
  const g = BASICS.ko.groups[0];
  const qs = BC.buildPractice(g, {}, { lang: 'ko', length: 10, canListen: true, rng: seeded(7) });
  assert.strictEqual(qs.length, 10);
  assert.strictEqual(new Set(qs.map((q) => q.item.ch)).size, 10, 'no repeated letters');
  for (const q of qs) {
    assert.strictEqual(q.options.length, 4);
    assert.strictEqual(q.options[q.answer], q.item);
    assert.strictEqual(new Set(q.options.map((o) => o[q.field])).size, 4);
  }
});

test('buildPractice: without speech only reading questions are asked', () => {
  const g = BASICS.ja.groups[0];
  const qs = BC.buildPractice(g, {}, { lang: 'ja', canListen: false, rng: seeded(3) });
  assert.ok(qs.every((q) => q.type === 'read' && q.field === 'rom'));
});

test('buildPractice: listen-only groups fall back to reading when speech is missing', () => {
  const g = BASICS['zh-CN'].groups.find((x) => x.id === 'initials');
  const qs = BC.buildPractice(g, {}, { lang: 'zh-CN', canListen: false, rng: seeded(5) });
  assert.ok(qs.length > 0 && qs.every((q) => q.type === 'read'));
});

test('buildPractice: weakest letters are asked first', () => {
  const g = BASICS.ko.groups[0];
  const stats = {};
  g.items.slice(0, 10).forEach((it) => (stats[BC.itemKey('ko', g.id, it)] = { streak: 5, right: 5, wrong: 0 }));
  const qs = BC.buildPractice(g, stats, { lang: 'ko', length: 4, canListen: true, rng: seeded(11) });
  const weak = new Set(g.items.slice(10).map((it) => it.ch));
  assert.ok(qs.every((q) => weak.has(q.item.ch)));
});

test('distractors prefer look-alikes from the same set', () => {
  const g = BASICS['zh-CN'].groups.find((x) => x.id === 'tones');
  const ma = g.items.find((i) => i.ch === 'mā');
  const d = BC.distractors(ma, g.items, 'ch', seeded(9));
  assert.deepStrictEqual(d.map((x) => x.set), ['ma', 'ma', 'ma']);
});
