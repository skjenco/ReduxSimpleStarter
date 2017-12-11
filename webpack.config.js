module.exports = {
  entry: [
    './src/index.js',
      'webpack-dev-server/client?http://0.0.0.0:80'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    host:'0.0.0.0',
    port:8080,
    disableHostCheck: true, //security risk but lets it work with 0.0.0.0 so I can use remote
    historyApiFallback: true,
    contentBase: './'
  }
};
