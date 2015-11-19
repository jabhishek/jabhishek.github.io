'use strict';

var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'scripts/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: "main.js"
    },
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