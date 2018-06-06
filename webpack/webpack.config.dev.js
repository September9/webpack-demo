const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log("77777", path.join('/foo', '/bar/', 'baz/asdf', 'quux'))

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: '[name].js',
      chunkFilename: 'js/[name].js',
      publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
           { 
               test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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
        contentBase: path.join(__dirname, "dist"),
        open: true,
        hot: true,
        inline: true,
        port: 9000,
      },
  };