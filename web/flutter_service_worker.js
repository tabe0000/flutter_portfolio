'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "120d47c96c2ce83faa4a78a555c93ce5",
"/assets\assets\images\icon.png": "2673bc08343c5557f7684cebdf961c3f",
"/assets\FontManifest.json": "f6f5516706d040a3652032215a256b31",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "428f8a707f052081224fd6b7fd42cd04",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\packages\flutter_vector_icons\fonts\AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"/assets\packages\flutter_vector_icons\fonts\Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"/assets\packages\flutter_vector_icons\fonts\EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"/assets\packages\flutter_vector_icons\fonts\Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"/assets\packages\flutter_vector_icons\fonts\FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"/assets\packages\flutter_vector_icons\fonts\FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"/assets\packages\flutter_vector_icons\fonts\FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"/assets\packages\flutter_vector_icons\fonts\FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"/assets\packages\flutter_vector_icons\fonts\Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"/assets\packages\flutter_vector_icons\fonts\Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"/assets\packages\flutter_vector_icons\fonts\Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"/assets\packages\flutter_vector_icons\fonts\MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"/assets\packages\flutter_vector_icons\fonts\MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"/assets\packages\flutter_vector_icons\fonts\Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"/assets\packages\flutter_vector_icons\fonts\SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"/assets\packages\flutter_vector_icons\fonts\Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "3efb32efaf42afa103f63d238ba60adb",
"/main.dart.js": "446257552f97ee4e430386199fc15407",
"/manifest.json": "14e919b7b1dde549ab334b7ee3ce8412"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
