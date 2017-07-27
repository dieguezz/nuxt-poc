importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.2c508b688f38ebd94dba.js",
    "revision": "74c87637f054c8c46cfa33fd1e5f97ee"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.56e73dc7eb61682bc784.js",
    "revision": "c68373ccf1058f9b25b095bfeae9732e"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.d56e4ec30dbde8ab100b.js",
    "revision": "23acb52ee8bc5b7d618cae9be2c8144c"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.ade2547bd71fe2402208.js",
    "revision": "bb78c803aea6d90b28bb8aad4b7f571e"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.d932b53b1c1605dca249.js",
    "revision": "1b59869f452da25e1975531b02ec7914"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.38a0958ac465ac6fca5a.js",
    "revision": "38779516c140b08864209054a9db07cd"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.7c64b392b65fd5886e0b.js",
    "revision": "822c55b8cd7d1a995fa89ad36379fc57"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.0d6d0f0751bc41922787.js",
    "revision": "e3da44fd013cc905abb2a9002a44c992"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.b7c0254e1c7cbdb7d69f.js",
    "revision": "229dfcd5b5979717ff622fd933f6b6ed"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.707298f92842aeb3563f.js",
    "revision": "c22df74821d66180d976e2577eda27da"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.890dd1e33ce3edb28c2c.js",
    "revision": "4978d9e8d0b2c32ba21e68ae6233278b"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.533f54ddc2eb68d5b829.js",
    "revision": "d527407ec34fea49d40fc94568041428"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.846f09f65537e4cda60f.js",
    "revision": "c28ff9e2f1caa4ea3440be20e0d5c704"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "8a0d108097ca7571ddc369bfcb5335aa"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.795120a7cb010ad7bc6b.js",
    "revision": "cd58c70d36be6e92d17e6d714d88d142"
  },
  {
    "url": "/_nuxt/manifest.cde688ec.json",
    "revision": "90cd12a36f814a65b1a778247e073298"
  },
  {
    "url": "/_nuxt/nuxt.bundle.a073deff8ff583922cf9.js",
    "revision": "dbb406d175e666792b5cb540d14747c0"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "549c87c9cab1eaa9ec17bba56f331d49"
  },
  {
    "url": "/_nuxt/vendor.bundle.b1627ebaef02149bc18b.js",
    "revision": "b0327d404f5787c162c06755902b3383"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "etereo-website_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
