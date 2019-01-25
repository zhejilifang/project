### React

~~~
教程：

React 是一个用于构建用户界面的 JAVASCRIPT 库。
React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
使用单向数据流的方式，来渲染页面内容，并且通过监听值的变化来实现数据的双向绑定

特点：
1.声明式设计 −React采用声明范式(包含相同特性的一个集合)，可以轻松描述应用。
2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互(虚拟dom)。
3.灵活 −React可以与已知的库或框架很好地配合。
4.JSX − JSX 是 JavaScript 语法的扩展(js的一种方法)。React 开发不一定使用 JSX ，但我们建议使用它。
5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

React&JSX的安装配置
编辑器配置 vscode  react-jsx  react-complete
		  sublime babel
		  
使用React
1、CND外链

<script src="https://cdn.bootcss.com/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.bootcss.com/babel-standalone/7.0.0-beta.3/babel.js"></script>

2、使用webpack自动化构建  babel-preset-react
	.babelrc 需要配置 react
	{
  		presets:["env","react"]
	}
3、使用create-react-app 来创建一个react项目
	安装 npm i create-react-app -g
	创建项目 create-react-app 项目名称
	cd 项目名称 执行命令 
	
4、使用yarn包管理器
安装 cnpm i yarn -g
配置  .yarnrc
		cache-folder "D:\\Node\\npm-cache"
简单使用 add
5、工程目录与代码规范
	1、fileheader 添加每一个文件的代码注释
	2、工程目录
		common 项目公共代码区域
		components 组件
		containers 路由页面
		utils 工具库
		router 配置路由
~~~

### ReactDOM.render()

~~~
ReactDOM.render(jsx,dom)
jsx浏览器不认识，需要通过babel编码

jsx只能有一个根节点元素,如果有多个,需要一个div包裹起来 最好在最外层div外添加一个括号

react 推荐使用内联样式 驼峰大小写 可以省略px会自动添加后缀
{/* 注释 */}
~~~

### 组件

~~~
1、无状态组件  函数式组件 首字母必须大写
function Title(props){
  return title.length?title : '666'
}
2、有状态组件
class List extends React.Component{
	//es6特性，没有显性的声明构造函数，将会返回一个空的构造函数
  	constructor(props){
  		super(props);
  		this.state={
  			arr:[{
  				name:'zs',
  				age:18
			},{
  				name:'lisi',
  				age:20
			}]
		}
	}
	componentDidMount(){
  		setInterval(()=>{
			this.tick();  		
		},1000)
	}
	tick(){
  		this.setState({
  			clock:new Date()
		})
	}
	render(){
  		//通过es6的解构赋值来取得状态对象中的参数
  		const {arr} =this.state;
  		return 
	}
}
~~~

### 生命周期函数

~~~
组件的生命周期可分成三个状态：

Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

//组件载入之前
componentWillMount 在渲染前调用,在客户端也在服务端。

//组件载入完成
componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)

//组件接收到新的props参数时的回调函数
componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

//组件是否可以更新 返回一个布尔值 true可更新 false取消更新
//应用场景 当state或者props状态改变的时候,值没有变化还是会进行页面的重绘,操作了性能和体验的下降,当我的状态改变,参数或者值没有变化的时候,不去进行重绘
shouldComponentUpdate(nextProps,nextState){  	
}
shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。

//组件将要更新
componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

//组件更新完成
componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

1、通过ES6的箭头函数来改变this指向
2、通过bind()方法来改变this指向

状态变了页面内容由于开启了shouldComponentUpdate 需要强制重绘
this.forceUpdate();
~~~

### props

~~~
设置props默认值
1、
组件.defaultProps={}
2、
static defaultProps ={}

验证props类型
1、
组件.propTypes={
  props:PropTypes.类型
}
2、
static propTypes ={
   props:PropTypes.类型
}
~~~

~~~
使用拦截器的注意事项
只能拦截axios的请求,其他方式的请求一律不能拦截
不能与webpack-dev-server请求接口一起用
~~~

~~~
父组件向子组件通讯
this.props接收父组件的state参数

子组件向父组件通讯
this.props接受来自父级的一个回调函数,执行函数将需要传给父级的参数传过去

兄弟组件通讯
1、context 老版本
2、eventbus 一个全局对象
3、通过一个组件包裹兄弟组件,子1-父 父-子2 (将兄弟组件通讯变成了两次父子通讯)
4、redux
5、新版本Context
~~~

### 高阶函数

~~~
概念：函数调用函数
函数作为参数，或者将函数作为返回值的函数
function fun(fn){
  let a="666";
  return fn(a)
}
fun(val=>{
  console.log(val)
})
~~~

### 高阶组件

~~~
一个函数接收一个组件 并返回一个新的组件
~~~

### react-router-dom

~~~
下载引入react-router-dom
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
/home访问
import {HashRouter as Router,Route,Switch} from "react-router-dom";
/#/home访问
<Router>  //下面只能有一个根节点
	<Switch>
		<Route exact path="/"  render={()=>{
  			return <Index />
		}}></Route>
		<Route path="/list" component={List}></Route>
		<Route path="/login" component={Login}></Route>
	</<Switch>
</Router>

render函数用来渲染组件 返回一段jsx的语法 接收两种类型参数 jsx 或者class 定义的组件


~~~

跨级组件通讯的两种方式

优化react

简述shouldComponentUpdate 生命周期的理解

  如何配置路由