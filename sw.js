const cacheName = 'files';

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }
  event.respondWith(async function() {
    const responseFromFetch = fetch(request);
    event.waitUntil(async function() {
      const responseCopy = (await responseFromFetch).clone();
      const myCache = await caches.open(cacheName);
      await myCache.put(request, responseCopy);
    }());
    const responseFromCache = await caches.match(request);
    return responseFromCache || responseFromFetch;
  }());
});
