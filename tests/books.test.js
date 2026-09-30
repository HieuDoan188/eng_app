'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { parseBook, BOOKS } = require('../scripts/build-books.js');

// A character from the book's own script must appear in every sentence.
const SCRIPT = {
  ko: /[가-힣]/, // Hangul
  ja: /[぀-ヿ一-鿿]/, // kana or kanji
  'zh-CN': /[一-鿿]/, // Han
  ru: /[Ѐ-ӿ]/, // Cyrillic
  es: /[A-Za-zÁÉÍÓÚÑáéíóúñ]/, // Latin
  en: /[A-Za-z]/, // Latin
};

const loadGenerated = (id) => {
  const window = {};
  new Function('window', fs.readFileSync(path.join(__dirname, '../data/books', id + '.js'), 'utf8'))(window);
  return window.LT_BOOKS[0];
};

test('six books are registered, each with the metadata the app needs', () => {
  assert.deepStrictEqual(BOOKS.map((b) => b.lang), ['ko', 'ja', 'zh-CN', 'ru', 'es', 'en']);
  for (const b of BOOKS) {
    for (const f of ['id', 'title', 'language', 'flag', 'lang', 'ttsLang', 'meaningLang']) assert.ok(b[f], `${b.id}.${f}`);
  }
});

test('index.html loads every generated book', () => {
  const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  for (const b of BOOKS) assert.ok(html.includes(`data/books/${b.id}.js`), b.id);
});

for (const book of BOOKS) {
  test(`${book.id}: 1000 numbered sentences in its own script, with meanings`, () => {
    const chapters = parseBook(fs.readFileSync(path.join(__dirname, '..', book.raw), 'utf8'));
    const items = chapters.flatMap((c) => c.items);
    assert.deepStrictEqual(items.map((i) => i.n), Array.from({ length: 1000 }, (_, i) => i + 1));
    for (const it of items) {
      assert.ok(SCRIPT[book.lang].test(it.text), `#${it.n} is written in ${book.language}`);
      assert.ok(it.meaning, `#${it.n} has a meaning`);
      if (book.romLabel) assert.ok(it.rom, `#${it.n} has ${book.romLabel}`);
    }
  });

  test(`${book.id}: generated file is up to date (npm run build:data)`, () => {
    const text = fs.readFileSync(path.join(__dirname, '..', book.raw), 'utf8');
    const gen = loadGenerated(book.id);
    assert.deepStrictEqual(gen.chapters, parseBook(text));
    assert.strictEqual(gen.lang, book.lang);
    assert.strictEqual(gen.ttsLang, book.ttsLang);
  });
}
