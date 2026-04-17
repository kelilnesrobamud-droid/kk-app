const cacheName = 'kelil-app-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon.png',
  './hadith.mp3'
];

// አፑ ሲጫን ፋይሎቹን ስልክ ውስጥ ይቆልፋል
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// ያለ ዳታ ሲከፈት ከስልኩ ትውስታ ያነባል
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
