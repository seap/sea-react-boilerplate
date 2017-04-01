const path = require('path')
const webpack = require('webpack')

const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      // 'react-redux',
      // 'react-router',
      'react',
      // 'redux-thunk',
      // 'redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules|build|dist/,
          loader: 'babel-loader?cacheDirectory=true'
        }, {
          test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader?limit=8192'
        }
      ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ]
  },
  plugins: [
    // common plugins
    new webpack.DefinePlugin({
      __DEV__: false
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
    // dev plugins
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    port: 3000,
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
}
