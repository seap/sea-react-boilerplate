const pkg = require('./package.json')

module.exports = {
  port: 3000, // dev server port
  assetDirectory: pkg.version,
  // public static path for production, e.g., https://st.xxxx.com/
  publicPath: '/'
}
