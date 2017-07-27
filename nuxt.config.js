module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router
  */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Plugins
  */
  plugins: ['~/plugins/i18n.js'],
  /*
  ** Vendor
  */
  vendor: ['vue-i18n'],
  css: [
    '~/css/main.scss'
  ],
  env: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
  generate: {
    routes: ['/', '/about', '/en', '/en/about', '/contact', '/en/contact', '/careers', '/en/careers', '/blog', '/en/blog', '/services', '/en/services']
  }
}
