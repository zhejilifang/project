### nodejs

~~~
什么是Node.js?
Node.js是基于 chrome V8引擎的 JavaScript 运行环境 
	特点：速度快、性能好、单线程、跨平台、事件与回调函数
Node.js使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
Node.js使用的是commonjs规范
Node.js 的包管理器 npm，是全球最大的开源库生态系统。
包管理文件 package.json 包含了当前项目的一些描述信息,通过npm init 命令来创建
npm 官网下载包 www.npmjs.com
国内访问国外网站比较慢,解决方案是通过淘宝镜像去访问
安装npm npm install 安装npm包命令 -g 全局安装 --save本地 -dev添加到dev版本项目依赖
设置全局包安装路径 npm config set prefix 
设置全局包缓存路径 npm config set cache 
查看路径目录 npm root 全局 npm root -g
	exports 导出对象
如何打开npm默认配置 npm config ls

如何执行node.js
1、node index.js
2、node 路径
3、node console.log()

配置环境变量 可以让某一个命令在当前系统下任意路径访问
配置访问全局包的环境变量  NODE_PATH 路径目录

什么是msi与exe? ==> 执行安装(傻瓜式安装,自动添加环境变量)  
	zip ==> 绿色安装(手动拷贝目录,手动添加环境变量)
msi是Windows installer开发出来的程序安装文件,它可以让你安装,修改,卸载你所安装的程序.说白了msi就是Windows installer的数据包,把所有和安装文件相关的内容封装在一个包里了.
setup.exe也允许你安装程序,但程序员在开发setup.exe的时候要比开发setup.msi困难的多,需要人工编写和安装,修改,卸载相关的很多内容.而msi把这写功能都集成化了,易于开发WINDWOS程序安装包

package.json必须是一个严格的json文件，而不仅仅是js里边的一个对象。其中很多属性可以通过npm-config来生成。
package.json中最重要的属性是name和version两个属性，这两个属性是必须要有的，否则模块就无法被安装，这两个属性一起形成了一个npm模块的唯一标识符。模块中内容变更的同时，模块版本也应该一起变化。

package.json文件配置详解{
	name:项目名称
	version:版本信息
	description:模块描述,或者搜索
	main:指定了加载的入口文件
	scripts:指定了运行脚本命令的npm命令行缩写{
  		"start":"node index --inline --hot --progress"
		}
	repository:指定一个代码存放地址(仓库)
	devDependencies:指定项目开发所需要的模块
	dependencies:指定项目运行所依赖的模块
	}
npm run start
~~~

## CommonJs

~~~
https://www.cnblogs.com/chenguangliang/p/5856701.html

AMD 和 CMD 的区别有哪些？

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

类似的还有 CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。

还有不少⋯⋯

这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的。

目前这些规范的实现都能达成浏览器端模块化开发的目的。

区别：

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.

2. CMD 推崇依赖就近，AMD 推崇依赖前置

3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。

4. 还有一些细节差异，具体看这个规范的定义就好，就不多说了。

CommonJS API定义很多普通应用程序（主要指非浏览器的应用）使用的API，从而填补了这个空白。它的终极目标是提供一个类似Python，Ruby和Java标准库。这样的话，开发者可以使用CommonJS API编写应用程序，然后这些应用可以运行在不同的JavaScript解释器和不同的主机环境中。

在兼容CommonJS的系统中，你可以使用JavaScript开发以下程序： 

(1).服务器端JavaScript应用程序

(2).命令行工具

(3).图形界面应用程序

(4).混合应用程序（如，Titanium或Adobe AIR）

node.js的模块系统，就是参照CommonJS规范实现的。在CommonJS中，有一个全局性方法require()，用于加载模块。假定有一个数学模块math.js，就可以像下面这样加载。

var math = require('math');

然后，就可以调用模块提供的方法：

　　var math = require('math');

      math.add(2,3); // 5

CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}

require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。

1、原理

浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。
- module
- exports
- require
- global
只要能够提供这四个变量，浏览器就能加载 CommonJS 模块。

