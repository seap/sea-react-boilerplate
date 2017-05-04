const path = require('path')
const { port } = require('../config')

module.exports = {
  contentBase: path.join(__dirname, "lib"),
  historyApiFallback: true,
  disableHostCheck: true,
  port: port || 3000,
  compress: false,
  inline: true,
  hot: true,
  host: '0.0.0.0',
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    }
  }
}
