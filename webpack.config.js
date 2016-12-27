var path = require('path');

module.exports = {
    entry: {
        main: './src/app/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/src/dist/',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    // require 文件时可省略后缀 .js 和 .ts
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    // 配置 webpack-dev-server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8888
    }
}