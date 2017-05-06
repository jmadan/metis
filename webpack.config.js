const PATH = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  entry: './app/index.js',
  output: {
    path: PATH.resolve(__dirname, 'build'),
    filename: 'app_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: [{loader: 'babel-loader', query: {compact: false}}] },
      {test: /\.css$/, use: ExtractTextPlugin.extract({use: 'css-loader'})},
      {test: /\.(png|jpg|gif)$/, loader: "url?limit=25000"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: PATH.join(__dirname, "build"),
    compress: true
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {root: PATH.resolve(__dirname,'../'), verbose: true, dry: false}),
    new HTMLWebpackPlugin({
      template: './app/views/layout.html'
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([{from: PATH.join(__dirname, 'app/static'), to:PATH.join(__dirname, 'build')}], {copyUnmodified: true}),
    new webpack.EnvironmentPlugin(['MONGOAPI'])
  ],
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    module: "empty"
  }
};

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'PORT': JSON.stringify(process.env.PORT)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
