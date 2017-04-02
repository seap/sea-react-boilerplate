module.exports = {
  contentBase: './src',
  historyApiFallback: true,
  port: 4000,
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
