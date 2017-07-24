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
    "url": "/_nuxt/0.nuxt.bundle.42fa72d72f05c57dfc81.js",
    "revision": "31ef6ef74b68f4857c00302d09c40916"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.435ab11a5a688f30ab5e.js",
    "revision": "2ef12b2638c694c95a72c9395c35293c"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "e44dba515c52298517586625ef438dc7"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.cde688ec.json",
    "revision": "90cd12a36f814a65b1a778247e073298"
  },
  {
    "url": "/_nuxt/manifest.d4245175bf2e42835d39.js",
    "revision": "1855b582d591a7c364dafb41cb79204d"
  },
  {
    "url": "/_nuxt/nuxt.bundle.86b5a05ccc2205a15530.js",
    "revision": "914f3d269f3bee6160445ccb1cc9315b"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "f79db1122792fc7fe7fcfaea80225aff"
  },
  {
    "url": "/_nuxt/vendor.bundle.c94212e1d933f7a43a91.js",
    "revision": "66f59506ce94acffe0920e39435f5914"
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
