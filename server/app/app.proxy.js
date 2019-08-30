const proxy = require('express-http-proxy');

// proxy handler (logging requests)
const proxyOpts = ({ URL, route }) => ({
  proxyReqPathResolver: (req) => {
    const apiUrl = route + req.url;
    console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + apiUrl + ' to ' + URL + apiUrl + '\x1b[0m');

    return apiUrl;
  },
  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
    console.log('\x1b[36m--> RESPONSE of' + userReq.originalUrl + ':\x1b[0m');
    console.log(proxyResData.toString('utf8'));

    return proxyResData;
  },
});


// start proxy handler
const proxyMiddleware = ({ route, URL }) => proxy(URL, proxyOpts({ URL, route }));


module.exports = {
  proxyMiddleware
};
