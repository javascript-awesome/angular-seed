const webpack = require('webpack');

const loaders = require("./helpers/webpack.loaders.config");
const preloaders = require("./helpers/webpack.preloaders.config");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/app/app.module.js'],
    output: {
        filename: 'build.js',
        path: './dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        })
    ],
    module:{
        preloaders: preloaders,
        loaders: loaders
    }
};