2、Browserify 的实现

知道了原理，就能做出工具了。Browserify 是目前最常用的 CommonJS 格式转换的工具。

3、Tiny Browser Require

虽然 Browserify 很强大，但不能在浏览器里操作，有时就很不方便。

我根据 mocha 的内部实现，做了一个纯浏览器的 CommonJS 模块加载器 tiny-browser-require 。完全不需要命令行，直接放进浏览器即可，所有代码只有30多行。

它的逻辑非常简单，就是把模块读入数组，加载路径就是模块的id。

module.exports 在模块抛出
exports.名称=方法 

require() 主模块引入 1、内置模块 2、外置模块 3、自定义模块

模块加载机制：
当前目录==>父级目录==>磁盘根节点

为什么可以不写index.js
nodejs 找文件规则，给出一个文件夹路径，默认会找该文件夹的index.js
如果引用路径不想写./ 需要将自定义模块放到node_modules
可以通过package.json 的main 属性来指定入口文件名称
~~~

### npm包发布

~~~
npm adduser   
npm publish
~~~

### 文件拷贝

~~~
1、小文件拷贝
fs模块 文件系统模块  用来操作系统文件 内置模块
fs.readFile(filename,[encoding],[callback]);
路径 回调函数(err,data) data 默认返回一个buffer
fs.writeFile(目标文件路径，数据，回调函数)
fs.appendFile(dir,data,function(err){}) 只追加 不替换

path模块 路径处理模块 内置模块
path.normalize()将一个路径格式化成一个标准路径
path.join()将多个路径合并成一个路径 


2、大文件拷贝
fs.createReadStream(原文件路径)
fs.createWriteStream(目标文件路径)
原文件流.pipe(目标流)

3、文件判断
fs.stat(文件路径,function(err,stat){})
	stat.isFile() 判断是不是文件
	stat.isDirectory()判断是不是文件夹

4、事件发射器
Stream基于事件机制工作，所有Stream的实例都继承于NodeJS提供的EventEmitter。

5、chunk 代表一个数据块
当有数据流流入的时候可以做两个操作
pause() 暂停 resume() 恢复

    var rs = fs.createReadStream(src);

    rs.on('data', function (chunk) {
        rs.pause();
        doSomething(chunk, function () {
            rs.resume();
        });
    });
	
    rs.on('end', function () {
        cleanUp();
    });
以上代码给doSomething函数加上了回调，因此我们可以在处理数据前暂停数据读取，并在处理数据后继续读取数据。
ws.drain事件表示只写数据流已经将缓存中的数据写入到目标，可以传递下一段待写数据
此外，我们也可以为数据目标创建一个只写数据流，示例如下：
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    ws.write(chunk);
});

rs.on('end', function () {
    ws.end();
});

6、path.join();只能用来合并路径
   path.extname();返回文件后缀
   	如果路径中没有 . 或只有一个 . 或以 . 开头，则返回空字符	串 如果以 . 结尾 则返回 . 
   
   path.basename();返回路径的最后一部分 
   		第二个参数写了 会返回去掉后缀的前半部分
   path.dirname();返回代表文件夹的部分
   path.resolve(); 将一系列路径或路径段解析为绝对路径 
   如果不传参的话返回当前工作目录 
   如果在处理给定path段之后，还没有生成绝对路径，则使用当前目录进行追加
   从右往左依次追加，找到绝对路径就停止追加 直接返回
   __dirname 当前js文件所在的绝对路径
   path.isAbsolute()判断是不是一个绝对路径
   path.relative(); 得到一个从哪到哪的相对路径
   path.sep();解决跨平台路径"/" "\" 等路径问题 得到当前系统的分隔符
   path.parse()转对象  拆分
       {
      root:根
      dir:最后一个文件夹的部分
      base:文件部分
      ext:文件后缀
      name:文件名（不含后缀）
    }
   path.format()转字符串 拼接 
     如果有dir会忽略root
     如果有base会忽略ext和name
     path=path.dirname+path.basename
   
