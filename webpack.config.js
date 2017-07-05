/* eslint-disable import/no-nodejs-modules */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable */

const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
    }),
];

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: plugins,
};
