var loaders = require("./loaders");
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.ProvidePlugin({
            moment: 'moment',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module:{
        loaders: loaders
    }
};