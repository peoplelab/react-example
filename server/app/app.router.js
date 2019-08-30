const express = require('express');
const mime = require('mime/lite');
const fs = require('fs');


// Initialize router
const router = express.Router();


// handle request
const handleRequest = (res, { url, filePath }) => {
  const mimeType = mime.getType(filePath);

  console.log('> URL request: ', url);
  console.log('> File path: ', filePath);
  console.log('> File mime-type: ', mimeType);

  // res.setHeader('Content-Security-Policy', 'default-src \'self\'');
  res.setHeader('Content-Type', mimeType);
  res.end(fs.readFileSync('.' + filePath));
};

// handle routes
const routesHandler = (req, res, next) => {
  const { url } = req;
  const filePath = '/index.html';

  handleRequest(res, { url, filePath });

  next();
};

// handle files
const filesHandler = (req, res, next) => {
  const { url } = req;
  const filePath = url.replace(/\?.+$/, '');

  handleRequest(res, { url, filePath });

  next();
};


// handle routes
router.get(/^(\/(\w+(?!\.))*)?$/, routesHandler);

// handle files
router.get(/\..+$/, filesHandler);


module.exports = { router };
