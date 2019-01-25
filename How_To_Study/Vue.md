### ES6

~~~
es5 没有块级作用于 只有函数作用域
var 声明变量 会变量提升

es6 
let 声明变量 值可以进行修改
const 用来声明常量 值不可以进行修改 声明时必须赋值
不存在变量提升
在相同作用域内不可以重新声明同一个变量
通过function声明的依旧是顶层对象 var 会提前解析

[...] 转数组

let {a,b}={a:'zs',b:'ls'};
console.log(a,b) //zs ls
let {c:str 变量名}={c:'ww'变量值,str:'1606b'};
console.log(str); //ww

startsWith() 返回布尔值,表示参数是否在原字符串头部出现
endsWith() 返回布尔值,表示参数是否在原字符串尾部出现
includes() 返回布尔值 表示是否找到了参数字符串
如果有第二个参数 这表示从第二个参数位置开始查找

for(let n of str) 遍历字符串  n代表每一个字符

str.repeat(n)返回一个字符重复n次

str.padStart(补全后的总长度,前插字符);
str.padEnd(补全后的总长度,后插字符);
第二个参数不传的话默认为空格补全
如果插入的字符串+原字符串>总长度，则会截去超出位数的字符串。

...  扩展运算符

//箭头函数可以嵌套箭头函数
(形参1,形参2)=>{操作}
形参1=>{}

如果箭头函数直接返回一个对象 必须在对象外加一个() 否则会报错

函数体内的this对象,就是定义时所在的对象,而不是使用时所在的对象
箭头函数无自己的this,导致内部的this就是指向外层代码块的this
不可以使用arguments对象
不可以当作构造函数 即不能通过new来实现
this对象的指向是可变的,但是在箭头函数中,它是固定的

ArrayObject.copyWidthin(target,start,end);
在当前数组内部,将制定位置的成员赋值到其他位置,会覆盖原有成员
返回值：被修改的数组

Object.is() 比较两个值是否严格相等 返回boolean
Object.is(NaN,NaN)

Object.assign()
 Object.getOwnPropertyDescriptor()
 返回某个对象属性的描述对象
 
 let obj={foo:123};
 Object.getOwnPropertyDescriptor(onj,'foo');
 	{
  		value:123,  //属性值
  		writable:true,  //可编写
  		enumerable:true,  //可枚举
  		configurable:true  //可配置s
	}
	enumerable：false 就表示某些操作会忽略当前属性
    对象原型的toString方法，以及数组的length属性
    通过可枚举性 可以避免被for...in 遍历到
    
    new Set();
    new Map();
    
~~~

### Promise

~~~
new Promise((resolve,reject)=>{
  //resolve 成功执行的回调函数
  //reject 失败执行的回调函数
  	if(异步成功操作){
		resolve('success')  
	}else{
  		reject('error')
	}
}).then(function(res){
  	console.log(res)
},function(){
  	console.log(res)
})

Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
~~~



### async函数

~~~
ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
async 函数是什么？一句话，它就是 Generator 函数的语法糖。
前文有一个 Generator 函数，依次读取两个文件。

async函数对 Generator 函数的改进，体现在以下四点。
（1）内置执行器。
（2）更好的语义。
（3）更广的适用性。
（4）返回值是 Promise。
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

const fs = require('fs');
const path = require('path');

const getFile = function(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, function(err, data) {
            if (err) {
                reject(err);
                return;
            };
            resolve(data.toString());
        })
    })
};

async function fun() {
    let data = await getFile('./data/data.json');
    return data;
};
fun().then(data => {
    console.log(data)
}).catch(res => {
    console.log(res)
})
~~~

### class

~~~
es6 class 用来用来构造函数  一定要通过new关键字进行调用 constructor方法代表原型构造函数

class 构造函数名称{
	constructor(参数){//原型函数
  		//属性
  		//方法1
  		//方法2
	}
	方法1(){
  
	}
	方法2(){
  
	}
	static 方法3(){
  
	}
}
new 构造函数名称()
构造函数名称.方法3()

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

//继承
class ColorPoint extends Point {
  constructor() {
  }
}  
super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
~~~

### Math

~~~
Math.trunc 去除一个数的小数部分，返回整数部分
对于非数值，会内部使用Number方法将其转为数值 true=1 null/false=0
~~~

### webpack

~~~
本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

webpack运行 默认去找webpack.config.js去执行


从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。在开始前你需要先理解四个核心概念：

入口(entry)
输出(output)
loader
插件(plugins)


入口(entry)
入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
每个依赖项随即被处理，最后输出到称之为 bundles 的文件中，我们将在下一章节详细讨论这个过程。
可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。默认值为 ./src。

出口(output)
output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程： 默认输出文件名为main.js

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

在更高层面，在 webpack 的配置中 loader 有两个目标：

test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
	支持正则
use 属性，表示进行转换时，应该使用哪个 loader。

css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们 要结合style-loader 使用 先引入style-loader 在引入css-loader
sass-loader 依赖node-sass 

