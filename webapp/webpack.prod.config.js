const webpack = require("webpack")
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = merge(baseConfig, {

  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'lilweb-214604/www'),
    filename: 'js/bundle-[name]' + (new Date()).getTime() + '.js',
    publicPath: '/',
  },
});

module.exports = config;