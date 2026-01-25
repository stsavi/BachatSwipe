const CACHE_NAME = 'bachatswipe-v3';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/ui/app.js',
    '/ui/validator.js',
    '/ui/errorHandler.js',
    '/ui/formHandler.js',
    '/ui/resultsRenderer.js',
    '/engine/index.js',
    '/engine/dataLoader.js',
    '/engine/calculator.js',
    '/engine/ruleMatcher.js',
    '/engine/pathGenerator.js',
    '/engine/pathEvaluator.js',
    '/config/bank_platforms.js',
    '/config/categories.js',
    '/config/merchants.js',
    '/metadata/images/icon.jpg'
];

// Install Event - Cache assets
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all assets');
            // Use a per-asset caching to avoid one failure breaking everything
            return Promise.allSettled(
                ASSETS_TO_CACHE.map(url => cache.add(url).catch(err => console.error(`Failed to cache ${url}:`, err)))
            );
        })
    );
});

// Activate Event - Clean up old caches and claim clients
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            clients.claim(),
            caches.keys().then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Removing old cache', key);
                        return caches.delete(key);
                    }
                }));
            })
        ])
    );
});

// Fetch Event - Serve from cache, then network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResponse) => {
                return fetchResponse;
            });
        }).catch(() => {
            // Fallback for offline if matching failed
            return caches.match('/index.html');
        })
    );
});