7、fs.mkdir(dir,function(err){});
	fs.mkdirSync(dir,function(err){});
	fs.readdir(dir,function(err,paths){});
		paths是读取到的文件集合
	
	判断文件或者文件夹是否存在的方法
	fs.exists(dir/file,function(exist){}) 
		exist是一个布尔值
8、process.argv 当前命令行执行命令集合
	process.cwd()返回当前的工作目录==path.resolve()
~~~

### http

~~~
http 是一个操作服务的内置模块
var http=require("http");
服务器 (被请求的一方,接收请求,做出响应)
服务器地址=协议(http/https)+域名(www.baidu.com)+端口(默认80)+路径(/src)+[地址栏参数?xx==oo&aa==bb]
eg: http://localhost:8080/path?id=1&num=2

客户端 (发出请求的一方)
	
	http.createServer(function(request,response){
      //接收请求、处理请求、做出响应
      	当客户端发起访问时 callback 才执行  执行次数跟客户端的请求次数有关
        request==>客户端向服务器发送请求的对象
        response==>服务器向客户端响应的对象
    }).listen(8080)
    //所有的请求路径都以 / 开头
    // request.url=path(路径)+search(地址栏参数)  
    // request.method(请求方式 GET | POST)
    // response.writeHead(状态码,{
  			'Content-Type':'text/plain'(存文本) || 'tetx/html' 
		}) 设置响应头信息
    // response.write()
    // response.end()
    
1、搭建服务器步骤
	引入模块==>创建服务http.createServer(function(req,res){})==>设置响应头信息(可省略)
	res.writeHead(状态码,{
  			'Content-Type':'text/plain'(纯文本) || 'tetx/html' || text/css || text/javascript || application/json  image/png image/gif  ....
	}) 
	==>设置响应内容(可省略) res.write(str/buffer)  Buffer.from()可以创建一个Buffer
		Buffer.concat([buf1,buf2]) 可以拼接buffer
	==>结束响应 res.end(str/buffer)
	==>监听端口号server.listen(端口号,callback);
	
	
	try{
  		//放入可能会发生同步异常的代码块
	}catch(e){
  		//e就是捕捉到的异常
	}
	
	当把html文件放到服务器下时，在该文件中发起的所有请求都会默认去该服务器下加载
	
http.request() http.get()
都是向本地或远程的服务器请求数据
http.request(服务器地址,function(res){
  //当服务器做出响应时执行的回调
  //用于接收服务器响应的数据
  	var str='';
  	res.on('data',function(chunk){
  		str+=chunk.toString();
	});
	res.on('end',function(){
  		console.log(str)
	})
}).end();

http.get(服务器地址,function(res){
  res.on('data',function(chunk){
  		str+=chunk.toString();
	});
	res.on('end',function(){
  		console.log(str)
	})
});

res.headers['content-encoding']告诉客户端返回的是个被gzip算法压缩的文件
~~~

### 前后端交互

~~~
form表单

1、get方式
	通过地址栏参数传递

2、post方式
  req.setEncoding('utf-8');
  var str='';
  req.on('data',function(chunk){
		str+=chunk;
  });
  req.on('end',function(){
	
  });
  
ajax请求
	res.writeHead(200,{
		'Access-Control-Allow-Origin':'*'
        设置服务器接受所有客户端发起的跨域访问  
	});
	if(req.url=="/favicon.ico"){
    	return
    }
    res.end(fs.readFileSync('./www'+req.url));
~~~

### querystring模块   url模块

~~~
querystring模块用于实现url参数字符串与参数对象的相互转换,以及对参数进行解码/编码
var querystring=require('querystring');
	querystring.parse()转对象 如果传递的键名相同键值不同 则键值生成一个数组
	querystring.stringify()转字符串 
	querystring.escape() 字符串编码
	querystring.unescape() 字符串解码


