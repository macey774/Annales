const CACHE_NAME = 'annales-iug-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
  // Ajoutez ici les PDF que vous souhaitez rendre disponibles hors ligne (facultatif)
  // '/pdf/Cours-Thales-ANNALES-MATHS-Sujet-et-corrige-2022.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
