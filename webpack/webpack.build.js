var loaders = require("./loaders");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        build: './src/app.js',
        vendors: ['angular', 'bootstrap', 'angular-ui-router']
    },
    output: {
        filename: '[name].min.js',
        path: 'dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new webpack.ProvidePlugin({_: 'lodash'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js'),
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            moment: 'moment',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module: {
        loaders: loaders
    }
};