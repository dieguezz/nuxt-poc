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
    "url": "/_nuxt/0.nuxt.bundle.35c090ff835c5998f101.js",
    "revision": "4b1b1ceca213e9c4531319f560f7e961"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.8e665ee616a5effe8097.js",
    "revision": "a016023f152c54122148fb21b83a41c9"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.7902441509899b8e54cd.js",
    "revision": "0bd6970bb2f21e148c0530ed0f88223e"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.a0ee4bf4ca432f92ac6d.js",
    "revision": "fe4c6bfcb809ebbfd473aa5ffee8a2d8"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.1f90e4c13dd586f06d5e.js",
    "revision": "11d306c6c0c51a8b5d6dcfb5e7dcc31f"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "f29e8686b48596495c3f79fbfde97c97"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.8eae4bae02f0c70670d0.js",
    "revision": "037f1b4836be7366a1c2588e86cac11c"
  },
  {
    "url": "/_nuxt/manifest.cde688ec.json",
    "revision": "90cd12a36f814a65b1a778247e073298"
  },
  {
    "url": "/_nuxt/nuxt.bundle.21e9137ee1aa91a20f8c.js",
    "revision": "81af3b99dadc07cc3c57c2b219a8b611"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "b701d1ef848ed679398c4b55764c28a4"
  },
  {
    "url": "/_nuxt/vendor.bundle.3fd347348940855b0460.js",
    "revision": "7871188d3fdfe2a8872f14fe10eec6d4"
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
