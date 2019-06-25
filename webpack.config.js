const merge = require('webpack-merge');

const common = require('./config/webpack/common');
const development = require('./config/webpack/development');
const production = require('./config/webpack/production');
const server = require('./config/webpack/server');


let envConfig;
switch(process.env.NODE_ENV) {
  case 'DEVELOPMENT': {
    envConfig = development;
    break;
  }
  case 'PRODUCTION': {
    envConfig = production;
    break;
  }
  default: {
    envConfig = {};
  }
}

let config = merge(common, envConfig);

if (process.env.RUN_SERVER) {
  config = merge(config, server);
}


module.exports = config;
