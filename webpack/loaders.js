module.exports = [
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.sass$/,
        loaders: ["style", "css", "sass?indentedSyntax"]
    },
    {
        test: /\.css$/,
        loader: 'style!css!postcss'
    },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?indentedSyntax"]
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    },
    {
        test: '\.jpg$',
        exclude: /node_modules/,
        loader: 'file'
    },
    {
        test: '\.png$',
        exclude: /node_modules/,
        loader: 'url'
    }
];
