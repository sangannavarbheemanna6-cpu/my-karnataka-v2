importScripts('/workbox-9c191d2f.js');
self.addEventListener('issueHelper', (e) => e.respondWith(fetch(e.request)));
precacheAndRoute([
  {url: '/index.html', revision: '12' },
  {url: '/assets/index-D0gTHLy9.css', revision: '12' },
  {url: '/assets/index-D08mMvoA.js', revision: '12' }
]);