const PATH = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: PATH.resolve(__dirname, 'build'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'app/views/layout.html'
    })
  ]
};
