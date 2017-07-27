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
    "url": "/_nuxt/0.nuxt.bundle.e00b8aee909dd54e07fa.js",
    "revision": "aff6e2d888c1bb80c2e6a4044f9e8458"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.fab14cde90c622618782.js",
    "revision": "80902fd5787d7221b67c40199f9bc65a"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.64267abcd3b66d7961a0.js",
    "revision": "a7187d451f7ac884a2aed3a41b9fdfe6"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.24584b10504f57e0aa70.js",
    "revision": "b591ef98174707c9f9752c7b72ac871d"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.c97091d61770363cc336.js",
    "revision": "19ecf1645123a5e2530720fcfdd0b9ef"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.445a2ad4285da0db641f.js",
    "revision": "83e9192768d3f6ea26e162e43f0b9394"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.917dbbb934b41847fa3f.js",
    "revision": "982dda50463e14de9f7d87aecb0c88a4"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.d570a2df4bd383c755ac.js",
    "revision": "325d6891ad01d1f79b200c9ce612501b"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.a3394b85c9467906a9ff.js",
    "revision": "001306839482331d6ac2a638bab346b3"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.78fd38eb2c85b9ae897b.js",
    "revision": "2c651d2ad283e796f5be44f0f522e6ea"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.6a9287ad11dcdd80c6ed.js",
    "revision": "400fa09066b57c64d7f34001ad239685"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.01d855e377546e8aa0d0.js",
    "revision": "909f8712f35fe59e1ee1323b47c90a05"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.137e252b9284a13ee729.js",
    "revision": "21600d1c7d3ac65ded8b7feb91ccbf84"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "05a7170888e9bf90d8801f1af9d53767"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.c9c6687c7a97f3d33cf1.js",
    "revision": "48ae3a869f9ab0f01e4f5a9de321e409"
  },
  {
    "url": "/_nuxt/manifest.cde688ec.json",
    "revision": "90cd12a36f814a65b1a778247e073298"
  },
  {
    "url": "/_nuxt/nuxt.bundle.bdbe919c7e29b7cd0172.js",
    "revision": "fcc5613bb0f0be4009c08b01361f6a3c"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "9d7eedd50cab876a2a5ed53a39b5cc67"
  },
  {
    "url": "/_nuxt/vendor.bundle.d2a73000e89b1cc0e335.js",
    "revision": "d85f3a633b3c26505af94430a792d6a6"
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
