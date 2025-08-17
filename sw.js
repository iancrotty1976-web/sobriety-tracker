const CACHE = 'sobriety-cache-test';

self.addEventListener('install', event => {
  console.log('[SW] Install event');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('[SW] Activate event');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // For now, just let requests go to network
  event.respondWith(fetch(event.request));
});