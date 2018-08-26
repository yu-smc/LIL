const webpack = require("webpack")
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: `./src/js/entry.js`,

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader']
      }
    ]
  },
  externals: [
    {
      jquery: 'jQuery'
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
        title: 'index',
        filename: 'index.html',
        template: './src/pug/index.pug'
    }),
      //htmlがふえたらHtmlWebpackPluginを増やすしかない
    new HtmlWebpackPlugin({
    title: 'photo-gellery',
    filename: 'gallery.html',
    template: './src/pug/gallery.pug'
    }),
    //enable build-files to reffer node_env by variable 'NODE_ENV'
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

