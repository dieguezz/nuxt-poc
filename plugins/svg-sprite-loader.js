// plugins/svg-sprite-loader.js
// import only in browser
if (process.BROWSER_BUILD) {
  // import all svgs
  var files = require.context('~static/svg', false, /\.svg$/)
  files.keys().forEach(files)
}
