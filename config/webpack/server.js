const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
  devServer: {
    clientLogLevel: 'none',
    contentBase: './build',
    filename: 'bundle.js',
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
};
