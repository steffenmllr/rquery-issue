'use strict';
var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
        browserNoActivityTimeout: 30000,
        frameworks: ['mocha'],
        files: [
            './globals.js',
            './tests.js',
        ],
        preprocessors: {
            './globals.js': ['webpack'],
            './tests.js': ['webpack'],
        },
        reporters: ['progress'],
        webpack: {
            devtool: 'eval',
            module: {
                loaders: [
                    {
                        test: /\.js$|.jsx$/,
                        loader: 'babel',
                        exclude: /node_modules/
                    }
                ]
            },
            plugins: [
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
                new webpack.DefinePlugin({
                    'process.env': {
                        BROWSER: JSON.stringify(true),
                        NODE_ENV: JSON.stringify('test')
                    }
                })
            ],
            node: {
                net: 'empty',
                tls: 'empty',
                binary: 'empty',
                dns: 'empty'
            },
            resolve: {
                extensions: ['', '.js', '.json', '.jsx'],
                modulesDirectories: ['app', 'node_modules']
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
