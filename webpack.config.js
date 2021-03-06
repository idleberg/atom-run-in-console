//@ts-check

'use strict';

const path = require('path');
var nodeExternals = require('webpack-node-externals');
/**@type {import('webpack').Configuration}*/
const config = {
  target: 'node',

  entry: './src/evaluate.coffee',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'evaluate.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  externals: [
    'atom',
    nodeExternals()
  ],
  resolve: {
    extensions: ['.coffee', '.js']
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'coffee-loader'
          }
        ]
      }
    ]
  }
};
module.exports = config;
