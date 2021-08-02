const path = require('path');
const webpack = require('webpack');

// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base');

const env = String(process.env.NODE_ENV || 'development').toLowerCase();

// Define Plugin
const pluginDefinePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(env)
});

const pluginCleanLicense = new CleanWebpackPlugin({
  cleanAfterEveryBuildPatterns: ['*.LICENSE.txt']
});

const plugins = [
  pluginDefinePlugin,
  pluginCleanLicense
];

const config = Object.assign(baseConfig, {
  entry: {
    app: './client/js/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './public/'),
    filename: 'js/[name].js'
  },
  resolve: {
    modules: [
      './',
      './node_modules/'
    ]
  },
  devtool: env !== 'production' ? 'source-map' : undefined,
  plugins
});

module.exports = config;
