// LangTrack service worker: makes the app installable and usable offline.
// Every app file is cached on install. Requests are served from the cache
// first and refreshed from the network in the background, so an update
// shows up the next time the app is opened. Bump VERSION when adding or
// removing files in ASSETS.
const VERSION = 'v3';
const CACHE = 'langtrack-' + VERSION;

const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/styles.css',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png',
  'data/books/korean-1000.js',
  'data/books/japanese-1000.js',
  'data/books/chinese-1000.js',
  'data/books/russian-1000.js',
  'data/books/spanish-1000.js',
  'data/books/english-1000.js',
  'data/books/french-1000.js',
  'data/basics/ko.js',
  'data/basics/ja.js',
  'data/basics/zh.js',
  'data/basics/ru.js',
  'data/basics/es.js',
  'data/basics/en.js',
  'data/basics/fr.js',
  'js/srs.js',
  'js/basics-core.js',
  'js/tracker.js',
  'js/app.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS.map((a) => new Request(a, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('langtrack-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      // Query strings are ignored so "index.html?x" still hits the cache.
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req)
        .then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      const res = await network;
      if (res) return res;
      if (req.mode === 'navigate') return cache.match('index.html');
      return Response.error();
    })
  );
});
