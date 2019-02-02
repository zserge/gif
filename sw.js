self.addEventListener('fetch', function(event) {
	console.log(event);
  event.respondWith(
    caches.open('files').then(function(cache) {
			console.log('with cache');
      return fetch(event.request).then(function(response) {
				console.log('fetch succeeded', response);
        cache.put(event.request, response.clone());
        return response;
			}, function(error) {
				console.log('fetch failed', error);
				return error;
			});
    })
  );
});
