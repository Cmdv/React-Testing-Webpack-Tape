var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/index'],
    test: ['./src/__test__/index']
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules']
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  node: {
    fs: 'empty'
  }
}