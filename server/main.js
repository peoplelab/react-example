/* eslint-disable no-console */

const path = require('path');
const express = require('express');
const fs = require('fs');
const https = require('https');
const compression = require('compression');
const proxy = require('http-proxy-middleware');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const proxyConfig = require('./proxy.json');
const config = require('../webpack.config.js');


const { NODE_ENV } = process.env;

const PATH_FILES = {
  HTML: path.join(__dirname, '../build/index.html'),
  KEY: path.join(__dirname, './SSL/localhost/server.key'),
  CERT: path.join(__dirname, './SSL/localhost/server.crt'),
};
const PORT = 3000;

const ssl = {
  key: fs.readFileSync(PATH_FILES.KEY),
  cert: fs.readFileSync(PATH_FILES.CERT),
};

const compiler = webpack(config);

const app = express();


// enable gzip compression
app.use(compression());

// services proxy
const proxyInst = proxy(['/api'], proxyConfig[NODE_ENV] || {}); // dev dsi
app.use(proxyInst);


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: './build',
  hot: true,
  noInfo: true,
  lazy: false,
}));

app.use(webpackHotMiddleware(compiler));


https.createServer(ssl, app).listen(PORT);
