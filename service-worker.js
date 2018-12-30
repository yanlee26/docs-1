/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "65cb32b8c789fce5d1dab36dc937bac8"
  },
  {
    "url": "assets/css/0.styles.4ebccf37.css",
    "revision": "5ac656b5842f8305e54f7d609ea7c1d9"
  },
  {
    "url": "assets/img/flux-1.90fab893.png",
    "revision": "90fab8939d5aaa4adceab9a462d1dae1"
  },
  {
    "url": "assets/img/flux-2.a60c532f.png",
    "revision": "a60c532faf4a5d3623ba9cc63b4d7913"
  },
  {
    "url": "assets/img/flux-3.eeab519a.png",
    "revision": "eeab519ae5a83261728699f2c684b730"
  },
  {
    "url": "assets/img/MVC-1.b5b87125.jpg",
    "revision": "b5b871254258aca1a4c359c07a4b94c5"
  },
  {
    "url": "assets/img/MVC-2.559c2db8.jpg",
    "revision": "559c2db8a947104055bc0eabcc5fddc4"
  },
  {
    "url": "assets/img/MVP.f12fd882.jpg",
    "revision": "f12fd8820ae23a57c688ddfdb4945dc2"
  },
  {
    "url": "assets/img/MVVM.b94a224f.jpg",
    "revision": "b94a224f58fae5c7bc00f93ab30d1856"
  },
  {
    "url": "assets/img/react-router-redux.ea09e5d5.png",
    "revision": "ea09e5d5fc13553230b9ad97c476f2fe"
  },
  {
    "url": "assets/img/redux-data-flow.06080bd3.png",
    "revision": "06080bd35683ca5ab00ad2bd043ef4d2"
  },
  {
    "url": "assets/img/redux-flow.10d245ca.png",
    "revision": "10d245ca32ada88b1fbdcfd809448758"
  },
  {
    "url": "assets/img/redux-middleware.ebebd1d2.jpg",
    "revision": "ebebd1d2e898e1f9c6a34fc28e2778bc"
  },
  {
    "url": "assets/img/redux-react.ef5958fe.png",
    "revision": "ef5958fe400b9ab04ff317efc93b216c"
  },
  {
    "url": "assets/img/redux-saga.d97a2a8a.png",
    "revision": "d97a2a8afe73206d164331fca3846190"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vdom_1.a2085b6f.png",
    "revision": "a2085b6ff7f45b5c615a51213228577b"
  },
  {
    "url": "assets/img/vdom_10.15f83705.png",
    "revision": "15f8370546e0c5de50c95e3231f5bfa0"
  },
  {
    "url": "assets/img/vdom_4.c2da2aaa.png",
    "revision": "c2da2aaa296ec85b82451e8ea185fadd"
  },
  {
    "url": "assets/img/vdom_5.055181bd.png",
    "revision": "055181bdc28e9b3af82d1e41dc4a5767"
  },
  {
    "url": "assets/img/vdom_6.9b64430d.png",
    "revision": "9b64430dc3cf65562779d21f266cd66f"
  },
  {
    "url": "assets/img/vdom_7.826d8ee6.png",
    "revision": "826d8ee6d74adc6f88ff2758554f1338"
  },
  {
    "url": "assets/img/vdom_8.41264b4e.png",
    "revision": "41264b4e10471c9a1924973d048b7ffe"
  },
  {
    "url": "assets/img/vdom_9.0a70f75f.png",
    "revision": "0a70f75f2bc63763d46952bcc6afa924"
  },
  {
    "url": "assets/img/Vue-MVVM.edd0080f.png",
    "revision": "edd0080fb145315fbc96164c219fee7e"
  },
  {
    "url": "assets/img/vuex-flow.f83af28d.png",
    "revision": "f83af28dbd4b915220104b0858cf9bc4"
  },
  {
    "url": "assets/img/vuex.be68719a.png",
    "revision": "be68719a9e63469fb846d7e1dec92b81"
  },
  {
    "url": "assets/js/10.14723ac9.js",
    "revision": "605a5b6c034efdbc5e2c3db45b10db49"
  },
  {
    "url": "assets/js/11.7f353bf9.js",
    "revision": "844949e7bee6b008b8082a4903a542a3"
  },
  {
    "url": "assets/js/12.980c6c00.js",
    "revision": "66e1f28b0e6e5786f130419cd8a5ed34"
  },
  {
    "url": "assets/js/13.b12a35a3.js",
    "revision": "f832e47c8da9fa5c85461fbe74804c81"
  },
  {
    "url": "assets/js/14.a5bf991c.js",
    "revision": "beec8aaf60bb0d536d01d3a5b7c1d318"
  },
  {
    "url": "assets/js/15.731d7cf5.js",
    "revision": "7ca15d3c12cc4783782fbc2413498375"
  },
  {
    "url": "assets/js/16.a3d2a8ff.js",
    "revision": "3caa9de24bb0660543ec03beee4e28d5"
  },
  {
    "url": "assets/js/2.7f73fa32.js",
    "revision": "34dfad36fb44ac95064d53306835c83b"
  },
  {
    "url": "assets/js/3.96e85644.js",
    "revision": "91fe8bbed6b5d066fe85d262cc03bb77"
  },
  {
    "url": "assets/js/4.fbbaea7c.js",
    "revision": "d2d6a4bd0b2856dae3a0d658e3839169"
  },
  {
    "url": "assets/js/5.85331115.js",
    "revision": "aadd380ab8c445fc9ab34ea8b4a27462"
  },
  {
    "url": "assets/js/6.6a448d1a.js",
    "revision": "ce5f6f25da257943b64838b60d373d7f"
  },
  {
    "url": "assets/js/7.54afa298.js",
    "revision": "0615548faa97b58ad87428cf0030025f"
  },
  {
    "url": "assets/js/8.6143b87a.js",
    "revision": "c4145515b501eabd15b0c1276a6c1e2a"
  },
  {
    "url": "assets/js/9.90f0d57e.js",
    "revision": "9745dd852dc7179a481b008d3cb62c0c"
  },
  {
    "url": "assets/js/app.f32164f6.js",
    "revision": "b7ed763f7403a32d5509ae1c716544f1"
  },
  {
    "url": "framework/index.html",
    "revision": "8ea785f272702230d010e34acad03be6"
  },
  {
    "url": "framework/mvvm.html",
    "revision": "f38be0ba388e6537a851b0f258c4a055"
  },
  {
    "url": "framework/redux.html",
    "revision": "2df214418f80111ed3f97ad0d4d079bd"
  },
  {
    "url": "framework/vuex.html",
    "revision": "fcd8f8a7322656291baed1d9dbf8574d"
  },
  {
    "url": "icon_logo.svg",
    "revision": "3de5d6fa0ffab0091df0c9ddd474b042"
  },
  {
    "url": "icons/snowball.png",
    "revision": "fb5cfc5bf794f2756bcf6704149192a6"
  },
  {
    "url": "index.html",
    "revision": "f5ac76dbaefb1d080d7906ba4def00a8"
  },
  {
    "url": "platform/index.html",
    "revision": "4fb4a9c2d5cd9c92266373a1a2b1fcbc"
  },
  {
    "url": "platform/vueLoader.html",
    "revision": "5a165fc62b8743ee9333a7905702a71e"
  },
  {
    "url": "render/index.html",
    "revision": "2656e434f61dc4d006e5c0534fd9e5a2"
  },
  {
    "url": "server/index.html",
    "revision": "0678d2e74513017416289f9fc53c5d15"
  },
  {
    "url": "ux/index.html",
    "revision": "b79b01dff298fd69f6948dcaf161c1b4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
