self.addEventListener('install', event => {
    event.waitUntil(
        // Make interception work first time round https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
        caches
        .open('test-site')
        .then(cache =>
            cache.addAll([
                'lodash.js',
            ])
        )
    )
})

self.addEventListener('activate', (event) => {
    console.log('Event: Activate');
    self.clients.claim()
})

console.log("adding fetch event listener")
self.addEventListener('fetch', function(event){
    event.respondWith(caches.match(event.request));
});