const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = require('./webpack.config')
const vendors = webpackConfig.entry.vendor

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].[chunkhash:8].js',
    library: '[name]_[chunkhash:8]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.tpl.html'),
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, './lib/vendor.manifest.json'),
      name: '[name]_[chunkhash:8]'
    })
  ]
}
