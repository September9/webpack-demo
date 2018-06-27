const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      chunkFilename: 'js/[name].js',
      publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
           { 
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            }
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'webpack ejs demo',
            inject: false,
            appMountId: 'root',
            template: './src/template/index.ejs',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        open: true,
        hot: true,
        inline: true,
        port: 9000,
      },
  };