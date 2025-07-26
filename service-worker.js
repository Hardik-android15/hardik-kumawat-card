const CACHE_NAME = 'hardik-digital-card-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/assets/front-image.jpg',
  '/assets/qrcode.png',
  '/assets/icons/phone.png',
  '/assets/icons/whatsapp.png',
  '/assets/icons/email.png',
  '/assets/icons/instagram.png',
  '/assets/icons/linkedin.png',
  '/assets/icons/snapchat.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
