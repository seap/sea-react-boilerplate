const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const vendors = webpackConfig.entry.vendor

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve(__dirname, './tmp'),
    filename: '[name].[chunkhash:8].js',
    library: '[name]_[chunkhash:8]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, './tmp/vendor.manifest.json'),
      name: '[name]_[chunkhash:8]'
    })
  ]
}
