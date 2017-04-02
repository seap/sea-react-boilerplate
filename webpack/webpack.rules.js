const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { assetDirectory } = require('../config')


module.exports = isDev => {
  const commonRules = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules|dist/,
      loader: 'babel-loader?cacheDirectory=true'
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: `file-loader?name=${assetDirectory}/[name].[hash:8].[ext]`
    }
  ]

  // development rules
  const devRules = [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(scss|sass)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader?sourceMap&modules=true&localIdentName=[local]_[hash:base64:5]',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }
  ]

  // production rules
  const prdRules = [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    },
    {
      test: /\.(scss|sass)$/,
      exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules=true&localIdentName=[local]_[hash:base64:5]',
          'postcss-loader',
          'sass-loader']
      })
    }
  ]

  if (isDev) {
    return [...commonRules, ...devRules]
  } else {
    return [...commonRules, ...prdRules]
  }
}
