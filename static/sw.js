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
    "url": "/_nuxt/0.nuxt.bundle.9a05093136ca0bc72de7.js",
    "revision": "bfa25f101b230981146459952d9426bf"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.6be8008d5ea397f3f57b.js",
    "revision": "7bc02619a0541c59eeec04b74d05b240"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.1dd7db8705f9d1b70704.js",
    "revision": "cf3759a8c8c6ac7f5526d945ae1fbe25"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.8e76a59f5cc7d98a28dc.js",
    "revision": "0ee1c058defff4e968da652d93410235"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.76315ccab176de47e358.js",
    "revision": "10a04ee384d71228ef268c449173813b"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.3be639fa4d3f8ed7f053.js",
    "revision": "ba675711f2fe618ba13efe0c54dbc0ea"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.1f07ff97a15e94fd993a.js",
    "revision": "b80e6af6b240a7d0f248ab15ec1bf8b3"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.ab1fbe8531991214caca.js",
    "revision": "ff5deb99e95f3697118db49c43c8b6c4"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.89d28b2e7398584c9ff8.js",
    "revision": "bbe08c7dc5942537fd46e13f00e2e039"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.e287cbec2891b8f1ebb5.js",
    "revision": "6cb1c6c9669d8fefef2a62fe65f540c8"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.753c2f835f2f9878ae02.js",
    "revision": "df256736da24ecda53b549f2ee8c0e32"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.c9f0cecd92cf77afba53.js",
    "revision": "ef10b7bd32ac3f0a2012a1fd6904e6af"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.ca52a4cd3929a5208bcb.js",
    "revision": "08a56083f51c49ea07d649eea9f83995"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "a610fecd5021883bae0af5fa000a6d72"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.a3590b97e10036e73a84.js",
    "revision": "2fbe4b69cf66a3d7e59d493cc847d359"
  },
  {
    "url": "/_nuxt/manifest.cde688ec.json",
    "revision": "90cd12a36f814a65b1a778247e073298"
  },
  {
    "url": "/_nuxt/nuxt.bundle.562ea2e84b4bd728b802.js",
    "revision": "721b67df0b7dd8b8520c62f65ec6b183"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "0fb10001f4e7f3d824797d786c0a1a2f"
  },
  {
    "url": "/_nuxt/vendor.bundle.bcba01ae7d0789cf9004.js",
    "revision": "578895f2401217ea190b5beca2aa81e0"
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
