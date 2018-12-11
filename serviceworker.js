/******************************************
	* Service Worker
	*****************************************/

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open('Offline')
    .then( OfflineCache => {
      OfflineCache.addAll([
       '/offline.html',
       '/css/style.css',
       '/js/script.js'
      ]); // end addAll
    }) // end open.then
  ); // end waitUntil
}); // end addEventListener

// Whenever a file is requested
addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    // First, try to fetch it from the network
    fetch(request)
    .then( responseFromFetch => {
      return responseFromFetch;
    }) // end fetch.then
    // But if that doesn't work
    .catch( fetchError => {
      // try to find it in the cache
      caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
         return responseFromCache;
       // But if that doesn't work
       } else {
         // and it's a request for a web page
         if (request.headers.get('Accept').includes('text/html')) {
           // show the custom offline page instead
           return caches.match('/offline.html');
         } // end if
       } // end if/else
     }) // end match.then
   }) // end fetch.catch
  ); // end respondWith
}); // end addEventListener