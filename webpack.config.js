const webpack = require('webpack');
const path = require("path");
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var ansiColors = {
  red: '00FF00' // note the lack of "#"
};
var overlayStyles = {
  color: '#FF0000' // note the inclusion of "#" (these options would be the equivalent of div.style[option] = value)
};
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&ansiColors=' + encodeURIComponent(JSON.stringify(ansiColors)) + '&overlayStyles=' + encodeURIComponent(JSON.stringify(overlayStyles));

module.exports = {
  mode: 'development',
  // entry: {
  //   index: './src/index.js',
  //   // print: './src/print.js'
  //   // index: {
  //   //   import: './src/index.js',
  //   //   dependOn: 'shared',
  //   // },
  //   // another: {
  //   //   import: './src/print.js',
  //   //   dependOn: 'shared',
  //   // },
  //   // shared: 'lodash',
  // },
  entry: [
    // 'webpack-hot-middleware/client',
    'webpack-hot-middleware/client?reload=true',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js',
    // './src/print.js',
  ],
  devtool: 'inline-source-map',
  // watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'index app1'
    }), // Generates default index.html
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/',
    // assetModuleFilename: 'images/[hash][ext][query]'
  },
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      },
    },
  },
  // devServer: {
  //   static: './dist',
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(html|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
