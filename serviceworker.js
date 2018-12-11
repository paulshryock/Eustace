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