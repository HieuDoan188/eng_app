# LangTrack

A personal language-study app. It teaches the vocabulary and sentences in your study books with spaced repetition, and it tracks your daily study routine.

**Phase 1:** learn the sentences in a book (flashcards, a quiz and audio) and track your progress.
The first book is **1000 Câu Tiếng Hàn Thông Dụng Nhất**: 1000 common Korean sentences with romanization and Vietnamese meanings, in 41 topic chapters.

## Features

- **Today dashboard**: a daily goal ring, your study streak, cards due now, book progress and an activity heatmap.
- **Flashcards with spaced repetition** (simplified SM-2). You grade each card Again / Hard / Good / Easy, and the app schedules its next review. Each button shows the next interval before you press it.
  - Card directions: Korean → meaning, meaning → Korean, or mixed.
  - Each day brings a limited number of new sentences (default 10), spread among your reviews. You can learn more with "Learn 10 more".
  - Keyboard shortcuts: `Space` shows the answer, `1`–`4` grade the card, `P` plays the audio.
- **Audio** through the browser's built-in text-to-speech (Korean voice).
- **Quiz**: 10 multiple-choice questions on the sentences you have learned: *meaning*, *pick the Korean* and *listen*. A missed sentence becomes due for review again.
- **Library**: browse every chapter with audio and a status for each sentence (new / learning / review / mastered), and study one chapter at a time.
- **Progress**: streaks, a 26-week heatmap, a log of the last 14 days (new cards, reviews, recall %, quiz, time, whether you met your goal) and the reviews due in the next 7 days.
- **Settings**: new cards per day, daily goal, card direction, romanization, autoplay, speech speed and theme (light / dark / system).
- **Your data**: progress is saved in the browser (`localStorage`). *Export* and *Import* back it up or move it to another device.

## Run it

It has no build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
npm run serve        # http://localhost:8080
# or: python3 -m http.server 8080
```

It also works on GitHub Pages: turn Pages on for the repo root.

> Audio uses the voices installed on your device. If there is no Korean voice, install one in your OS language settings. Android and iOS have one built in.

## Project layout

```
index.html              app shell
css/styles.css          styles (light + dark)
js/srs.js               spaced-repetition scheduler (pure, unit-tested)
js/tracker.js           daily log / streak / calendar (pure, unit-tested)
js/app.js               UI: router, views, study session, quiz, settings
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
2. Add an entry to `BOOKS` in `scripts/build-books.js` (id, title, language, `ttsLang` such as `en-US` or `ko-KR`, meaning language).
3. Run `npm run build:data`, then add a `<script src="data/books/<id>.js">` line to `index.html`.
4. Run `npm test`.

## Development

```bash
npm test             # unit tests (Node 18+)
npm run build:data   # regenerate data/books after editing data/raw
```

## Roadmap

- **Phase 1 (done):** vocabulary and sentence learning from books, with SRS, quiz, audio and routine tracking.
- **Next ideas:** more books (English vocabulary books), typing and dictation practice, word-level vocabulary extracted from the sentences, a study reminder and calendar, sync across devices, and an installable PWA for offline use.
