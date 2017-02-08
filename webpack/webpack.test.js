var preloaders = require("./preloaders");
var loaders = require("./loaders");
var webpack = require('webpack');
module.exports = {
  entry: ['./src/app/app.module.js'],
  output: {
    filename: 'build.js',
    path: 'tmp'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map-inline",
  module: {
    preLoaders:preloaders,
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.js).)*.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
      }
    ]
  }
};

