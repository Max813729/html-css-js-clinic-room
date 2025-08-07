const CACHE_NAME = 'video-cache-v1';
const VIDEO_LIST = [
  './videos/opening.mp4',
  './videos/doctor2_1.mov',
  './videos/doctor2_2.mov',
  './videos/doctor2_3.mov',
  './videos/doctor2_4.mp4',
  './videos/doctor5_1.mov',
  './videos/doctor5_2.mov',
  './videos/doctor5_7.mov'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(VIDEO_LIST);
    })
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.url.endsWith('.mp4') || req.url.endsWith('.mov')) {
    event.respondWith(
      caches.match(req).then(cached => {
        return cached || fetch(req).then(res => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
          return res;
        });
      })
    );
  }
});
