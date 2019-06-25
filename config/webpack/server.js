module.exports = {
  watch: true,
  devServer: {
    contentBase: '/public/',
    filename: 'bundle.js',
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    port: 3000,
  }
};
