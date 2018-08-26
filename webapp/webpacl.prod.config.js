const webpack = require("webpack")
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = merge(baseConfig, {

  mode: 'production',

  output: {
    path:      path.resolve(__dirname, 'prod'),
    filename: 'js/bundle-' + (new Date()).getTime() + '.js',
    publicPath: '/',
  },
});

module.exports = config;