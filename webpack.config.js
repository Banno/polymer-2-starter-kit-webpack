'use strict';
/* global __dirname module require*/
/* eslint comma-dangle: ["error", "never"] */
const path = require('path');

module.exports = {
  entry: './src/my-app.html',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
    descriptionFiles: ['package.json']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['syntax-dynamic-import']
            }
          },
          {
            loader: 'polymer-webpack-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  }
};