url模块允许解析url,生成url,以及拼接url
	var address=http://localhost:8080/path?name=zs&age=20

	url.parse(address,false/true) 生成一个对象
	第二个参数为true的作用是将query由一个string转成一个object
	属性：protocol  http:
	域名：hostname localhost
	端口：port 8080
	服务器名称：host=hostname+port
	路径：pathname /path
	参数：query name=zs&age=20
	search = ? + query
	path = req.url = pathname+?+query
	
	url.format() 生成一个url路径
~~~

### zlib模块

~~~
var zlib=require('zlib') 负责文件的压缩/解压的内置模块
//压缩
zlib.gzip(要压缩的文件内容,function(err,decoded){
});
//解压
zlib.unzip(要解压的文件内容,function(err,decoded){
});
//创建一个压缩流 tranform流
zlib.createGzip();

var rs=fs.createReadStream();
var ws=fs.createWriteStream();
var zip=zlib.createGzip();
rs.pipe(zip).pipe(ws)

//创建一个解压流
zlib.createGunzip()
~~~

### String.fromCharCode()

~~~
返回一个大写字母 a-z 
生成一个随机4位大写字母
var arr=[];
for(var i=0;i<4;i++){
  var num=Math.floor(Math.random()*26)+65;
  arr.push(String.fromCharCode(num))
}
~~~

### socket.io

~~~
socket.io  用于浏览器和服务器进行双工通讯(实时通讯)
没有socket.io之前 浏览器和服务器通过定期轮询来进行双工通讯

首先下载socket.io 包  npm install socket.io -save
var http=require('http');
var socketIo=require('socket.io');
var server=http.createServer(function(req,res){}).listen(8080);
var io=socketIo.listen(server);//会拦截以/socket.io开头的路径请求
//当客户端与服务器建立连接时触发
io.on('connection',function(socket){
	//向浏览器发送事件
  	socket.send('hello');
  	//接收浏览器事件
  	socket.on('message',function(data){
        console.log(data)
    });
    //浏览器断开触发事件
    socket.on('disconnect',function(){
  		console.log('浏览器关闭');
	});
	//服务器向浏览器派发一个自定义事件  只派发给自己
	socket.emit(自定义事件名,要发送的内容1,要发送的内容2...)
	//服务器接收浏览器派发的自定义事件
	socket.on(自定义事件名,function(data){
  		console.log(data);
	});
	socket.broadcast.emit() 广播给除自己之外的客户端
	io.emit() 派发给双方
})


<script src="socket.io/socket.io.js"></script>
<script>
	//客户端与服务器建立连接
	var socket=io.connect('http://localhost:8080');
	//接收服务端事件
	socket.on('message',function(data){
  		console.log(data);
	});
	//向服务端发送事件
	socket.send(data);
	//服务器断开触发事件
	socket.on('connect',function(){
  		console.log('服务器断开');
	});
	//浏览器接收服务器派发的自定义事件
	socket.on(自定义事件名,function(data){
  		console.log(data)
	});
	//浏览器向服务器派发自定义事件
	socket.emit(自定义事件名,要发送的内容1,要发送的内容2...);
</script>
~~~

### 进程模块

~~~
参考文件：https://www.cnblogs.com/zmxmumu/p/6179503.html

process 主进程
child_process 子进程
cluster 多进程

process.pid 当前主进程的进程号
process.cwd() 执行当前文件的绝对路径
process.argv 当前进程命令行参数数组
process.stdout 指向标准输出
process.stdin 指向标准输入
process.stderr 指向错误输入
process.exit()

on('exit') on('uncaughtException') on('SIGINT')
//主进程退出事件
process.on('exit',function(code){
  code==1 程序异常退出
  code==0 程序正常退出
  console.log(code)
});
//捕捉全局异常 异常发生之前的所有代码都能执行
process.on('uncaughtException',function(err){
  	console.log(err.message)
});
//信号事件 ctrl+c触发
process.on('SIGINT',function(){
  	console.log('您将退出程序...');
  	setTimeOut(function(){
		process.exit()  
	},1000)
});
//查看模拟数据
process.stdout.write(str/buffer);
//清空
process.stdout.clearLine();
//
process.stdout.cursorTo(偏移量==>字节)

