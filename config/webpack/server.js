/* eslint-disable no-undef */
const { readFileSync } = require('fs');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');


const keyPath = path.resolve(__dirname, '../ssl/localhost/server.key');
const certPath = path.resolve(__dirname, '../ssl/localhost/server.crt');
// const caPath = path.resolve(__dirname, '../ssl/localhost/ca.pem');


module.exports = {
  devServer: {
    clientLogLevel: 'none',
    contentBase: './build',
    filename: 'bundle.js',
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    https: {
      key: readFileSync(keyPath),
      cert: readFileSync(certPath),
      // ca: readFileSync(caPath),
    },
    port: 3000
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
};
