module.exports = {
  /*
  ** Build configuration
  */
  build: {
    loaders:[
      {
        test: /\.svg$/,
        include: /assets\/svg/,
        loader: 'svg-sprite-loader?' + JSON.stringify({
          name: '[name]',
          prefixize: false
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        exclude: /assets\/svg/,
        options: {
          limit: 1000, // 1K limit
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(eot|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 1000, // 1K limit
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
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
    middleware: ['i18n']
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
  plugins: ['~/plugins/i18n.js', '~plugins/svg-sprite-loader'],
  /*
  ** Vendor
  */
  vendor: ['vue-i18n'],
  css: [
    '~assets/css/main.scss',
    { src: '~assets/css/spacing.styl', lang: 'stylus'},
    { src: '~assets/css/layout.styl', lang: 'stylus'}
  ],
  env: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
  generate: {
    routes: ['/', '/about', '/en', '/en/about', '/contact', '/en/contact', '/careers', '/en/careers', '/blog', '/en/blog', '/services', '/en/services']
  }
}
