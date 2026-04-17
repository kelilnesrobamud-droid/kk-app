const CACHE_NAME = 'ibn-abbas-snake-v1';
const ASSETS = [
    './',
    './index.html', // የ HTML ፋይሉ ስም index.html ከሆነ
];

// ፋይሎችን ሚሞሪ ውስጥ መጫን
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// ያለ ኢንተርኔት ሲከፈት ከሚሞሪው አውጥቶ ማሳየት
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
