const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const { assetDirectory } = require('../config')

module.exports = isDev => {
  // common plugins
  const commonPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      path: path.resolve(__dirname, '../dist'),
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      // filename: 'vendor.[hash:8].js',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'ios >= 8',
              'ie >= 10'
            ]
          })
        ],
        context: path.resolve(__dirname, '../src')
      },
    })
  ]

  // development plugins
  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ]

  // production plugins
  const prdPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: `${assetDirectory}/[name].[contenthash:8].css`
    })
  ]

  if (isDev) {
    return [...commonPlugins, ...devPlugins]
  } else {
    return [...commonPlugins, ...prdPlugins]
  }
}