============================================
子进程是用来执行程序分配的任务(js文件,命令脚本)
var childProcess=require('child_process');
var worker=childProcess.fork(要执行的js文件);
var worker=childProcess.fork(要执行的js文件);
worker.pid ==>子进程ID 随机分配的
worker.on('exit',function(code){
    code==1 程序异常退出
    code==0 程序正常退出
    console.log(code)
});


function createFork(){
  var worker=childProcess.fork(要执行的文件);
  worker.on('exit',function(code){ 
  	if(code==1){
  		createFork();
	}else{
  		console.log('任务完成')
	}
  }    
}

______________________________

//运行shell脚本==>cmd命令
var worker=childProcess.spawn(command,[arg],opt);
//捕捉标准输出流到控制台
worker.stdout.on('data',function(chunk){
  	console.log(chunk.toString())
});
//捕捉错误输出流到控制台
worker.stderr.on('data',function(chunk){
  	console.log(chunk.toString())
});

//根据命令个数创建子进程,守护子进程
var childProcess=require('child_process');
var arr=['a','b'];
function createFork(file){
  var worker=childProcess.spawn('node',[file],{cwd:'./lib'});
  	worker.stdout.on('data',function(chunk){
  		console.log(chunk.toString())
	});
    worker.stderr.on('data',function(chunk){
  		console.log(chunk.toString())
	});
	worker.on('exit',function(code){ 
      if(code==1){
          createFork(file);
      }else{
          console.log('任务完成')
      }
  	}
}
arr.forEach(function(file){
  	createFork(file)
})

————————————————————————————
可以更高级的指令
childProcess.exec('command+argv',[opt],function(err,stdout,stderr){
  终端有输出值时触发此函数
})

childProcess.exec('node a',{cwd:'./lib'},function(err,stdout,stderr){
  
});

=====================================
cluster 多进程模块 合理利用多核cpu 实现http负载均衡 用来处理服务器并发请求

cluster.fork() 创建子进程

var cluster=require('cluster');
var os=require('os');
if(cluster.isMaster){
	os.cpus().forEach(function(){
       cluster.fork()
    });
    console.log(cluster.workers);//顺序创建
    console.log(Object.keys(cluster.workers));
    cluster.on('listening',function(worker,address){
  		console.log(worker.id)
  		console.log(address.port)
	})
}else if(cluster.isWorker){
  	console.log('子进程 id'+cluster.worker.id)//随机分配 子进程数据不共享
  	require('http').createServer(function(req,res){
  		res.end('hh');
	})
}

-----------
主进程监听事件 子进程请求时触发
cluster.on('listening',function(worker,address){
  
})

ab.exe 可以对服务器进行压力测试
ab -n 1000 -c 10 localhost:8080
相当于10个人向服务器同事发起请求，并发起了1000次

r语言 可以测试每条进程所分配到的请求数
1.输入r,键入r语言的执行环境
2. df<-read.table(file='server.log',skip=9,header=FALSE)
3.summary(df)
~~~

### express

~~~
Express 是一个完全由路由和中间件构成的web开发框架(非侵入式)
1、下载+引入
	npm init 生成package.json 
	npm install express -S
var express=require('express');
2、实例化
var app=express(); //application应用
3、注册路由 (get,post,all)
app.get('/',function(req,res,next){ 
  res.end('hello /');
});
app.get('/user',function(req,res){ //处理器函数
  res.end('hello user');
});
app.get('/pwd',function(req,res,next){ 
  next();// 移交控制权给下一个处理器函数或下一个同名路由
  //next('route')==>跳过当前处理器函数，直接将控制权移交给下一个同名路由
},function(req,res){
  res.send('hello2')
},function(req,res){
  res.send('hello3')
});
//  /ab?cd ==>匹配b 0-1 
	/ab+cd ==>匹配b 1-多
	/ab*cd ==>匹配ab开头 cd结尾的路径
	'*' ==> 匹配所有路径
	/a/ ==>匹配路径中含有a的字符
    
	'/user/:name/:pwd'==>加冒号 2级路径 可改
	路由路径参数 ==> req.params
app.all()==>匹配所有方法
app.all()是一个特殊的路由方法,没有任何HTTP方法与其对应,它的作用是对于一个路径上的所有请求加载中间件(函数)
4、监听端口号
var server=app.listen(8899,function(){
  console.log(server.address().port)
});

路由(Routing)是有一个URL(或者叫服务端路径)和一个特定的http方法(get post等)组成的，涉及到应用如何响应客户端对某个网站节点(请求路径)的访问，它的结构如下： app.METHOD(path, [callback...], callback)， app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。

如何响应:当路由匹配时会执行回调函数,对客户端做出响应
路由匹配:
	1、客户端的路径===服务器的路径
	2、客户端的请求方式===服务器的方式
	
app.get('/src/:name',function(req,res,next){ 
	console.log(req.url) //整体路径
	console.log(req.path) //代表路径的部分
	console.log(req.query) //?后面的地址栏参数
	console.log(req.params); //冒号后面的
	res.status(404) //设置响应状态码
	res.setHeader('content-type','text/plain;charset=utf-8')
	res.writeHead(200,{
  'content-type':'text/plain;charset=utf-8'
})
	res.header('content-type','text/plain');//独有 可以多次设置
	//res.status(404).res.end('hello') 可以链式调用
  	res.end('hello');
  	
  	res.download() //提示下载文件
  	res.json() //发送一个JSON格式的响应
  	res.jsonp() //发送一个JSONP的JSON格式的响应
  	res.redirect() //重定向请求
  	res.render() //渲染视图模板
  	res.send() //发送各种类型的响应 如果传数值代表打印状态码
  	res.sendStatus() //设置响应状态码,并将其以字符串格式作为响应体的一部分发送
  	//res.sendFile(文件的绝对路径) //以八位字节流的形式发送文件
});

app.route(服务器端路径).method1(ck).method2(ck);
创建由路径的[链式]路由句柄,由于路径在一个地方指定,有助于创建模块化路由,减少代码冗余和拼写错误
定义一个路径,拆分多种请求方式

第一种方法
app.all('/getUser',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  next();
});
app.route('/getUser').get().post();
app.listen(8899);

第二种方法 
express.Router() 创建模块化、可挂载的路由
var express=require('express');
var app=express();
var router=express.Router();
router.get('/src',function(req,res){
  res.end('src')
});
//必须挂载至应用
app.use([虚拟路径],router)
app.listen(8899)


===========================================
中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

中间件的功能包括：

执行任何代码。
修改请求和响应对象。
终结请求-响应循环。
调用堆栈中的下一个中间件。
如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。

Express 应用可使用如下几种中间件：

应用级中间件
路由级中间件
错误处理中间件
内置中间件
第三方中间件
使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。

应用级中间件
应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。例如：
var app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求 (一级路径) 都会执行它
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});

