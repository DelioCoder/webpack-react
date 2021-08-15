const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV !== 'production';

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */

const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: '../dist',
        open: 'chrome'
    },
    target: 'web',
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ]
};

module.exports = merge(common, devConfig);