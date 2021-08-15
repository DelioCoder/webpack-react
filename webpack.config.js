
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */

module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    mode: "production",
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|svg)$/,
                type: 'asset'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}