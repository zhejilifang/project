# webpack

## 什么是webpack？
webpack 是一个JavaScript 应用程序的静态模块打包器(static module bundler)。在 webpack 处理应用程序时，它会在内部创建一个依赖图(dependency graph)（在webpack中一切皆模块），用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个bundle（浏览器可识别的一个或者多个文件）。

## webpack和其他前端自动化构建工具的区别在哪？
* gulp：前端自动化构建工具，以任务的形式进行构建，css的编译，js编译，启动服务，手动配置，对文件进行操作
* grunt: 类似于gulp也是自动化的构建工具，减轻手动构建的效率低下的问题
* webpack：以模块为入口，使用loader，plugins对文件进行编译，在webpack中所有内容都是模块

## webpack的核心概念
* 模块解析规范, 在webpack中模块是按照node.js commonJs规范定义，也可以自己配置（resolve）
* 入口（entry）
* 出口(output)
* 解析规则(loader)
* 插件(pulgins)
* devServer

## 安装

npm install webpack webpack-cli -g 
或者
yarn global add webpack webpack-cli
然后就可以全局执行命令了
webpack-cli 是使用 webpack 的命令行工具，在 4.x 版本之后不再作为 webpack 的依赖了，我们使用时需要单独安装这个工具。


## 入口 entry
入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始，webpack 会找出有哪些模块和 library 是入口起点（直接和间接）依赖的。
> 语法：
entry: string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })
 
传递一个字符串代表一个入口

传递数组{Array}或者对象{Object}, 代表一个或者多个入口

实例
```
  module.exports = {
    entry: 'app.js'
  }
```
或者
```
  module.exports = {
    entry: {
      app: 'app.js'
    }
  }
```

## 出口（output）
所有构建目标的输出位置
> 语法：
```
output: {
  path: path.resolve(__dirname, 'dist'),  //output 目录对应一个绝对路径。
  publicPath: '/', 此输出目录对应的公开 URL,
  filename: 'js/bundle.js'   // 对应js输出位置，已经bundle后文件名
  chunkFilename: '[id].[hash].js'  // 对应使用懒加载模块的输出名称
}
```
### filename 中的模板标识符
* [name]  模块名称  如果在入口指定名称，那么name就是指定的名称，如果没有指定就是main
* [hash]  模块标识符的 hash   sauidashudhi2137128hqisdihqq   唯一版本标识  [hash:6]  取6位
* [id]    模块的id值
* [ext]   对应文件后缀

## 模块处理（moule）
处理项目中的不同类型的模块。

### module.noParse
* 作用：忽略一些不需要编译的内容
* 语法：
```
RegExp | [RegExp]
RegExp | [RegExp] | function（从 webpack 3.0.0 开始）
```

* 实例：
```
module: {
    noParse: /jquery|lodash/,

    // 从 webpack 3.0.0 开始
    noParse: function(content) {
      return /jquery|lodash/.test(content);
    }
  }
```
## rules (编译规则，用来配置loader) [array]
- 如果你想用es6，scss，less，postcss，...... 但是浏览器不支持，所以需要编译，在webpack中除了模块规范外，还可以通过loader实现类似于gulp这类工具，自动化编译功能

- webpack 中提供一种处理多种文件格式的机制，便是使用 loader。我们可以把 loader 理解为是一个转换器，负责把某种文件格式的内容转换成浏览器可识别的内容。

* loader 匹配规则
```
module: {
  rules: [
    {
      test: /.js$/,  //匹配需要编译的文件类型  条件1
      include: [path.resolve(__dirname, 'src'), ...]  // 需要被匹配的范围  条件2
      exclude: [path.resolve(__dirname, 'node_modules'), ...]  // 不需要被匹配的范围  条件3
      use: [
         'style-loader',  // loader名称
         'url-loader?limt=1000'  // loader名称和参数
         {
           loader: 'css-loader',  //loader 名称
           options: {   // loader传递的参数
             importLoaders: 1
           }
         },
         {
           loader: 'less-loader',
           options: {
             noIeCompat: true
           }
         }
       ]
    }
  ]
}
```
* 常用loader
```
babel-loader  url-laoder  css-loader style-loader  sass-loader less-loader postcss-loader .....
```

## 插件  (plugins)
除了编译任务外的其他任务



