路由级中间件
路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。

var router = express.Router();
路由级使用 router.use() 或 router.VERB() 加载。

上述在应用级创建的中间件系统，可通过如下代码改写为路由级：

var app = express();
var router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/user/:id', function (req, res, next) {
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0) next('route');
  // 负责将控制权交给栈中下一个中间件
  else next(); //
}, function (req, res, next) {
  // 渲染常规页面
  res.render('regular');
});

// 处理 /user/:id， 渲染一个特殊页面
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special');
});

// 将路由挂载至应用
app.use('/', router);

错误处理中间件
错误处理中间件有 4 个参数，定义错误处理中间件时必须使用这 4 个参数。即使不需要 next 对象，也必须在签名中声明它，否则中间件会被识别为一个常规中间件，不能处理错误。

错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下： (err, req, res, next)。

//当请求未注册路由时,该中间件会被执行 放在注册路由最下方
app.use(function( req, res, next) {
  res.status(404).send('Not Found!');
});
//当注册的路由中发生未预期异常时该中间件会被调用
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
---------------------------------------------
完整版错误处理中间件
app.use(function( req, res, next) {
	var err=new Error('页面飞到外太空!');
	err.status=404;
  	next(err);
  	//将控制权交给下一个错误处理中间件
});
app.use(function(err, req, res, next) {
	var message=err.status?err.message:'服务器异常,请稍后再试!';
  	res.status(err.status||500).send(message');
});

//错误处理=应用级中间件(未注册路由)+错误处理中间件(路由中的异常);

----------------------
内置中间件
内置中间件
从 4.x 版本开始，, Express 已经不再依赖 Connect 了。除了 express.static, Express 以前内置的中间件现在已经全部单独作为模块安装使用了。请参考 中间件列表。

express.static(root, [options])
express.static 是 Express 唯一内置的中间件。它基于 serve-static，负责在 Express 应用中提托管静态资源。

参数 root 指提供静态资源的根目录。该函数通过req.path和root目录来确定要提供的文件

当找不到文件时,它不是发送404响应,而是调用next()继续下一个中间件

可选的 options 参数拥有如下属性。

属性	描述	类型	缺省值
dotfiles	是否对外输出文件名以点（.）开头的文件。可选值为 “allow”、“deny” 和 “ignore”	String	“ignore”
etag	是否启用 etag 生成	Boolean	true
extensions	设置文件扩展名备份选项	Array	[]
index	发送目录索引文件，设置为 false 禁用目录索引。	Mixed	“index.html”
lastModified	设置 Last-Modified 头为文件在操作系统上的最后修改日期。可能值为 true 或 false。	Boolean	true
maxAge	以毫秒或者其字符串格式设置 Cache-Control 头的 max-age 属性。	Number	0
redirect	当路径为目录时，重定向至 “/”。	Boolean	true
setHeaders	设置 HTTP 头以提供文件的函数。	Function	 
下面的例子使用了 express.static 中间件，其中的 options 对象经过了精心的设计。

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));
每个应用可有多个静态目录。

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('files'));

