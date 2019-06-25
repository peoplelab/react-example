const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./config/webpack/common');
const development = require('./config/webpack/development');
const production = require('./config/webpack/production');
const server = require('./config/webpack/server');


let config;

if (process.env.COMPILE) {
  const clean = { plugins: [new CleanWebpackPlugin()] };
  config = merge(config, clean);
} else {
  config = merge(config, server);
}

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

config = merge(common, envConfig);



module.exports = config;
