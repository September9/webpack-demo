# webpack-demo
#1 初始化一个项目
npm init
#2 局部安装webpack
npm i webpack --save-dev
#3 创建文件夹目录与文件
-dist //编译输出目录
-src  //源码目录
    -template
    index.js
-webpack
    webpack.config.js
.babelrc
package.json
#4 配置webapck 编写应用（写一个react组件，最终在页面中显示即可）
1、add App.js 在index.js中使用（react组件）
2、写webpack.config.js文件- entry output modules
   step1 可以先写不依赖任何modules的，直接在页面中引用打包结果；
   step2 我们想使用模板，引入loader/modules的使用
   step3 配置启动命令
   step4 react代码转码配置
   step5 热替换与更新
3、页面 - 模板 ejs
4、在package.json中配置启动命令
5、配置webpack-dev-server
#5 运行
npm run server 