-------------------
第三方中间件 需下载
通过使用第三方中间件从而为 Express 应用增加更多功能。

安装所需功能的 node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载。

bodyParser 中间件用来解析http请求体
bodyParser.urlencoded则用来解析我们通常的form表单提交的数据,当extended为false的时候,键值对中的值就为string或array形式
~~~

### ejs

~~~
EJS是Javascript模板库,用来从JSON数据中生成HTML字符串

js渲染
//客户端向服务器发起文件请求(html css js) ==>服务器返回文件==>客户端解析文件标签==>客户端发起ajax请求==>服务器返回json==>客户端接收渲染

ejs
//客户端向服务器发送请求==>服务器返回文件+json数据==>客户端渲染

1、下载+引入 ejs  npm install ejs -S   
var express=require('express');
var path=require('path');
var app=express();
//统一设置模板引擎路径
app.set('views',path.resolve('view'));
//统一设置模板引擎的类型(加后缀名)
app.set('view engine','ejs');
app.get('/',function(req,res){
  	res.render('index');
  	//res.render(path,{可选,传回的数据})默认将 . 解析为views路径
})
app.get('/list',function(req,res){
  	res.render('list');
})

app.locals 将值传递到所渲染的模板引擎中 (共有) 只能通过app.locals.key=val 来进行赋值
res.locals 将值传递到所渲染的模板引擎中 (独属) 还可以通过res.locals={key:val} 来赋值

ejs语法
<% js %> 解析js
<%= data %> 转译输出
<%- 'data' %> 非转译输出
<%# 注释内容 %> 注释 
<%- include('list',{可选,要传递的对象}) %>

//将html转为ejs模板引擎
app.engine('html',require('ejs').renderFile)
~~~

### mysql

~~~
VARCHAR 字符串
INT 整形 不给 默认11位
DATE  年月日
DATETIME 年月日时分秒
id类型 INT  额外 auto_increment 

