var pkg = require('./package.json')

module.exports = {
  port: 3000, // dev server port
  assetDirectory: pkg.version,
  publicPath: '/' // public static path 
}
