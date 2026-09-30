# LangTrack

A personal language-study app. It teaches the vocabulary and sentences in your study books with spaced repetition, and it tracks your daily study routine.

**Phase 1:** learn the sentences in a book (flashcards, a quiz and audio) and track your progress.
Seven books are included. Each has 1000 common sentences with Vietnamese meanings:

| Language | Book | Pronunciation | Chapters |
|---|---|---|---|
| 🇰🇷 Korean | 1000 Câu Tiếng Hàn Thông Dụng Nhất | romanization | 41 |
| 🇯🇵 Japanese | 1000 Câu Tiếng Nhật Thông Dụng Nhất | romaji | 26 |
| 🇨🇳 Chinese | 1000 Câu Tiếng Trung Thông Dụng Nhất | pinyin | 14 |
| 🇷🇺 Russian | 1000 Câu Tiếng Nga Thông Dụng Nhất | transliteration | 34 |
| 🇪🇸 Spanish | 1000 Câu Tiếng Tây Ban Nha Thông Dụng Nhất | (none) | 51 |
| 🇬🇧 English | 1000 Câu Tiếng Anh Thông Dụng Nhất | (none) | 71 |
| 🇫🇷 French | 1000 Câu Tiếng Pháp Thông Dụng Nhất | (none) | 50 |

Switch language with the selector in the top bar. Each language keeps its own progress and its own daily new-sentence limit. The streak and daily goal count all languages together.

## Features

- **Basics** (start here for a new language): a short course for each language, written in Vietnamese.
  - **Alphabet & sounds**: tap-to-hear charts and practice rounds (see the letter and pick its sound, or listen and pick the letter). The app tracks each letter, and 3 correct answers in a row count it as known.
    - Korean: Hangul consonants, double consonants, vowels, compound vowels and patchim.
    - Japanese: hiragana, dakuten, yōon and katakana.
    - Chinese: tones, initials, finals and 20 common radicals.
    - Russian: Cyrillic letters in 3 groups (familiar, look-alikes that sound different, new).
    - Spanish: vowels, familiar consonants and special letters.
    - English: the alphabet (letter names), and IPA vowels, diphthongs and tricky consonants.
    - French: vowels and accents, vowel combinations, nasal vowels and special consonants.
  - **Pronunciation & reading**: 5–6 lessons per language covering reading rules such as liaison and nasalization (Korean), long vowels and っ (Japanese), tone sandhi (Chinese), stress and vowel reduction (Russian), stress and accent marks (Spanish), and long/short vowels, TH, -s/-ed endings, word stress, linking and silent letters (English), and silent final letters, nasal vowels, liaison and élision (French).
  - **Core grammar**: 10–12 lessons per language with explanations, patterns, conjugation tables, examples with audio, and check questions. A lesson is done when you answer all its questions correctly.
  - The Today page shows your Basics progress and the next step.