SQL语句-------------------

增：
insert into 表名(列名，列名，列名) values(列值，列值，列值)，(列值，列值，列值)

删：
delete from 表名 where 条件表达式===>age>10 ===>列名 关系符 值 
多个条件之间已and 连接 条件一 and 条件二

改：
update 表名 set 列名=新值,列名=新值 where 条件表达式

查：
1、查询全部： select * from 表名   *代表全部的列
2、查询某列： select 列名 from 表名
3、按条件查询： select * from 表名 where 条件表达式 and 条2
4、模糊查询：
	1) select * from 表名 where 列名 like "%val%" 查询带val的信息
	2) select * from 表名 where 列名 like "val%" 查询以val开头的信息
	3) select * from 表名 where 列名 like "%val" 查询以val结尾的信息
5、限制条数查询
	select * from 表名 limit 开始下标(0),查询长度 
	
	
===============================================
1、下载+引入mysql    npm install mysql -S
var mysql=require('mysql');
2、创建连接对象
var options={
  protocol:'http', ==> 默认 固定  协议
  host:'localhost', ==> 默认 固定  域名
  port:3306, ==> 默认 固定 端口号 
  user:'root', ==> 必选  用户
  password:'80645885', ==> string  密码
  database:'1606lf' ==> 哪个数据库
}
var con=mysql.createConnection(options);
3、连接数据库
con.connect(function(err){
  	if(err){
  		throw err;
	}
});
4、操作数据表
con.query(sql语句,[arr可选,当sql语句中出现问号时使用，每一项匹配每一项问号的值],function(err,result,filed){
  	//err 错误对象
  	//result 返回的结果集
  	5、与数据库断开连接
  	con.end()
})



var options={
  protocol:'http', ==> 默认 固定  协议
  host:'localhost', ==> 默认 固定  域名
  port:3306, ==> 默认 固定 端口号 
  user:'root', ==> 必选  用户
  password:'80645885', ==> string  密码
  database:'1606lf', ==> 哪个数据库
  connectionLimit:10 ===> 连接对象的个数 默认为10
}
//创建连接池并且预先放入一定数量的连接对象
var pool=mysql.createPool(obj)
//从连接池中取出连接对象
pool.getConnection(function(err,con){
  	if(err){
  		return res.send(err.message);
	};
	//利用连接对象操作数据表
	con.query(sql,function(err,result){
  		if(err){
  			return res.send(err.message);
  		};
  		//将连接对象归还给连接池,以供下一次请求继续使用(释放连接对象)
  		con.release();
  		res.end();
	})
})

连接池基本的思想是在系统初始化的时候,将数据库连接作为对象储存在内存中,当用户需要访问数据库时,并非建立一个新的连接,而是从连接池中取出一个已建立的空闲连接对象。使用完毕后,用户也并非将连接关闭,而是将连接放回到连接池中,以供下一个请求访问使用。
~~~

### JSONP

~~~
同源策略:同协议 同域名 同端口
解决：jsonp
原理:利用script标签的src属性无跨域限制
?callback=getData
步骤:
	1、动态创建script标签
	2、指定src属性为某衣服武器地址,且src属性值+?callback=函数名
	3、将script标签追加到页面
	4、此时后台会提取去函数名并包裹数据返回,格式为:fn(data),所以要定义一个名为fn的函数接收后台响应值

实现跨域访问
res.jsonp();

jquery跨域方式 $.ajax $.getJSON
$.ajax 的dataType 要设置成jsonp 会检索url 如果有?callback=? 则会把?替换成一个随机生成的戳 没有回默认加上?callback=? 在进行替换
jsonp 属性默认为callback 可以更改
后台 cbName=req.url.solit('callback=')[1].split('&_=')[0];

$.getJSON(服务器地址?callback=?,function(data){
  	console.log(data);
})
~~~

express应用生成器

~~~	
1、npm install express-generator -g
2、express 文件夹名称
~~~

