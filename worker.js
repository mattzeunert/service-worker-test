self.addEventListener('install', event => {
    event.waitUntil(
        caches
        .open('my-site-name')
        .then(cache =>
            cache.addAll([
                'data.json',
                'https://fonts.googleapis.com/css?family=Roboto:400'
            ])
        )
    )
})