- **Today dashboard**: a daily goal ring, your study streak, cards due now, book progress, a **Your languages** overview (progress, what's due and a Study button for each language) and an activity heatmap.
- **Flashcards with spaced repetition** (simplified SM-2). You grade each card Again / Hard / Good / Easy, and the app schedules its next review. Each button shows the next interval before you press it.
  - Card directions: sentence → meaning, meaning → sentence, or mixed.
  - Each day brings a limited number of new sentences (default 10), spread among your reviews. You can learn more with "Learn 10 more".
  - Keyboard shortcuts: `Space` shows the answer, `1`–`4` grade the card, `P` plays the audio.
- **Audio** through the browser's built-in text-to-speech, using a voice for the language you are studying.
- **Quiz**: 10 multiple-choice questions on the sentences you have learned: *meaning*, *pick the sentence* and *listen*. A missed sentence becomes due for review again.
- **Library**: browse every chapter with audio and a status for each sentence (new / learning / review / mastered), and study one chapter at a time.
- **Progress**: a per-language table (learned, mastered, due, last 7 days), streaks, a 26-week heatmap, a log of the last 14 days (new cards, reviews, recall %, quiz, time, whether you met your goal) and the reviews due in the next 7 days.
- **Settings**: new cards per day, daily goal, card direction, pronunciation line, autoplay, speech speed and theme (light / dark / system).
- **Your data**: progress is saved in the browser (`localStorage`). *Export* and *Import* back it up or move it to another device.

## Run it

It has no build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
npm run serve        # http://localhost:8080
# or: python3 -m http.server 8080
```

It also works on GitHub Pages: turn Pages on for the repo root.

### Install on a phone

LangTrack is a PWA (installable web app). It has a web app manifest (`manifest.webmanifest`) and a service worker (`sw.js`) that caches every app file, so after the first visit it opens offline.

1. Host it over https, for example with GitHub Pages (Settings → Pages → Deploy from a branch → your branch, `/ (root)`).
2. On Android, open the site in Chrome, then use the menu (⋮) → **Install app** (or **Add to Home screen**).
3. On iPhone, open it in Safari, then Share → **Add to Home Screen**.

Updates arrive in the background: open the app once while online, and the new version loads the next time you open it. When you add or remove app files, update the `ASSETS` list and bump `VERSION` in `sw.js`.

Progress is stored on the device. To move it between devices, use Settings → Export / Import.

> Audio uses the voices installed on your device. If a language has no voice, install one in your OS language settings. Android and iOS include voices for all seven languages.

## Project layout

```
index.html              app shell
css/styles.css          styles (light + dark)
js/srs.js               spaced-repetition scheduler (pure, unit-tested)
js/tracker.js           daily log / streak / calendar (pure, unit-tested)
js/basics-core.js       Basics practice logic (pure, unit-tested)
js/app.js               UI: router, views, study session, quiz, basics, settings
data/basics/*.js        Basics courses: alphabet groups + lessons per language
data/raw/*.txt          book transcriptions (source of truth)
data/books/*.js         generated book files loaded by the app
scripts/build-books.js  raw .txt -> data/books/*.js
tests/                  node:test unit tests
```

## Adding a book

1. Write a transcription in `data/raw/<id>.txt`:
   ```
   ## <chapter no>|<chapter title>|<native-language title>
   <no>|<sentence>|<romanization>|<meaning>
   ```
   Number the sentences 1..N in order across the whole book.
   Leave the pronunciation field empty if the book has none (like Spanish).
2. Add an entry to `BOOKS` in `scripts/build-books.js`: id, title, language, flag, `lang` (HTML language code), `ttsLang` (voice, such as `en-US`), `romLabel` and meaning language.
3. Run `npm run build:data`, then add a `<script src="data/books/<id>.js">` line to `index.html`.
4. Run `npm test`.

## Basics data

Each `data/basics/<lang>.js` registers `window.LT_BASICS[<lang>]`, where `<lang>` is the book's `lang` code:

```js
{
  intro: '…',
  groups: [{ id, title, native, desc, modes?: ['read', 'listen'],
             items: [{ ch, rom, say, set?, name?, note?, listen?: false }] }],
  lessons: [{ id, kind: 'pronunciation' | 'grammar', title, summary, body: ['…'],
              patterns?: ['…'], tables?: [{ title, head: [], rows: [[]] }],
              examples: [{ t, r, v }], quiz: [{ q, o: ['…'], a: 0, why? }] }],
}
```

- `ch` is the letter shown, `rom` its sound, and `say` the text the speech voice reads.
- Items with the same `set` are used as wrong options for each other (look-alikes and sound-alikes).
- In `quiz`, `a` is the index of the correct option. The app shuffles the options when it shows them.

## Development

```bash
npm test             # unit tests (Node 18+)
npm run build:data   # regenerate data/books after editing data/raw
```

## Roadmap

- **Phase 1 (done):** sentence learning from books with SRS, quiz, audio and routine tracking. Seven languages: Korean, Japanese, Chinese, Russian, Spanish, English and French.
- **Basics (done):** alphabet and sound practice, pronunciation rules and core grammar for each language.
- **Next ideas:** more books, typing and dictation practice, word-level vocabulary extracted from the sentences, a study reminder and calendar, and sync across devices.
