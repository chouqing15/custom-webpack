const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = {
  mode: 'development',
  entry: [
    // Runtime code for hot module replacement
    'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Your entry
    './src/index.js',
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.less$/i,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'less-loader'
  //       ],
  //     },
  //   ]
  // },
  devtool: 'inline-source-map',
  plugins: [
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
const compiler = webpack(config);

// `hot` and `client` options are disabled because we added them manually
const server = new webpackDevServer({ hot: false, client: false, port: 3000 }, compiler);

(async () => {
  await server.start();
  const localIPv4 = await webpackDevServer.internalIP('v4');
  console.log('dev server is running, http://'+ localIPv4 + ':3000');
})()