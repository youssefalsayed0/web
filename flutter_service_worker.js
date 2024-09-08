'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b114dedc53dfdb3e248c8e0d35994620",
"assets/AssetManifest.bin.json": "4f806b4bb1315b7bd995ba64b3516414",
"assets/AssetManifest.json": "b2842ee82f2c53d54225e92c2e8d0895",
"assets/assets/fonts/Cairo-Arabic-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "92ae313db90f497a9b8fec09433a70de",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/images/3amelen.svg": "6759adbb97a3a022fcafc4d13b67e6ec",
"assets/assets/images/add-album.svg": "7b73b76236efb67eef750e6c2b2ce66b",
"assets/assets/images/add_customer.svg": "3fec76adbe81062e99a857acedd1d2b2",
"assets/assets/images/add_fanin.svg": "7359e6af939bd4bdfd2061ff354751e1",
"assets/assets/images/add_image.svg": "2005af8e77204b789f3d639209a8ed2d",
"assets/assets/images/add_morden.svg": "8bb68255a099dd3b9dd3c5272f090a18",
"assets/assets/images/analysis.svg": "0f618100b6b4df309eedef800e9d2bdc",
"assets/assets/images/arrowleft.svg": "5f8820356c0b73f7c927e42e97476b32",
"assets/assets/images/asnaf.svg": "c0e085134c7b5e41e12319594f0392fa",
"assets/assets/images/car.svg": "2d437238047466f816bd067299016442",
"assets/assets/images/cars.png": "9133fda1427ea3095478ef0349c91dce",
"assets/assets/images/carservices.png": "0714f715370f629579f7f98bd9d0ef5d",
"assets/assets/images/cash.svg": "8b8308740176a30947de5d6e8f6665f3",
"assets/assets/images/dark_mode.svg": "bdda9e5d20e33bce41cf147a6f7f322c",
"assets/assets/images/db.svg": "e15d354ca10700fb6fec99563e827991",
"assets/assets/images/edit_icon.svg": "7bb1343be1e29858d85b7a5c511a7485",
"assets/assets/images/fawater.svg": "9be394c40e1c2533f93f9549c7c53884",
"assets/assets/images/feninin.svg": "3a773ef637377b5e379e8f108855bc15",
"assets/assets/images/group1.svg": "d9f452b80a84f970f60aa405d20cb999",
"assets/assets/images/group2.svg": "55dd9aa67d0f6e26ad1758ca433616d2",
"assets/assets/images/icons8-happy-48.png": "300c110020ae5519a4594016b3aec2dc",
"assets/assets/images/icons8-smiling-face-with-smiling-eyes-48.png": "cbb71ed0f078446a3c289b13b4f4ccef",
"assets/assets/images/icons8-upside-down-face-48.png": "f45be44e8693b1629232c3e9119f3e35",
"assets/assets/images/light_mode.svg": "a8a5d6c9ce74407ea9ccdfb2b8b7e041",
"assets/assets/images/location.svg": "896f6fe30da74a2e2d73114410a8f729",
"assets/assets/images/logo.png": "a8c2008cb8a3d5db771e96e19b290e1c",
"assets/assets/images/logo1.png": "00952508d1b52c8070c035992a8e71b0",
"assets/assets/images/logo3.png": "062f6041404b6d736a3b39219e03c26f",
"assets/assets/images/logout_icon.svg": "08dd593febbde6296c3db8f3e1ee1f74",
"assets/assets/images/notification.svg": "8a900f8f76b85582dc3c7604953129a4",
"assets/assets/images/price.svg": "45b2a36ef752209f90535c9a8fe484ea",
"assets/assets/images/profit.svg": "5a03ef53c89c5a2efb53277a08497d48",
"assets/assets/images/profit1.svg": "af9dfb8158119bf03eb22d28a0781e80",
"assets/assets/images/receipt.svg": "304cf3347677df1e37792dcc7cf8c1d7",
"assets/assets/images/returned_invoices.svg": "9c24dd45f94b316c351f31656c4eaab6",
"assets/assets/images/settings.svg": "c0215bcc60bf7b4ad805692ed9cfdc93",
"assets/assets/images/spare_invoice.svg": "eca20f021fba6cb99378fe927eadc54c",
"assets/assets/images/store.svg": "2f3db9af77493227f878f9af546e7a97",
"assets/assets/images/store1.svg": "e0677a2896ff5f2db670bdebc3de41dc",
"assets/assets/images/total.svg": "3002cd1f8d446473d2e4f02e6719684f",
"assets/assets/images/user.svg": "0dc7128f2b775dfdb43749c29f19667b",
"assets/assets/images/value.svg": "46435051fe0ec73ae1c50cc5396f92f9",
"assets/assets/images/value1.svg": "64f6c99e0157d20326b9245857184365",
"assets/assets/images/worsha.svg": "3a08060186acd8a3c31a516951bfc5bc",
"assets/FontManifest.json": "ceb06d397befc011a96368f5f8979e1a",
"assets/fonts/MaterialIcons-Regular.otf": "f32611e88894c86fd453d1b65233ff5a",
"assets/NOTICES": "ef8770cd178042280a96643fd91c895a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f5daa2ff6b3c92d72f376f3f036ac6f9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "bdad71f00e9aea1979bd6a69a7aa95d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54f689aa8e18597a1d4a54e51edf4f4e",
"/": "54f689aa8e18597a1d4a54e51edf4f4e",
"main.dart.js": "5233a339cead79729ffd71f69d3b1b93",
"manifest.json": "004c67aeb511bd2d710ee268179810ab",
"version.json": "dfd8e07719f77dd351025bab7bb71b34"};
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
