const PATH = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: PATH.resolve(__dirname, '/build'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({use: 'css-loader'})},
      {test: /\.(png|jpg|gif)$/, loader: "url?limit=25000"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './app/views/layout.html'
    }),
    new ExtractTextPlugin('style.css')
  ]
};
