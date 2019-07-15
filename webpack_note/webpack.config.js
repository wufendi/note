/**
 *Author: wufendi
 *Date:2019-04-24 19:22
 *Description:
 **/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // CSS文件单独提取出来 webpack 3版本之前的
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css文件单独提取出来 webpack 4版本以后
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清空打包目录的插件
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer'); //postcss-loader配合使用


module.exports = {
   // mode: 'development',
    //context: path.resolve('src'),
    entry: {
        index_test: './src/index.js', // key: value
        login_test: './src/login.js', // 实际 require('./login.js')
    },
    output:{
        filename: '[name].js', // [name] 为 entry中对象的key
        path: path.resolve('dist'),
        //publicPath: './'
    },
    // optimization: {
    //   splitChunks: {
    //       cacheGroups: {
    //           commons: {
    //               name: 'common',
    //               chunks: 'initial',
    //               minChunks: 2
    //           }
    //       }
    //   }
    // },
    plugins:[
        // new Webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // }), CommonsChunkPlugin 插件直接改为 optimization.splitChunks
        // 和 optimization.runtimeChunk 两个配置
        // new Webpack.DllReferencePlugin({
        //    manifest: require('./dist/jquery.manifest.json')
        // }),
        // new Webpack.DllReferencePlugin({
        //     manifest: require('./dist/echarts.manifest.json')
        // }),
        new CleanWebpackPlugin({
            root: path.join(__dirname, 'dist')
        }),
        new Webpack.DefinePlugin({
            'PRODUCTION': '"This is something we needed."',
        }),
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
        new Webpack.BannerPlugin({
            banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:4].css',
            publicPath: ''
        }),
        //new ExtractTextWebpackPlugin('css/[name]_test.css'),

        new Webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader','css-loader']
                // use: ExtractTextWebpackPlugin.extract({
                //     use: 'css-loader'
                // })
                use:[
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer(
                                {
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }
                            )]
                        }

                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                exclude: path.resolve('src/static'),
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
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        //contentBase: path.resolve('dist'),
        index: 'index_test2.html',
        compress: true,
        hot: true
    }
};
