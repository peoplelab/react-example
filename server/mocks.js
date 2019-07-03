/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');

const MOCKS_PATH = path.resolve(__dirname, '../mocks');
const PORT = 4000;

const app = express();

app.use(compression());

app.use((req, res) => {
  const { url } = req;
  const apiPath = path.join(MOCKS_PATH, url);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const data = require(apiPath);
  let response;

  if (typeof data === 'function') {
    response = data(req, res);
    res.send(response);
  } else if (typeof data === 'undefined' || data === null) {
    res.status(500).end();
  } else {
    response = data;
    res.json(response);
  }
});

app.listen(PORT);
