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

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'polymer-webpack-loader'
          }
        ]
      }
    ]
  }
};
