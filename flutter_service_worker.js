'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "4f13351f91fd847ae8409bc5ad5f37a7",
".git/COMMIT_EDITMSG": "d98b2518711310fd75e93f5725ece1c3",
".git/config": "777f97bb26389caaf11a3ff3ba50c813",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1cdceea020fe38e81b0d24c55186927a",
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
".git/index": "0538941ef2f9385845dbbeede5292a46",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05af6c9965d476f7a1051fddeae7b135",
".git/logs/refs/heads/main": "4d726aa7f875fe23f188f583edc5c8ad",
".git/logs/refs/remotes/origin/main": "19948d65b3bb83783a1f6141db76e893",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/01/9d6559d391f278ce99362f74e643ff96dfb871": "7f6f167af8e699ad382109005c6b723c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/a2cb1ea9dfb60e1b44a906de1d0098e253cc91": "b5ea4c4001bcef9480326b5e467082d6",
".git/objects/12/ff85a0e262aa90659d3abc6368d3b470c11d2f": "b7cd65a3698dcf31a60472dd586c2bd7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/4d9bbfff0926cda3ed27eb0ec1b30a658a3a71": "51c416ffe16202350a0f1ca70c939574",
".git/objects/2f/bdab913ef994953065b53916df50b099251d5c": "5fc3eeb1a5256aaad6b5363ff4a4f9f5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/04f70f68d7c01e97c554feb698b285e75e8073": "8fa07b38ee686120fff4af61eaa14fe6",
".git/objects/3f/6701ab198dc770fa9db243a26cad032f5ae659": "7fa46702429963da6bdd7fe7a9615802",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/37fe735f92ebf8204d3c7d1fbc9b46b81cea7a": "bf491a361f6b93976145e76aa256984f",
".git/objects/44/4112e31313a83f9860359644dfd54d2e626379": "c3e9a9321453df9a9672d458e0c502ff",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/687b4ec736d1b32c512f26fdf65a19847b375c": "4259bed13eb66089d8ad6e623faf482e",
".git/objects/54/5a755e213d1c5d37aeea270dfff124b823a8a4": "ab5e81271260bc8e233f55951a35bc15",
".git/objects/57/b6170677a4203359ed0480b1d6c9e8f3876994": "2ebebbdbc523901c8cf340e6b44df25a",
".git/objects/5a/86863d6bbf1392f7ce5d2e5c617bbfe1572538": "2ebe9c3699651eefd22cda6ae135d7e5",
".git/objects/5b/08c3651e145aac775c74209682c5d86913e17d": "88979c5e219c2597697bedf7529b3b7b",
".git/objects/61/4a53aac9350441596110e9eeb3f771978ed93f": "546ebcdaa3322ffece90441f6394dbc3",
".git/objects/6a/4db55aecd145b0f73f24b4f0d40e8b757b65fd": "30b9ea24ed76630f4d3fdb51facf0f78",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/e7738abd2163246ea9b41f80952426063215d3": "ecbca921a3050c81225fc8bb8cd8d3d3",
".git/objects/79/ce77c541e3900242d663196cb299342a99a77d": "32ac6f5c4cb4571d0a5a53be3b4f2a54",
".git/objects/80/022dedc1de186e07ce61c219969e849277c2d5": "6e9ac18f10789492be909da2d9922c85",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/da1fa421643a8dddf76b10d17f142fadbf039a": "7d44d5705a29ccd2ff522b6bd873b0e7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/024cd1a1e0b028265ad3bfaa2b0dc0bc045469": "1885fcbed6093a3c651b2d5ce58c0b90",
".git/objects/8d/ee343a1a458083edd0531fc1cbd14cfeb5eea6": "26aa37934ab68dc7f9b3c83409b94dd1",
".git/objects/8d/f0d831f32ff12931e02d893f0c0b231132c34d": "60455bb32ae04713840dab3d2283e89d",
".git/objects/90/16fdd41ff7975558a1b29d526fe85ebcb6e45a": "75f8ed153bf8853366fb0dcd647c64ea",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/0dc4266607e5f0f7ecfc45de69f2bdc03953fa": "e5581c413aec835e7fc8076fb43a6a51",
".git/objects/94/35eb7008de60ad18bdb0e3f4940940284ecc36": "531d9694a5f3dd025f0a6945610813b5",
".git/objects/95/0abb00387677e5b1798be76fbc108dd3dc3cad": "80f2f32ef98f25544b4ceee4d71bb777",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/22f981ed6f558c117c83732fad9ad0c537fc60": "c30b4cd27e90df3c166874bc730e94ce",
".git/objects/a9/a7a6319fd1e0a720c3b3f6effdf52549287c72": "510c6f64f62c6cbd6abdcc4bb7b8120e",
".git/objects/b0/8f480f9fe82eba8d93d994fe115785a8997de0": "6518230e0778f4aee4954851b123ab71",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/b189cfcd1fd4396be87d907d0cff2ad9501e87": "808db53c91f3676d34acf3aa91b7b50a",
".git/objects/b6/bb0589127c668ecc4222acd66ded30ec779411": "8a0c1b5dabb92bd3e2a7a2fade223ae5",
".git/objects/b8/bbff1aa32181975fa6c487cd588fd956f000bf": "b6b754f6d76d12b5b1f4db4acb064a0b",
".git/objects/b9/bb595427fa65baa94755107cd8b59e68122f68": "7dbb306d3aa4062018895e6476d08c85",
".git/objects/b9/dd653d62224a63fc50b78dee71c10048a4b43f": "f6219e1c4b159e3674cacd598941face",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c4/3b03aff0656dc1481a5c2c69ab7c41b9448941": "ebee46a6732088f4d32cd1378fa98cb6",
".git/objects/c5/45b5d2f0c099b876c1b5cdcc830e2b79672e36": "80aa8844cbe5b4b00c0bb52e1f578034",
".git/objects/cb/f2ceb4f2aad872909bfb50e46d06e99b8daca3": "e0cb2b2244285442646d8c595670d0ce",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/4ae1286cdb8e0852ea204686bfa8fabe58025e": "9da89886f9667a2ab440373e66dbd7fc",
".git/objects/d6/5d98916f041542dda8fcd0c5b220c0d842ab01": "e5311794828902339fab0ba8cc4d43a3",
".git/objects/d6/5dc4c8e85491de30ccb39a02ec6f76c78883a6": "8b5a4f05dd978a29c8686d10fe3484fe",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e4/3a3094a80493111cf6691866e86efff08755d1": "f18da8e387777c7d39b70cbbfad0b42a",
".git/objects/e9/4c1dcf97bd9de25f0f4211d9afbd5ce3a57042": "2fde31dc03b7c1ddd0208f66dc2ba9cd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/473bd96b63887bb286b5c33372b7d7068cd919": "8976d808d588552cc69628f9bd8e8e76",
".git/objects/fa/470e0bdbc5baf95af525ddcd2389170fe96cef": "88d2f99234f40cd5c6a490dccac92d1a",
".git/objects/pack/pack-9275b4ed23e7d5597485b99fd4ab8a7d5c5d9a8b.idx": "293fdfaaac24f6c6ba60c4d5b01c6150",
".git/objects/pack/pack-9275b4ed23e7d5597485b99fd4ab8a7d5c5d9a8b.pack": "c7ff7836c56229a6c20df6a11390d958",
".git/objects/pack/pack-9275b4ed23e7d5597485b99fd4ab8a7d5c5d9a8b.rev": "264bb866ce41ebdf060e3193dac58aa7",
".git/ORIG_HEAD": "a80cf3665f9f1c51af34bce2b5b16d88",
".git/refs/heads/main": "abafa8a7ac1541f657dd23b13711d9e1",
".git/refs/remotes/origin/main": "abafa8a7ac1541f657dd23b13711d9e1",
"assets/AssetManifest.bin": "3cc098a64628dd3824f9d17ed1b69421",
"assets/AssetManifest.bin.json": "cf59d20fe88bf1043f308b47b6358e4e",
"assets/AssetManifest.json": "c0370dee19e98594ece7710e00c42a2a",
"assets/assets/back.png": "74a476fe1625f8c65fdd0fe18e8f09c8",
"assets/assets/calculator.jpg": "1cd593825f9c5ab5785993c356613cc9",
"assets/assets/dart_image.jpg": "2cb638dbb707de87f307395cbb517ee2",
"assets/assets/data.png": "602a820b25d364c422352fa6bcf96b85",
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
"assets/NOTICES": "1987c6fef9bc3d02d677c2c59ee91095",
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
"flutter_bootstrap.js": "1205d2c7eca9f6474970936c96025320",
"icons/Icon-192.png": "81784a330245128987dba05afc7382a2",
"icons/Icon-512.png": "045d225f9be0b318463f88dce07a89b6",
"icons/Icon-maskable-192.png": "81784a330245128987dba05afc7382a2",
"icons/Icon-maskable-512.png": "045d225f9be0b318463f88dce07a89b6",
"index.html": "dfd903d728f7de4b889e8de2780e33f2",
"/": "dfd903d728f7de4b889e8de2780e33f2",
"main.dart.js": "f9174eb03320298f4cfb5c12098f9705",
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
