const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = require('./config/webpack/common');
const development = require('./config/webpack/development');
const production = require('./config/webpack/production');
const devServer = require('./config/webpack/server');


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

const addConfig = process.env.COMPILE === 'COMPILE' ? { plugins: [new CleanWebpackPlugin()] } : { devServer };

const config = merge(commonConfig, envConfig, addConfig);


module.exports = config;
