const CACHE_NAME = 'bachatswipe-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './ui/app.js',
    './ui/validator.js',
    './ui/errorHandler.js',
    './ui/formHandler.js',
    './ui/resultsRenderer.js',
    './engine/index.js',
    './engine/dataLoader.js',
    './engine/calculator.js',
    './engine/ruleMatcher.js',
    './engine/pathGenerator.js',
    './engine/pathEvaluator.js',
    './config/bank_platforms.js',
    './config/categories.js',
    './config/merchants.js',
    './metadata/images/icon.jpg'
];

// Install Event - Cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

// Fetch Event - Serve from cache, then network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResponse) => {
                // Optionally cache new resources here (Stale-While-Revalidate)
                return fetchResponse;
            });
        })
    );
});
