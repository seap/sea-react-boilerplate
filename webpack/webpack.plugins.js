const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = env => {
  // common plugins
  const commonPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      __DEV__: env !== 'production'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      path: path.resolve(__dirname, '../dist'),
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.[hash].js',
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
      filename: '[name].[contenthash].css'
    })
  ]

  if (env === 'production') {
    return [...commonPlugins, ...prdPlugins]
  } else {
    return [...commonPlugins, ...devPlugins]
  }
}
