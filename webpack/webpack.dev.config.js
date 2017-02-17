const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfiguration = require('./webpack.common.config.js');

module.exports = webpackMerge(commonConfiguration, {
    devtool: "inline-eval-cheap-source-map",
    devServer: {
        historyApiFallback: true
    }
});
