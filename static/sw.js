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
    "url": "/_nuxt/0.nuxt.bundle.048d80e9124d5c24f351.js",
    "revision": "aab021bf08573beacceff86fe3a00fc9"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.1e3037f305839e204530.js",
    "revision": "f03f67585e45058308d94577bff19365"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.a2c23bdf4a86a0fc76d7.js",
    "revision": "c39384b1cb0a987616f8e078bc6be622"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.e251134ae54e30bd360d.js",
    "revision": "8b5abec8064a30941059d503082a4e19"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.7a9605552ccbdba789d3.js",
    "revision": "71b566c3c623ab1897b9e7878a4b09a3"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.a250d3240a0ee2ce71b6.js",
    "revision": "f4317c6bab1d2ce2dd5ac67d33dc3138"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.0b5d8e1cb436cc2b7d03.js",
    "revision": "4cd123ae1f6ade6f24e81fb78c6ac9a2"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.60691992bca14b901228.js",
    "revision": "600e6b3f708ef5edc09efb5b808e1a02"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.3e20f646e497ac765d7a.js",
    "revision": "24a94e7cddf29926952a41ad263d37f1"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.7404db9570f4f8acfe1d.js",
    "revision": "f4e9dc3597495f619bffcc49858fd628"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.24fc2011dcbf2a1de8f4.js",
    "revision": "e1852aaa19a8b7a828169f571c7cc61b"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.9183bebd4adc9ccab831.js",
    "revision": "68c2afdfde6d636a8984199cfd4add61"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.0fa3b62adf8507a16543.js",
    "revision": "b4fb99b7c26a8b4a3ef562db2f98cbcc"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "041b4a1faa93d4d13260e4e7ca6473c8"
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
    "url": "/_nuxt/manifest.d952e9e49ce8cfeef138.js",
    "revision": "911568405c5cd990946f2a76a8d0b948"
  },
  {
    "url": "/_nuxt/nuxt.bundle.aac0383775c86d91ab49.js",
    "revision": "79e68dad3cc736319cb1856fab30dcff"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "3d0d3f7cd1698d937f7f580a84072101"
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
