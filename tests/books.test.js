'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { parseBook } = require('../scripts/build-books.js');

test('korean-1000 transcription has 1000 numbered sentences in 41 chapters', () => {
  const text = fs.readFileSync(path.join(__dirname, '../data/raw/korean-1000.txt'), 'utf8');
  const chapters = parseBook(text);
  assert.strictEqual(chapters.length, 41);
  const items = chapters.flatMap((c) => c.items);
  assert.deepStrictEqual(items.map((i) => i.n), Array.from({ length: 1000 }, (_, i) => i + 1));
  for (const it of items) {
    assert.ok(/[가-힣]/.test(it.text), `#${it.n} has Korean text`);
    assert.ok(it.rom && it.meaning, `#${it.n} has romanization and meaning`);
  }
});

test('generated book file is up to date with the raw transcription', () => {
  const window = {};
  new Function('window', fs.readFileSync(path.join(__dirname, '../data/books/korean-1000.js'), 'utf8'))(window);
  const text = fs.readFileSync(path.join(__dirname, '../data/raw/korean-1000.txt'), 'utf8');
  assert.deepStrictEqual(window.LT_BOOKS[0].chapters, parseBook(text), 'run npm run build:data');
});
