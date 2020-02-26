'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "2efd96cfc9b08986ae0607abcd8048e2",
"/assets\assets\app_images\alreadyIdiot.png": "90093ef3ba93db6a74d51017ec0a66a8",
"/assets\assets\app_images\cboAndroidTitle.jpg": "9363bcad4f850fa1e11783229dadaee8",
"/assets\assets\app_images\cbondroidPlay.jpg": "2a5f4adcb3c793737d79da21cc7c9e0a",
"/assets\assets\app_images\cobSwitchChar.jpg": "b1557b30a28e7faa430616471da6a8eb",
"/assets\assets\app_images\cobTitle.jpg": "45dd9638b851494f124b959a691d2146",
"/assets\assets\app_images\cobUSB.jpg": "3edb4e51464ec041af1bf82e095fff7f",
"/assets\assets\app_images\flutter_portfolio.png": "b940591d5dec9394cf21e8294c25fc4e",
"/assets\assets\app_images\flutter_todo_list.png": "ac5e598f2e07a43f37663c570f70e8b0",
"/assets\assets\app_images\htmlcss.png": "6113cde5eb956b52a3af475e24143161",
"/assets\assets\app_images\monitor_brightness_app.png": "277e584c9ffe9d3b1007b4e2336e8a55",
"/assets\assets\app_images\negi.gif": "c663096f8eff97310615cdb33999bec6",
"/assets\assets\app_images\next_nuko_serve.png": "c728e9144d3c89d2c422e01dae54ec3e",
"/assets\assets\app_images\nuko_bot.png": "7b342657a69237962270ce1a0471b275",
"/assets\assets\app_images\nyan_1.jpg": "f30ff3f8c97a8ce3e3508b4d96704481",
"/assets\assets\app_images\rbPlay.jpg": "0eefe595c65fa76bc2747519006f315f",
"/assets\assets\app_images\rbTitle.jpg": "5cb2b19faa5b39770196e296a3f09148",
"/assets\assets\app_images\result.jpg": "bcb1529812f6dbe1c717ace12a49def9",
"/assets\assets\app_images\robotgif.gif": "b0e714ff831b25baa3019d55596243fb",
"/assets\assets\app_images\robotgif.jpg": "44ed8265a9c5eef8f5aec7eb1520472d",
"/assets\assets\app_images\soundCircle.jpg": "604ee7be569608459c8344886e36bd96",
"/assets\assets\app_images\timer_todo_list.png": "b2e96ff53cad0453de8f6a782864f77e",
"/assets\assets\app_images\tokkakari_1.jpg": "38a4c398e811cbb2727fb50fe99b5c20",
"/assets\assets\app_images\tokkakari_2.jpg": "9ea4ced017bc9c9df571e72a4aa09d96",
"/assets\assets\app_images\voiroto.png": "e0cb13566cb35013e09e64d77ec187fc",
"/assets\assets\app_images\voiroto1.jpg": "000b40aca7028bfa84cf1aac50e6f1e8",
"/assets\assets\app_images\voiroto2.jpg": "b6726c8f5191a8be30289ddfd74355ee",
"/assets\assets\app_images\voiroto3.JPG": "42b4f8007e5db36cb7bdbcd8caefcc8b",
"/assets\assets\images\icon.png": "2673bc08343c5557f7684cebdf961c3f",
"/assets\FontManifest.json": "f6f5516706d040a3652032215a256b31",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "3cf4c6cc7b26a8255d05ee52bf88975c",
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
"/main.dart.js": "83d556f358d7308619cfcf271706b6ff",
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
