// Babel: converter (transpilar) codigo do rect paara que o brownser entenda
// Webpack: Para cda tipo de arquivo (js, css, png) eu vou converter o codigo de uma maneira diferente
//          Loaders: babel-loaders, css-loader, image-loader

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpg)$/i,
                use : {loader: 'file-loader'}
            }
        ]
    },
};