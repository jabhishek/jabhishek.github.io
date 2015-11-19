'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'scripts/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: "main.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                include: [path.resolve(__dirname, "scripts")],
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};