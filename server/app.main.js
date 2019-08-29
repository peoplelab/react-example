//-------------------------------------------------------------------------------------------------
// File: app.main.js
//
// Desc: File di configurazione, comune a tutti gli ambienti, del server dell'applicativo
// Path: /src/server/app.main
//-------------------------------------------------------------------------------------------------


const express = require('express');
const proxy = require('express-http-proxy');


// proxy handler (logging requests)
const proxyOpts = ({ URL }) => ({
  proxyReqPathResolver: (req) => {
    const apiUrl = '/api' + req.url;
    // console.log('\x1b[36m--> PROXYING REQUEST: ' + req.url + '\x1b[0m');
    console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + apiUrl + ' to ' + URL + apiUrl + '\x1b[0m');

    return apiUrl;
  },
  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
    console.log('\x1b[36m--> RESPONSE of' + userReq.originalUrl + ':\n' + proxyResData.toString('utf8') + '\x1b[0m');

    return proxyResData;
  },
});


module.exports = (callback_env, { COMPILE_ENV, SERVER_CONFIG }) => {
  // init node server
  const app = express();

  // start proxy handler
  app.use('/api', proxy(SERVER_CONFIG.URL, proxyOpts(SERVER_CONFIG)));

  // add environment configuration
  callback_env(app);

  // start server ...
  var server = app.listen(SERVER_CONFIG.PORT, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log('SERVER NODE: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
      console.log('SERVER NODE: -> Environment ' + COMPILE_ENV);
  });
};
