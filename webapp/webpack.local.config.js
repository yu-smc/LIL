const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = merge(baseConfig, {

  mode: 'development',

  output: {

    path: path.resolve(__dirname, 'local'),
    filename: 'js/bundle-' + (new Date()).getTime() + '.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/pug/index.pug'
    }),
    //htmlがふえたらHtmlWebpackPluginを増やすしかない
    // new HtmlWebpackPlugin({
    //   title: 'photo-gellery',
    //   filename: 'gallery.html',
    //   template: './src/pug/gallery.pug'
    // }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'local'),
    port: 1111
  },

});

module.exports = config;