// const { readFileSync } = require('fs');
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
  devServer: {
    clientLogLevel: 'none',
    contentBase: './build',
    filename: 'bundle.js',
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    // https: {
    //   key: readFileSync('/path/to/server.key'),
    //   cert: readFileSync('/path/to/server.crt'),
    //   ca: readFileSync('/path/to/ca.pem'),
    // },
    port: 3000
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
};
