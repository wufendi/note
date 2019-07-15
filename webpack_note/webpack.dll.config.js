/**
 *Author: wufendi
 *Date:2019-07-13 11:40
 *Description:
 **/
const path = require('path');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   // context: path.resolve('src'),
    entry: {
        jquery: ['jquery'],
        echarts: ['echarts']
    },
    output:{
        filename: '[name].dll.js',
        path: path.resolve('dist'),
        library: '[name]_library'
    },
    plugins:[
        new CleanWebpackPlugin({
            root: path.join(__dirname, 'dist')
        }),
        new Webpack.DllPlugin({
            path: path.join(__dirname, './dist', '[name].manifest.json'),
            name: '[name]_library'
        })
    ]
};
