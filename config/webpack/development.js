const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    path: path.resolve(__dirname, '/build/'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    devtoolLineToLine: true,
    sourceMapFilename: '[name].js.map',
    pathinfo: true,
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      filename: 'index.html',
      inject: true,
      template: './src/index.html',
      title: 'React example',
    }),
  ]
};
