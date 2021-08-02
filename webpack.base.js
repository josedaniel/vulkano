const path = require('path');

// Babel Loader
const useBabelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: [
        '@babel/plugin-syntax-jsx',
        '@babel/plugin-syntax-dynamic-import'
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }
};

// ESLint Loader
const useESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /(node_modules)/,
  use: {
    loader: 'eslint-loader',
    options: {
      root: true,
      configFile: path.resolve(__dirname, './.eslintrc'),
      ignore: path.resolve(__dirname, './.eslintignore'),
      failOnWarning: false,
      failOnError: false
    }
  }
};

const useLitSassLoader = {
  test: /\.css|\.s(c|a)ss$/,
  use: [
    {
      loader: 'lit-scss-loader',
      options: {
        minify: true, // defaults to false
      },
    },
    'extract-loader', 'css-loader', 'sass-loader'
  ]
};

module.exports = {

  mode: String(process.env.NODE_ENV || 'development').toLowerCase(),

  stats: {
    colors: true,
    env: true
  },

  module: {

    rules: [
      useBabelLoader,
      useESLintLoader,
      useLitSassLoader
    ]

  }

};
