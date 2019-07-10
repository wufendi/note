/**
 *Author: wufendi
 *Date:2019-04-24 19:22
 *Description:
 **/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // CSS文件单独提取出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清空打包目录的插件

module.exports = {
   // mode: 'development',
    context: path.resolve('src'),
    entry: {
        index_test: './index.js', // key: value
        login_test: './login.js' // 实际 require('./login.js')
    },
    output:{
        filename: '[name].[chunkhash:4].js', // [name] 为 entry中对象的key
        path: path.resolve('dist'),
        publicPath: '.'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:  path.resolve('src/index.html'),
            filename: 'index_test2.html',
            chunks: ['index_test']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src/login.html'),
            filename: 'login_test2.html',
            chunks: ['login_test']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:4].css'
        }),
        //new ExtractTextWebpackPlugin('css/[name]_test.css'),
        new CleanWebpackPlugin({
            root: path.join(__dirname, 'dist')
        }),
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader','css-loader']
                // use: ExtractTextWebpackPlugin.extract({
                //     use: 'css-loader'
                // })
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8162,
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    }
};