file-loader默认情况下，生成的文件的文件名就是文件内容的 MD5 哈希值并会保留所引用资源的原始扩展名。
url-loader功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。

const path=require('path');
const Ex=require('extract-text-webpack-plugin');
const HtmlPlugin('html-webpack-plugin');
const webpack=require('webpack');
modult.exports={
  	entry:path.join(__dirname,'src','main.js'),
  	output:{
		path:path.join(__dirname,'build'),
        filename:'index.js'
	},
	module:{
  		rules:[{
  			//匹配文件类型 支持正则
  			test:/\.(js|jsx)$/,
  			//参数
  			options:{
  				presets:['@babel/preset-env']
			},
			//过滤文件
			exclude:/(node_modules|bower_components)/,
			loader:'babel-loader'
			/*use:[{
  				loader:'babel-loader'
			}]*/
		},{
  			test:/\.css$/,
  			use:['style-loader','css-loader']
		}, {
            test: /\.(png|jpg|gif|jpeg)$/,
            loader: 'file-loader'
        }, {
            test: /\.(eot|ttf|woff|svg)$/,
            loader: 'url-loader'
        },,{
  			test:/\.(sass|scss)$/,
  			use:Ex.extract({
  				fallback:'style-loader',
  				use:[{
  					loader:'css-loader',
  					options:{
  						minimize:true
					}
				},'sass-loader']
			})
		}]
	},
	devServer:{
  		port:9090, //端口号
  		host:'localhost', 
  		open:true,  //自动打开窗口
  		inline:true, //实时刷新
  		hot:true, //实时热更新
  		setup(app){ //响应
  			app.get(url,(req,res)=>{})
  			app.post(url,(req,res)=>{})
		}
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),//启用模块热替换
  		new Ex('style.css'), //之后要生成的css文件名
  		new HtmlPlugin({
  			title:'1606B',//要输出的title名称
  			template:'./index.html',//要找的html文件
  			filename:'index.html', //输出的文件名称
  			inject:'body' //注入文件位置
		})
	]
}

webpack-merge 合并对象
~~~

### Vue

~~~
需配置
resolve:{
  	alias:{
  		"vue$":'vue/dist/vue.esm.js'
	}
}


new Vue({
  	el:"#element", //挂载点
    data:{//数据
  		
  	},    
})

v-text 输出文本
v-html 输出元素

v-show  display

v-on:事件类型="语句或方法"  methods:{this 指向vue实例对象}
v-bind:href=""    :href
v-bind:value=""   :value

.prevent 阻止默认行为
.stop 阻止冒泡

v-if 语句判断
v-for="(item,key,index) in object"
item:每一个属性值 键值
key:键名
index:下标

v-for="(item,index) in array"
item:数组每一项
index:下标

computed:{}计算属性 

当数据发生变化时 会触发watch

template 一个字符串模板作为Vue实例的标识使用 模板将会替换挂载的元素 挂载元素的内容都将被忽略 除非模板的内容有分发插槽

$el $data $options $refs


组件：
	vue 自定义的html 标签 
好处：
	可以复用
全局组件 可以在每一个vue实例中调用
	Vue.component(组件名,{ //配置项
  		template:'<div><p>{{n}}</p><button @click="add">{{title}}</button></div>',
        data(){
  			return {
  				n:0,
  				title:"按钮"
			}
		},
		methods: {
            add() {
                this.n++;
            }
    	}
	})
局部组件
	new Vue({
  		el:
  		components:{
  			组件名：配置项
		}
	})
	
单文件组件 name.vue
template  结构
script	样式
style	行为

vue-loader  vue-template-compiler  编译vue template模板
const VueLoaderPlugin=require('vue-loader/lib/plugin');


Vue自定义事件：
Vue实例对象.$emit('事件名称',参数1,参数2,...)

Vue实例对象.$on('事件名称',(参数1,参数2)=>{
  
})触发事件
~~~

### Vue-cli

~~~
创建一个名为objectName的项目目录
全局安装vue-cli

vue init webpack objectName
~~~

###	插槽

~~~
slot 

父组件
<template slot="title">
	<span>广场</span>
</template>
子组件
<slot name="title"></slot>

父组件
<contents 属性></contents>
子组件
props:[属性]
~~~

### vue-router

~~~
let routerobj=new VueRouter({
	routes:[{
    	path:''  ,//要监听的路径 :动态路由名 '/home/:index'
    	component: ,//要加载的模板
    	children:[{//子路由
  			path:'',
  			component:
		}] 
    }]
})

Vue.use(注册插件)
new Vue({
  	el:"#app",
  	router:routerobj,
  	render:h=>h(App)
})

this.$route  当前路由对象
this.$router 全局VueRouter对象

this.$router.push(path||{ 
  	name:'', //找对应的路由名称进行跳转
  	params:{
  		动态路由名称
	},
	query:{ ?key=value
  		key:value
	}
})  切换路由路径

$router.back() 返回上一级路由
$router.go(-1) 返回上一级路由
$route.params.动态路由名称
~~~

### keep-alive

~~~
<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中
~~~

