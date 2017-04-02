const path = require('path')
const webpack = require('webpack')
const devServer = require('./webpack.devServer')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  devtool: 'cheap-module-source-map',
  entry: {
    main: ['react-hot-loader/patch', 'main.js'],
    vendor: [
      'babel-polyfill',
      // 'es6-promise',
      // 'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-thunk',
      'redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: require('./webpack.rules')('development')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ]
  },
  plugins: require('./webpack.plugins')('development'),
  devServer
}
