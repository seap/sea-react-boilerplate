const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const commonRules = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules|dist/,
      loader: 'babel-loader?cacheDirectory=true'
    },
    {
      test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'url-loader?limit=8192'
    }
  ]

  // development rules
  const devRules = [
    {
      test: /\.(scss|sass)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader?sourceMap&modules=true&localIdentName=[local]_[hash:base64:8]',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }
  ]

  // production rules
  const prdRules = [
    {
      test: /\.(scss|sass)$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }
  ]

  if (env === 'production') {
    return [...commonRules, ...prdRules]
  } else {
    return [...commonRules, ...devRules]
  }
}
