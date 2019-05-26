self.addEventListener('install', event => {
    event.waitUntil(
        // Make interception work first time round https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
        self.clients.claim(),
        caches
        .open('test-site')
        .then(cache =>
            cache.addAll([
                'data.json',
                'https://fonts.googleapis.com/css?family=Roboto:400'
            ])
        )
    )
})

console.log("adding fetch event listener")
self.addEventListener('fetch', function(event){
    console.log('Caught request for ' + event.request.url);
    if (event.request.url.includes("/response-direct-from-service-worker.json")) {
        event.respondWith(new Response(`{"hello": "world"}`))
    }
});