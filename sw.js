const CACHE = 'sobriety-cache-v6';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './screenshots/wide-1.png',
  './screenshots/narrow-1.png'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request)
    )
  );
});