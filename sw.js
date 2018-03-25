self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/site.js',
        '/dragon.js',
        '/styles.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  
});