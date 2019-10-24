// 导入 nodejs 的path地址模块
const path =require('path');
 // 导入自动生成HTMl文件的插件
 var htmlWebpackPlugin = require('html-webpack-plugin');
//引入这行 ,必须加 渲染vue组件
 const VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports={
    mode: 'development', //production 生产 如果不配置则无法生成 bundle.js文件
    watch: true, //监听main.js 改变后自动打包
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, './src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        }),
        new VueLoaderPlugin() //new一个实例
    ],
    module:{
        rules:[
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
        ]
    },
    resolve:{
        alias: {
            "vue$":"vue/dist/vue.js"
        }
    }
};