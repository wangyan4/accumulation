## 安装 webpack 和webpack-cli

1. cd 进入项目目录
2. yarn add webpack webpack-cli

## 安装webpack-dev-server

+ yarn add webpack-dev-server

### webpack.config.js配置文件

``` webpack.config.js
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
	entry:'./src/index.js',//打包的入口文件
	ouput:{
		filename:'bundle.js',//输出的文件名
		path:path.resolve(__dirname,'build')//输出文件目录
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',//模板文件
			filename:'index.html'//输出文件名
		}),
		new MiniCssExtractPlugin({
			filename:'main.css'
		})
	],
	module:{
	//配置解析样式文件
		rules:[
			{
				test:/\.js$/,
				use:{
					loader:'bable-loader',
					options:{
						presets:{
							'@bable/preset-env'
						}
					}
				}
			},
			{
				test:/\.css$/,//解析css文件
				//loader解析从右往左执行
				//use:['style-loader','css-loader']
				use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
				
			},
			{
				test:/\.less$/,//解析less文件
				use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
			}
		]
	}
}
```

### webpack 插件

+ **html-webpack-plugin**

  > 1. 下载 yarn add html-webpack-plugin -D
  > 2. 在webpack.config.js中通过require引入
  > 3. 在plugins中new实例化对象

+ **mini-css-extract-plugin**

  > 1. 下载 yarn add mini-css-extract-plugin
  > 2. 在weback.config.js中通过require引入
  > 3. 在plugins中new实例化对象

### loader 

+ **css-loader**

+ **less-loader**

+ **postcss-loader**  css添加前缀 -webkit-、-ms- 

  + 和**autoprefixer** 搭配使用

    ``` js
    // postcss.config.js
    
    module.exports={
      plugins:[
       require('autoprefixer') 
      ]
    }
    ```

    

+ **bable-loader  @bable/core  @bable/preset-env**  编译高级语法  例:es6->es5