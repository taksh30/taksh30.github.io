'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6b0b4f2325e13dcbc6d07bd034848cd1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c535daf978d417024abbd1569613d52a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b591a7bcde338cea6147ddc5529099ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "590f395faf8292de89a58b2e770b44e2",
".git/logs/refs/heads/main": "a2e21d708428907bc80d085a79d606d9",
".git/logs/refs/remotes/origin/main": "3d3f471aad032238931535179ccbf0b0",
".git/objects/02/135a08765f1438ab609176903cc1104cc85cf3": "1bb10f50a64ca6350276d1af4ac4fc4a",
".git/objects/03/104085fea8bdae11fb34d7c0b0b628f290939c": "ec0fa439f05776357f4174aa4a910085",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/a2cb1ea9dfb60e1b44a906de1d0098e253cc91": "b5ea4c4001bcef9480326b5e467082d6",
".git/objects/0e/99c52e1d49c4d09d2dd0bd4ec819486c879456": "aa9c8fbe9383dd4fc384232ac3ff88f2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2f/bdab913ef994953065b53916df50b099251d5c": "5fc3eeb1a5256aaad6b5363ff4a4f9f5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/04f70f68d7c01e97c554feb698b285e75e8073": "8fa07b38ee686120fff4af61eaa14fe6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/4e1ca0bd6ac5e67cf3e000b18b403ad6b43180": "3e3aa977ae94510261db9fdc5955fe0b",
".git/objects/4f/92040847b790698de92ccc853fe33e597e95ef": "6c71543c33b8cc51ea64bdec1b873a21",
".git/objects/55/cc4aa394cd2b6336ac46ee396ec661f5e1884e": "a58f979cc400c8a658b18f200ed88c47",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/f9609795f11c02ec0c0d0f49d182d91cc4aedb": "b0976b2c334813665b57f8b2de3af1fb",
".git/objects/7b/18d7d3e6e42bb55566881ab2b435e8deb572eb": "b776f02547c14973093f26f038286f54",
".git/objects/7e/b1b11f8c1762f3c52bd8e6a5ca0fd508b49c42": "480616b0bbf48a1bacba3c1032f84030",
".git/objects/80/022dedc1de186e07ce61c219969e849277c2d5": "6e9ac18f10789492be909da2d9922c85",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8d/ee343a1a458083edd0531fc1cbd14cfeb5eea6": "26aa37934ab68dc7f9b3c83409b94dd1",
".git/objects/90/16fdd41ff7975558a1b29d526fe85ebcb6e45a": "75f8ed153bf8853366fb0dcd647c64ea",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/0abb00387677e5b1798be76fbc108dd3dc3cad": "80f2f32ef98f25544b4ceee4d71bb777",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/cbe55cefb6d7fdbf67c6a7e2ed38f9786245f5": "c618135b9f7d815913142c98560529a1",
".git/objects/a7/82465508005a84f4ef7b95ee527bb6ebcef3b1": "150da87106d6eba611f5dbea4c70d3b7",
".git/objects/a9/a7a6319fd1e0a720c3b3f6effdf52549287c72": "510c6f64f62c6cbd6abdcc4bb7b8120e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b9/bb595427fa65baa94755107cd8b59e68122f68": "7dbb306d3aa4062018895e6476d08c85",
".git/objects/b9/dd653d62224a63fc50b78dee71c10048a4b43f": "f6219e1c4b159e3674cacd598941face",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/f4b2c34e68b3555b247a84b117ee24a3d0ee2e": "36a941daedd093e116dac89db99b0f3e",
".git/objects/c5/45b5d2f0c099b876c1b5cdcc830e2b79672e36": "80aa8844cbe5b4b00c0bb52e1f578034",
".git/objects/c7/705f2f28b49c0d74c2c1ac8a4e055f0a07782d": "d701852c678a7757aea951cf72f566c9",
".git/objects/c7/e3737e69b20bcbc537840a0ac597f9b47ba163": "adf6b4058ad3d61292ac95d7351061f5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/4ae1286cdb8e0852ea204686bfa8fabe58025e": "9da89886f9667a2ab440373e66dbd7fc",
".git/objects/d6/5d98916f041542dda8fcd0c5b220c0d842ab01": "e5311794828902339fab0ba8cc4d43a3",
".git/objects/d6/5dc4c8e85491de30ccb39a02ec6f76c78883a6": "8b5a4f05dd978a29c8686d10fe3484fe",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e4/3a3094a80493111cf6691866e86efff08755d1": "f18da8e387777c7d39b70cbbfad0b42a",
".git/objects/e9/4c1dcf97bd9de25f0f4211d9afbd5ce3a57042": "2fde31dc03b7c1ddd0208f66dc2ba9cd",
".git/objects/e9/a29e4d508a0118494b4a06c050a9a650ae0c5c": "2f2ececd0ba03682d3664485aeed366f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/64ef272cf9055344db134c0a45070ba3d968ab": "a4ad8b9d169bc0ec9cd2b9a6fb7f22da",
".git/objects/f8/473bd96b63887bb286b5c33372b7d7068cd919": "8976d808d588552cc69628f9bd8e8e76",
".git/objects/fc/c87cd7f65815a26553095f81a0013c28f6540c": "8fa96b9a1c230294fec685520674e793",
".git/objects/fe/5cc299adb97eabefd8d45e9ce7ba496885c3ed": "73f0a346efbb97556ce6c010928be0ac",
".git/objects/fe/d2667f3bc2228710dd2c120a48f13330e729bd": "7f191e1a45ce94b7cab71156ddf8154d",
".git/refs/heads/main": "2d5269abde75da1685d8752e9d801d70",
".git/refs/remotes/origin/main": "ee971641d4099051dadb35478c6079b8",
"assets/AssetManifest.bin": "2c46cd23ffa2c6d0e29792cdc17b12b4",
"assets/AssetManifest.bin.json": "5a04607c1ea28addf7fc0516d2d9eb48",
"assets/AssetManifest.json": "8b86d7ea894cccf346e6821ba4dd1013",
"assets/assets/calculator.jpg": "1cd593825f9c5ab5785993c356613cc9",
"assets/assets/data.png": "602a820b25d364c422352fa6bcf96b85",
"assets/assets/front-end-programming.png": "5e4bf1f7c8ab6a1292ac4a673ca7227b",
"assets/assets/handshake.png": "7a9f31073a908e5156ad6839ed1f9d26",
"assets/assets/responsive-design.png": "c8a7bf0d72542959bde3e3fd9cbbc198",
"assets/assets/safe_buy.jpg": "bf5c5676f3bf2c05fba1e5ff159f34b1",
"assets/assets/sip_and_shop.jpg": "63d3264b3d11544e14c38e77bd825a1c",
"assets/assets/taksh_cv.pdf": "9820c4b875b43c6bf99a728fafcc0d7f",
"assets/assets/taksh_img.jpg": "ea54e51218d96ed6bee8c66553bbb899",
"assets/assets/web-design.png": "e42dc4a0a51e267458f8eeaf85e9559f",
"assets/assets/website.jpg": "a344be1a516a095aca34726a5c32ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9cc56bea7bd4b6474e9006faee81a0ff",
"assets/NOTICES": "b68c557a6c318dfc04597ab621538f1f",
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
"flutter_bootstrap.js": "33379bec607435ece7e39e14593bcc59",
"icons/Icon-192.png": "81784a330245128987dba05afc7382a2",
"icons/Icon-512.png": "045d225f9be0b318463f88dce07a89b6",
"icons/Icon-maskable-192.png": "81784a330245128987dba05afc7382a2",
"icons/Icon-maskable-512.png": "045d225f9be0b318463f88dce07a89b6",
"index.html": "a69aabbaf58b18ffee9c49b96fb8ac9b",
"/": "a69aabbaf58b18ffee9c49b96fb8ac9b",
"main.dart.js": "ac0b71eb6e60b63048befc796cd1fed6",
"manifest.json": "737218b9265a1e1242b5a70bd65b79bb",
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
