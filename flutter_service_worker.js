'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2b4c67891a586c0683b25271eaf08f3e",
"assets/AssetManifest.bin.json": "d5298f4fac120d968cbefdcd9f33ab6f",
"assets/AssetManifest.json": "b2afd7fd973cb0c6e6e924343554e033",
"assets/assets/back.png": "74a476fe1625f8c65fdd0fe18e8f09c8",
"assets/assets/calculator.jpg": "1cd593825f9c5ab5785993c356613cc9",
"assets/assets/crypto.jpg": "a1d801142b1bb3ea5378b31fa1290b10",
"assets/assets/dart_image.jpg": "2cb638dbb707de87f307395cbb517ee2",
"assets/assets/data.png": "602a820b25d364c422352fa6bcf96b85",
"assets/assets/flappy_bird.png": "7d09f91ae91f6f42cbf14d20c61eafef",
"assets/assets/forward.png": "d4b5c560ba454da56ef408b96a963126",
"assets/assets/front-end-programming.png": "5e4bf1f7c8ab6a1292ac4a673ca7227b",
"assets/assets/handshake.png": "7a9f31073a908e5156ad6839ed1f9d26",
"assets/assets/login_img.png": "65c5683635cd94ac57b95d636c7f74d9",
"assets/assets/responsive-design.png": "c8a7bf0d72542959bde3e3fd9cbbc198",
"assets/assets/safe_buy.jpg": "bf5c5676f3bf2c05fba1e5ff159f34b1",
"assets/assets/sip_and_shop.jpg": "63d3264b3d11544e14c38e77bd825a1c",
"assets/assets/taksh_cv.pdf": "9820c4b875b43c6bf99a728fafcc0d7f",
"assets/assets/taksh_img.jpg": "ea54e51218d96ed6bee8c66553bbb899",
"assets/assets/todo_img.jpg": "de0392daf168a7bddaaaf92af1e17cf1",
"assets/assets/web-design.png": "e42dc4a0a51e267458f8eeaf85e9559f",
"assets/assets/website_image.jpg": "4257094891b17dc2ea239203b7321c2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9cc56bea7bd4b6474e9006faee81a0ff",
"assets/NOTICES": "40364388f858235efa6e7a1dc62711c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "cee01942aaff4b9e8be9e59e4289ba37",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "18f22883afc6153c1ebf1a381050b69d",
"icons/Icon-192.png": "81784a330245128987dba05afc7382a2",
"icons/Icon-512.png": "045d225f9be0b318463f88dce07a89b6",
"icons/Icon-maskable-192.png": "81784a330245128987dba05afc7382a2",
"icons/Icon-maskable-512.png": "045d225f9be0b318463f88dce07a89b6",
"index.html": "dfd903d728f7de4b889e8de2780e33f2",
"/": "dfd903d728f7de4b889e8de2780e33f2",
"main.dart.js": "bbb311a9957a9cb2e19e12462f1a6d57",
"manifest.json": "9383e4eb1d3424660f31fda122056afa",
"version.json": "170a90bb00c0de1114a478cccdb9ad78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
