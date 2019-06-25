const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js', // dev
    chunkFilename: '[name].bundle.js',  // dev
    // filename: '[hash].js' // prod
    // filename: '[hash].[hash].js' // prod
    devtoolLineToLine: true,  // dev
    sourceMapFilename: '[name].js.map',  // dev
    // sourceMapFilename: '[name].[contenthash].js.map',  // dev
    pathinfo: true,  // dev
    publicPath: '/'
  },
  mode: 'development', // dev
  devtool: 'cheap-module-eval-source-map', // dev
  // mode: 'production', // prod
  // devtool: 'none', // prod
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: '[hash].[ext]', // prod
              name: '[path][name].[ext]', // dev
              // publicPath: 'public', // prod
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
      // hash: true,
      inject: false,
      // minify: false,
      template: './src/index.html',
      title: 'React example',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: true,

  devServer: {
    contentBase: '/public/',
    filename: 'bundle.js',
    index: 'index.html',
    historyApiFallback: true,
    port: 3000,
  }
};
