#                js

全栈   全端  pc端  移动端 

由布兰登艾奇发明        像java      ECMA   欧洲计算机制造商协会

1.ECMAscript       浏览器提供  2.BOM     3.DOM  

作用; 写网页的动态效果   写网页的游戏   使用cookie  session    实现交互  发送表单from 发送ajax 

ES5       ES6（包含2015 2016）      ES2017  15年变化 每年都以年份发布 

基于事件 驱动的解释性、松散性语言  script标签引入js  中间不写代码   ***src***        url   href4    重定向  超链接引入 u

# 				总结

```
基于事件和对象驱动的解释性 松散型语言
1.引入方式 1.外链  2.内嵌  3.重定向

2.测试方式   1.alert()  2.console.log()   3.document.write()

3.组成部分 
1.ECMAscript    基础语法 
2.BOM  浏览器对象模型
3.DOM  文档对象模型               浏览器厂商发行   
4.变量   就是内存的一块地址单元，为了存储数据
1.定义 先声明再给赋值   直接复制  var nub,nub1; nub=200;   var nub=200,nub1='123'; const PI=3.14;
	2.关键字    var  let  const 声明直接复制
	3.命名方式   只能数字、字母、下划线、$符号命名 ，  数字不能开头 ，不能以关键字或者保留字命名
				1.用首字母大写 ，
				2.驼峰命名 ，
				3.严格区分大小写， 
				4.有意义
	4.变量的存储  栈区  可以存储热河数据类型
	5.数据类型
	1.基础  
	Number 
		0b/0B   0o/0O   0x/0X
		NaN   not a number
	String  
		''
		""
		``
		单引号不能嵌套单引号
		\n  \f  \t  \r  \v
	Boolean 
		1.true  2.false
	null 
		2.空对象
	undefined  
		1.一个变量，只声明不赋值， 默认值
		2.一个对象没有某个属性  这个属性
		3.数组里没有附某个下标的值
		4.函数参数不传值  默认
		5.函数返回值  默认返回
	symbol
	2.引用 
	  1.数组 array 
    2.函数 function 
    3.对象 object
    3.运算符
    1.算术  
	1.+任何类型和字符串相加表示链接，相加变成字符串
	2.取余 不对小数取余数
	3.++  --   分先后，在前和在后不同   如果存在赋值的情况 +在前 先加后赋值  反之相反   。但不论在前还是后 这个运算的变量都会+1
	
2.逻辑      结果不一定 是boolean类型值  只要运算停留在什么位置 结果就是什么。 但是&&，两边都的满足 ||两边满足一个 ，只要运算有这				个结果立即停止运行
              true&&1  //1
              true||1  //true
              null&&false  //null
              1&&2   //2
	&&   ||   ! （一定是boolean类型）  !!1  boolean()
3.比较
  字符比较比较ascii码值的大小
  undefined==null；为真
  ==    ===    全等需要比较类型
4.一元 三元 特殊
		1.new 用来创建对象
		2.delete 用来删除对象的属性
		3.typeof 用来检测基础数据类型
		4.var a=表达式? a:b   主要用来赋值
		5.instanceof   用来检测某个对象是否是某个构造函数的实例
5.扩展
		...
6.赋值
4.流程控制
1.概念 当满足某个条件按照一定顺序执行代码
2.a.顺序  b.条件 if switch（通常用来判断单个值）c.循环 1.for 2.while 3.do while (循环次数不确定的情况下)
1.声明方式  1.var arr=[]   2.var arr=new Array();  3.arr.length 数组长度
2.访问访问方式设置方式
        1.arr[1]  2.arr[1]=123;  3.arr['1']   4.arr['length']  5.arr.length
3.数组遍历  1.for  2.for in
4.二维数组
一维数组的值都是数组的时候
1.循环遍历 for  for
5.数组  
  function
  var fun=function(){}
  var fun=new Function(){}
  1.函数的调用 一个函数如果不调用 永远不执行  
        1.函数名字或者变量名字()
        2.函数的自运行(function(){})()
  2.函数的参数
	1.形式参数   函数在定义时的参数
	2.实际参数   函数在运行时的参数
	3.形参可以和实参的个数不同 如果一个形参没有被传参，默认传递undefined，如果一个实际参数没有相应的参数接收，剋提使用arguments，会默认接收所有传递的实际参数
	4.函数的形参可以接收任何类型的数据      引用类型 基础数据类型   相当于定义的局部变量  
	>函数的参数就是封装的接口
	5.当函数的参数传递的是函数的时候，这个函数就是回调函数
		*map filter foreach
		*需要处理的事情由回调函数处理
	例如 arr=[1,2,2];
	arr.forEach(function(value,index){
      //在这定义要做的事情
	})
	3.函数的返回值
		*任何函数在运行结束后都会返回一个值，默认undefined
		*函数只能有一个返回值  但是可以有多条返回语句
		*函数一旦返回立即停止运行
		*fun()  这是一个表达式 ，表达式的值是函数的返回值
		*函数什么时候需要返回 ？  当我们需要用到内部的局部变量时，我们可以将变量的值返回
		例如 var sum=function(a,b){
          var he=a+b;
          return he;
		}
		var num=sum(1,2)+123;
	4.函数的作用域和作用域链
    	1.作用域指的是变量或者函数在某个范围有意义
    	2.作用域链 当一个函数嵌套另一个函数，作用域发生嵌套  在一个函数运行的时候会自动创建一个集合，来保存可见范围内的可见变量。
    	这个集合就是作用域链
    5.环境
    	1.宿主环境 （浏览器）
    	2.运行环境
    		1.全局环境 widow
    		2.局部环境 函数环境
```

****

****	

****

alert()  弹出窗口    

外部  内部  重定向

调试  bug  1.alert(); 弹出窗口     2.console.log(); 控制台输出

# javascript

## js是什么？

> js是一种基于事件和对象驱动的一种解释性(浏览器解释执行)、松散型的语言    var nub; 万能



>一切皆对象

## 变量 常量

> 变量  常量 是计算机内存的一块地址单元
>
> var num;     num=200;  申明比变量      let   目前与var 一样     不能声明一样的两个变量     
>
> 一个等号是赋值  
>
> 一旦有错 停止运行 
>
> 运行顺序从上往下
>
> 常量  const pi=3.14;   一旦声明不能改变

## 命名规范

> 1.变量的命名要有意义
>
> 2.不能以数字开头，可以用数字，字母，下划线，$符号构成
>
> 3.不能以关键字或者是保留字构成
>
> 4.以首字母大写或者是以驼峰命名法命名
>
> 5.严格区分大小写

## 数据类型

## 

### 1.基础数据类型  Number string boolean  null               undefined  symbol 

1.number     数值类型  var nub=0x(表示16进制)   var nub=0o(表示8进制)  var nub=0b(2进制)

2.string     字符串           " "     ' '         `` var nub='uek';    \n换行   \r 回车   \t制表符   \f换页   \v垂直制表符   \表示转义字符

3.boolean   true  false 

4.null  空 占位符    

5.undefined  表示未定义   1.变量只声明不赋值   2.对象没有某一个属性  3.函数默认返回值  4.数组某一个位置没有值

**undefined==null  为真**

6.symbol   表示不重复的值   **ES6新增**

### 2.引用数据类型   代表性  ( 函数function  对象object   数组array )



## 

typeof()  判断数据类型 只能用来检测基础数据类型	

number  string   boolean  object    

 表达式=一切有值的东西都叫表达式  

  **typeof(null);  检测出来是object     typeof 1;   加空格使用**  

# 运算符

### 算术运算符   逻辑运算符  赋值运算符   比较运算符   三元运算符   一元运算符     特殊运算符  扩展运算符

#### 1.算术运算符

+-*/  不适合精确运算  独特的存储的方式决定

取余%   不对小数取余   ‘ ’+‘ ’  字符串连接  任何一种类型和字符串进行相加表示连接    ${ }

单引号和双引号不能交叉和同类嵌套                        **``  template    模板字符串        ${}**       

++  --   一元运算符       nub++   ==   nub=nub+1    ++nub    赋值时有变化

**document.write( ); 写入页面**

**隐式** 算术运算进行运行 调用Number 能转则转

#### 2.逻辑运算符

与或非 

1. .&&（  与 和  且） 

2. ||（或） 

3. ！（取反）     结果一定布尔运算值

   “” 0 null undefined  false   NaN  ( not a number )    假     其余都为真

   真假确定运算停留的地方    求出结果运算立刻停止

#### 3.赋值运算符

nub=nub+100    <==>     nub+=100    

nub=nub-100    <==>     nub-=100 

nub=nub/100    <==>     nub/=100 

nub=nub*100    <==>     nub*=100 

nub=nub%10    <==>     nub%=10 

​       +=   /=  *=    -=   %=     简写

#### 4.比较运算符

  ``>    <       >=    <=  !=   =    ==      ===``

ASCII码   0 :48   A :65   a : 97  

EASCII码       

GB2312码   简体     微软制作  GBK   包含繁体

unicode   uth8  是unicode在网络传播形式

存在转化 console.log(10=="100");  true    console.log(10==="100");   false   数值类型相等 

**null=undefined为真， 特殊情况**

**null=false 为假**

#### 5.三元运算符

目的是为了赋值     ?  :      document.body.scrollTop?   document.body: document.documentElement;

条件     真 赋值:前者  假  赋值:后边       ?      :   

#### 6.扩展运算符

> ...  扩展运算符



> document.write 写入到页面



> ""	 0	 null	 undefined	 false	 NaN 都是假



> new 是用来创建对象的  delete 是用来删除对象的属性 typeof 都属于一元运算符

#### 7.一元运算符

new 是用来创建对象的  delete 是用来删除对象的属性 typeof 判断基础数据类型             都属于一元运算符

## 流程控制

> 按照一定的顺序去执行



> 顺序结构



> 条件结构

1.if(){

}

2.switch(){

​	case 1: ;  break;   运行当前  代码

​	case 2: ;

​	default: ;

}                            判断单个值  有限的值  可以枚举  

​	循环结构			重复执行某一段代码                         

> for(  ;  ; ){
>
> 
>
> ​	} 	
>
> while(){
>
> 布进值
>
> ​	}  	
>
> do{
>
> 布进值   do一定会执行一次 先执行再判断条件
>
> ​	}while()



> for(var i=10;i<=8848;i++)

# 1.数组 array

> 数组就是一系列有直接或者是联系的数据的集合



> arr.length



> 1.var arr=[]   2.var arr=new Array();   Array   js内置函数



> 打擂台法 选择排序

    1.声明方式  1.var arr=[]   2.var arr=new Array();  3.arr.length 数组长度
    2.访问访问方式设置方式
            1.arr[1]  2.arr[1]=123;  3.arr['1']   4.arr['length']  5.arr.length
    3.数组遍历  1.for  2.for in
    4.二维数组
    一维数组的值都是数组的时候
    1.循环遍历 for  for
## 检测

##### **var result=arr instanceof Array;**

##### **constructor   表示数组的结构    Array() **

##### instanceof   用来检测某个对象是否是某个构造函数的实例

> 检测arr是否是数组对象array的实例;

#### arguments接收所有的参数，集合；

**typeof(null);  检测出来是object     typeof 1;   加空格使用** 

# 2.函数 function

> 函数是将实现某一特定功能的代码块封装起来以便重复使用
>
> ##### 函数的定义		 函数的运行		函数的参数问题		函数的返回值		函数的作用域		回调函数		递归函数		闭包	预解析	垃圾处理机制

## 1.函数定义

#### 1.以关键字function的方式定义函数

> funtion  fun(){
>
> }

#### 2.以字面量的方式去定义函数

> var fun=function(){
>
> }

#### 3.   var fun=new Function('字符串的方式');  

## 2.函数参数

传值    传址

##### 栈区（基础数据）   堆区（引用数据 函数 数组 对象     传地址  数据更改   发生改变）

> 写在函数定义时的括号里的参数叫形式参数。
>
> 写在函数调用时的括号里的参数叫实际参数
>
> 形式参数的作用就是用来接收实际参数的 
>
> 形式参数的个数可以不同，形式参数和实际参数对应赋值
>
> 没有传值的参数默认是undefined，
>
> 所有的实际参数会被anguments集合接收

## 3.函数运行

>     function fun(i){
>     ```none
>     	return String(i).length;
>     ```
>     }
>
>     document.write(fun(********));
>
>     匿名函数自运行
>
>     ```CSS
>     (function (){
>     arlet(1)
>     })()
>     ```

## 4.函数的作用域

> 1.js的运行依赖于浏览器       浏览器是js的宿主环境
>
> 2.执行环境       1 全局环境    2局部环境

#### 1.全局环境

> 全局环境指的是window
>
> 定义在全局环境中的变量叫全局变量   拥有全局的作用域 任何位置都可以访问

#### 2.局部环境

> 局部环境指的是  函数
>
> 定义在局部环境中的变量叫局部变量  拥有局部作用域 当前环境访问

### 3.块级作用域

#### 作用域

> 变量在某个范围内有意义称之为作用域
>
> 块级作用域   变量在某个范围内有意义
>
> ###### 作用域链
>
> 一个函数嵌套另外一个函数时，他们的关系会发生嵌套从而产生作用域链
>
> 当函数在运行的时候，会自动的创建一个集合，来保存可见范围内所有的变量，这个集合就是作用域链，

## 5.预解析

1.在程序真正开始运行之前 js会将以var声明的变量和以function关键字声明的函数，提前加载到相对应的环境里面

2.预解析是分块解析的，但是所有的script标签对又是一个整体，已经加载的script内容可以在后边的script里访问

```javascript
console.log(nub)   //undefined
var nub=200;
console.log(nub)   //200
```



## 6.闭包

> **当一个函数，嵌套另外一个函数，在内部函数中使用了外部的局部变量，在外部去访问内部函数的时候，就形成了闭包**
>
> 闭包的作用：保存局部变量

````javascript
function aa(){
  var nub=100;
  function bb(){
    console.log(nub);
  }
  return bb;
}
var fun=aa();
fun();  //200
按照垃圾处理，aa运行结束后后，内部100应该被清除
但是将bb函数返回，在外部调用时，会用到nub局部变量，js将这个变量保留下来
````

## 7.垃圾处理机制

> 1.当一个函数运行结束之后，里边的变量会立刻被销毁
>
> 2.当一个对象不再被引用之后，那么这个对象会在某一个时刻进行删除

## 8.函数的返回值

> 没有定义返回值的时候  默认  undefined	

## 9.递归函数   函数的回调

回调函数：当一个函数作为另外一个函数的参数的时候，这个函数就是回掉函数。

函数自己调用自己就叫递归。  消耗内存

```
阶乘  n！   菲波那锲数  1  2  3  5  8  13.。。。n
```

1.模拟数组的访问  对象的访问

obj['a'] obj[0]

创建数组  

2.递归函数复制数组

一维  brr.push(arr[i]);    一个for 循环

二维     两个for循环  

判断  if    是数组   执行函数  

else 

````js
//                  递归函数复制数组
        function copy(arr,brr){
            for(var i=0;i<arr.length;i++){     //遍历要复制的数组
                if(arr[i] instanceof Array){   //判断arr数组的里的数是否为数组   如果是
                    brr[i]=[];                //设置brr数组的数为空数组
                    copy(arr[i],brr[i])     //执行自身函数进行复制
                }else{          //若arr数组的数不是数组
                    brr.push(arr[i]);    //将arr的值赋值为brr
                }

            }
            return brr;      //  返回复制后的brr
        }
        var arr=[[1,2],[2],5];
        var brr=[];
        console.log(copy(arr,brr));
````



##### 1.深拷贝  数组全部拷贝

##### 2.浅拷贝  拷贝数组的第一层

## 10.函数的重载(js不会)

> 根据函数的参数不同   个数不同来调用不同的函数

## 11.内置顶层函数

1.Number()     

2.String()     

3.Boolean()      

4.parseInt()      

5.parseFloat()      

6.isNan()                   

****

#### 1.Number()

Number() 函数把对象的值转换为数字。

如果参数是 Date 对象，Number() 返回从 1970 年 1 月 1 日至今的毫秒数。

如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。

> 将其他类型转化为数值类型   '123'  null   true   false 
>
> null 转化为0    true为1         false 为0
>
> NAN是Number的特殊值

#### 2.parseInt()

> ##### 主要用于转化字符串      转换能转换的



> 将小数转化成整数
>
> console.log(parseInt("1234abcd,16"))   



> 隐式数据类型
>
> 在进行算数运算时，隐性的调用Nub函数进行尝试转换
>
> null=undefined为真     特殊情况
>
> null==false 为假   特殊情况



# 3.对象 object

将一些具有某些特性的对象的特征抽象起来形成类。类也可以作为对象的判别，也可以创建对象

 **类是对象的抽象  对象是类的实例化**

#### 1.面向对象   js

##### 1.封装  2.继承  3.多态     js的继承方式独特   不说其他两种  

继承：首先的有构造函数（一般首字母大写） 公共        主要在实例化也是 new的时候  obj.____proto____==构造函数.prototype

#####  **每个函数的属性   prototype   它的值是对象    主要用于继承**

Person.prototype.fun=function(){

​	

​	}     

对象可以添加属性   方法

````
new  新对象  发生三件事情 
        1.创建空对象obj  
        2.obj的属性  obj.__proto__=构造函数.prototype
        3.Person.call(obj)   每个函数都有call方法  call改变this指针的指向  第一个参数传谁指向谁  执行函数 后边为参数
                       <==>apply()          与call方法相似    参数必须数组来传


function fun(){
  this.name='123';
}
var obj=new Object();
fun.call(obj);   
console.log(obj);

Person.prototype.__proto__==Object.prototype
Object.prototype.__proto__==null       
 继承链》》  
 var obj=new person();
 obj.__proto__=person.prototype
 person.prototype.__proto__==Object.prototype
 Object.prototype.__proto__==null   

Object 顶层对象
````



面向对象的编程方式

class 类  **类是对象的抽象  对象是类的实例化**

研究的一切事物都是对象

#### 2.面向过程

面向过程的编程方式

****

****

{

键值

name: "lisi",

age: 20,

}>>>对象  对象的值可以任何类型  属性和属性中间用逗号隔开  函数称为方法

js早期没有类的概念   用构造函数创建类  

研究的事物就是对象  和数组类似

#### 1.以json格式去创建对象   原生的json   键值对的形式

var obj={

​		创建对象

​		属性: 属性值;   函数（方法）  属性的值可以是任何数据类型

属性加引号和不加引号的表现方式一样

};

属性访问方法1. obj.name      2.obj['name']

#### 2.构造函数的方式创建对象 

function fun(){

}

fun.prototype={

​	xxx:function(){

​	}

}

var obj=new fun();   var obj=new class();

1.一个对象创建的时候   初始化   

2.**构造函数的作用为了提供对象的初始化**

3.this 指针 指向外部实例化对象  

* ​	this

  谁调用函数 this指向谁    默认widow调用  * 

   new function(){};  构造函数

  ##### 构造函数和普通函数

  ​	*构造函数提供对象的初始化

  ​	*构造函数一般不用定义返回值

  ​	*构造函数内部使用this

  ​	*都是new 构造函数

  ​	*普通函数为了实现某一个具体的功能

#### 3.通过object的方式创建

var obj=new Object();    一般应用于创建空对象    一般不用

任何一个对象都可以看成是object创建的    所有对象都继承object  

## 对象划分

### 1.浏览器对象  （宿主对象）

window

### 2.内置对象

Object  Function Array   String   RegExp  Date   Math  等

方法：1. 数组对象  2.字符串对象  3.数学对象

var arr=[];

arr.push();

##### 

#### console.dir(输出数据的结构);

#####  * 删除对象  将对象赋空  obj=null;       删除对象的属性      delete obj.name;     

var width=document,documentElement.clientWidth;

var height=document,documentElement.clientHeight;









****

****

****

# /*什么  怎么用 返回值 对原字符串 原数组有无影响*/

```css

////数组    基本上都会对原数组发生影响
              /*  var arr=[];
//        1.push()    向数组的末尾添加一个或更多元素，并返回新的长度。
                console.log(arr.push(1,2,3));   //3
                console.log(arr);  //[1,2,3]
//        2.pop()   删除并返回数组的最后一个元素
                console.log(arr.pop());// 3
                console.log(arr);//[1,2]*/

               /* var brr=[];
//        3.unshift()  向数组的开头添加一个或更多元素，并返回新的长度
                console.log(brr.unshift(1,2,3));  //3
                console.log(brr)     //[1,2,3]
//        4.shift()   删除并返回数组的第一个元素
                console.log(brr.shift());   //1
                console.log(brr);  //[2,3]*/
//    1~2 正常的栈操作   3~4 反向的栈操作
//        5.slice()  
//slice() 方法可从已有的数组中返回选定的元素。
//它的两个参数分别指定了片段开始和结束的位置（a,b）。返回的是从a开始到b的不包括b的数组元素。
//如果只有一个参数(a).则代表从a到数组结尾的元素。
//如果参数中出现负数（-a). 则表示相对于数组中最后一个元素相距a的位置。比如（-3）代表倒数第三个元素到末尾
//出现负数就先换算出来，然后按照范围规则找出来
//返回新的数组，不会修改原始数组
           /* var arr=[1,2,3,4,5,6];
            console.log(arr.slice(1,4));    //[2,3,4]
            console.log(arr.slice(2));      //[3,4,5,6]
            console.log(arr.slice(-3));     //[4,5,6]
            console.log(arr.slice(-3,-1));  //[4,5]
            console.log(arr.slice(1,-1));   //[2,3,4,5]*/
//        6.splice()     它会修改原始数组的值    删除元素，并向数组添加新元素   万能的截取
//Array.splice()方法是在数组中插入或者删除元素的通用方法。它会修改原始数组的值，并返回一个删除的数组序列
//splice()的第一个参数指定了插入或删除的起始位置，第二个参数指定了应该从数组中删除的元素的个数   第三个参数添加的元素
//第二个参数省略则默认删到末尾。
               /* var arr=[1,2,3,4,5,6,7,8];
                console.log(arr.splice(1,2));  //[2,3]
                console.log(arr);      //[1,4,5,6,7,8]
                console.log(arr.splice(2));   //[3,4,5,6,7,8]*/
//        7.concat()  合并数组
//Array.concat()方法创建并返回一个新数组，它的元素包括调用concat()的原始数组的元素和concat()的每个参数。
//如果这些参数中的任何一个自身是数组，则连接的是数组的元素，而非数组本身。
//但要注意，concat()不会递归扁平化数组的数组。                   concat()也不会修改调用的数组。
        /*var arr=[1,2,3,4];
        console.log(arr.concat(5,6,7));  //[1,2,3,4,5,6,7]
        console.log(arr);     //[1,2,3,4]
        console.log(arr.concat(['a','b'],[5,6]))  //[1,2,3,4,'a','b',5,6]*/
//        8.join()
//Array.join()方法将数组中所有元素都转化为字符串并连接在一起，返回最后生成的字符串。  对原数组无影响
//可以自己指定分隔的符号，如果不指定，默认使用逗号
        /*var arr=[1,2,3];
        console.log(arr.join('&'));
        console.log(arr);*/
//        9.reverse()
// Array.reverse()方法将数组中的元素颠倒顺序，返回逆序的数组（返回的数组是其本身，原始数组已经改变了）
            /*var arr=[1,2,3];
            arr.reverse();
            console.log(arr);  //[3,2,1]    */
//
//        10.some()
//some() 方法用于检测数组中的元素是否有满足指定条件（函数提供）。
//some() 方法会依次执行数组的每个元素：
//如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
//如果没有满足条件的元素，则返回false。
//注意： some() 不会对空数组进行检测。
//注意： some() 不会改变原始数组。

//检查是否有数组元素大于等于10：

       /* function isBigEnough(element, index, array) {
            return (element >= 10);
        }
        var passed = [2, 5, 8, 1, 4].some(isBigEnough);
        console.log(passed);
        // false
        passed = [12, 5, 8, 1, 4].some(isBigEnough);
        console.log(passed);
        //  true*/
//        11.every()
//every() 方法用于检测数组所有元素是否全部都符合指定条件（通过函数提供）。
//every() 方法使用指定函数检测数组中的所有元素：
//如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
//如果所有元素都满足条件，则返回 true。
//注意： every() 不会对空数组进行检测。
//注意： every() 不会改变原始数组。

//测试是否所有数组元素都大于等于10：

       /* function isBigEnough(element, index, array) {
            return (element >= 10);
        }
        var passed = [12, 5, 8, 130, 44].every(isBigEnough);
        console.log(passed)
        // passed is false
        passed = [12, 54, 18, 130, 44].every(isBigEnough);
        console.log(passed)
        // passed is true*/
//        12.find()
//find() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素。
//find() 方法为数组中的每个元素都调用一次函数执行：
//当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
//如果没有符合条件的元素返回 undefined
//注意: find() 对于空数组，函数是不会执行的。
//注意: find() 并没有改变数组的原始值。

           /* function bigOfNumber(i){
                  return i>=5;
            }
            var nub=[4,2,3,6,7,2,3,5];
            var nub1=nub.find(bigOfNumber);
            console.log(nub1);    //6*/
//        13.findIndex()
//findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
//findIndex() 方法为数组中的每个元素都调用一次函数执行：
//当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
//如果没有符合条件的元素返回 -1
//注意: findIndex() 对于空数组，函数是不会执行的。
//注意: findIndex() 并没有改变数组的原始值。
                /*function bigOfNumber(i){
                    return i>=5;
                }
                var nub=[4,2,3,6,7,2,3,5];
                var nub1=nub.findIndex(bigOfNumber);
                console.log(nub1);   //3*/
//        14.map()     从一个集合到另一个集合的映射 返回什么值形成什么值 value  index    用于对数据的再加工 
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//map() 方法按照原始数组元素顺序依次处理元素。
//注意： map() 不会对空数组进行检测。
//注意： map() 不会改变原始数组。

       /* //将所有的数组元素转换为大写：
        var strings = ["hello", "Array", "WORLD"];
        function makeUpperCase(v)
        {
            return v.toUpperCase();
            //toUpperCase方法返回一个字符串，该字符串中的所有字母都被转换为大写字母。
        }
        var uppers = strings.map(makeUpperCase);
        console.log(uppers);  //["HELLO", "ARRAY", "WORLD"]
        console.log(strings); //["hello", "Array", "WORLD"]    */
//        15.filter()      value index
//filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
//注意： filter() 不会对空数组进行检测。
//注意： filter() 不会改变原始数组。
           /* var arr=[1,2,3,4,5];
            var arr1=arr.filter(function (value) {
                return value>3;
            })
            console.log(arr1);   //[4,5]
            var arr2=arr.filter(function (value) {
                return value<2;
            })
            console.log(arr2);   //[1]*/	
//        16.forEach(value,index)  两个参数 值  下标                    目的为了遍历数组 
//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。  
//注意: forEach() 对于空数组是不会执行回调函数的
            /*var i=[1,2,3,4,5,6,7];
            var sum=0;
            i.forEach(function (t) {
                sum+=t;
            });
            console.log(sum);   //28
            console.log(i);   //[1,2,3,4,5,6,7]*/
//        17.sort()      
//Array.sort()方法将数组中的元素排序并返回排序后的数组。   返回数组地址
//     在原数组上进行排序 ，不生成副本
//当不带参数时，默认按照顺序排序，也就是从小到大。当然，也可以直接给sort加一个比较函数比较
            /*var arr=[9,5,1,18];
            arr.sort();
            console.log(arr);   //[1,18,5,9]   */
/*如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，
说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要）
，以便进行比较。
请注意，上面的代码没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数：*/
           /* var brr=[80,16,50,6,100,1];
           function fun(a,b) {
               return a-b;    //从小到大
           }
           console.log(brr.sort(fun));   //[1,6,16,50,80,100]
           function fun2(a,b){
               return b-a;
           }
           console.log(brr.sort(fun2));  //[100,80,50,16,8,1]       */

/*排序思想应该是类似于冒泡排序思想的，通过前后相邻的两个数进行比较，
例如80与16，这时将80作为方法函数fun(a,b)参数列表中的a，16作为b，
通过语句return a - b;返回一个数值，80-16=64,
 若返回值>0，则表示 a在排序后的序列中出现在 b 之后,所以80会在排序后出现在16之后，
 此时，新的数据序列为16,80,50,6,100,1，再将80作为a，50作为b进行上述的做法，
 第一轮下来，100就会排在最后，又开始新的一轮排序，就是类似于冒泡排序的思想吧。*/
//        18.includes()
//includes() 方法用来判断一个数组是否包含一个指定的值 也判断类型，如果是，酌情返回 true或 false。

            /*var arr=[1,2,3];
            console.log(arr.includes(2));   //true
            console.log(arr.includes(4));   //false*/
////        18
//
//
////        字符串
//        1.charAt()
//charAt方法返回指定索引位置处的字符。如果超出有效范围的索引值返回空字符串。

        /*var str='abcde';
        console.log(str.charAt(2));   //c
        console.log(str.charAt(6));  //*/
//        2.charCodeAt()
//charCodeAt方法返回一个整数，代表指定位置字符的Unicode编码。
//index将被处理字符的从零开始计数的编号。有效值为0到字符串长度减1的数字。
//如果指定位置没有字符，将返回NaN。
            /*var str='abcde';
            console.log(str.charCodeAt(2));   //99
            console.log(str.charCodeAt(6));  //NaN*/
//        3.fromCharCode()
//fromCharCode方法从一些Unicode字符串中返回一个字符串。
//使用语法 String.fromCharCode()。
            /*console.log(String.fromCharCode(66,55,33));*/

//        4.indexOf()
//indexOf方法放回String对象内第一次出现子字符串位置。如果没有找到子字符串，则返回-1。
            /*var str="Hello world, welcome to the universe.";
            var n=str.indexOf("e");
            var n1=str.indexOf("e",5);   由5位置从左向右查找 123...
            var n2=str.indexOf("a");
            console.log(n);   //1
            console.log(n1);  //14
            console.log(n2);   //-1*/
//        5.lastIndexOf()
//lastIndexOf方法返回String对象中字符串最后出现的位置。如果没有匹配到子字符串，则返回-1。
            /*var str="Hello world, welcome to the universe.";
            var n=str.lastIndexOf("e");
            var n1=str.lastIndexOf("e",5);   //由5位置从右向左查找
            var n2=str.lastIndexOf("a");
            console.log(n);   //35
            console.log(n1);  //1
            console.log(n2);   //-1*/
//        6.split()      参数 1.分割符  2.控制数字长度   
//通过将字符串划分成子串，将一个字符串做成一个字符串数组。
            /*var arr="nihao";
            var arr1=arr.split("");
            console.log(arr1);   //["n", "i", "h", "a", "o"]*/
//        7.slice()  提取字符串的一部分，并返回一个新字符串（与 substring 相同）
//返回被操作字符的子字符串，原字符串不变，接受两个参数，字符串的起始位置和结束位置，
//返回的字符串不包含结束位置的字符，第一个参数要小于第二个参数，否则返回"",
//    若只有一个参数，返回起始位置到字符串结尾的所有字符串，若传递的参数为负数，将传入的负值与字符创的长度相加
            /*var a='hello'
            var sub_string1 = a.slice(1);
            console.log(sub_string1);  //ello
            //sub_string1 = "ello"
            var sub_string2 = a.slice(1,4);
            console.log(sub_string2);  //ell
            //sub_string2 = "ell"*/
//        8.substr()
//返回指定位置开始的指定长度的字符串，原字符串不变，若第二个参数缺省就一直截取到字符串结束，
//当传递的参数为负值时，方法会将负的第一个参数与字符串的长度相加，将负的第二个参数转化为0
            /*var s = 'hello world!'
            alert(s.substr(0, 5));//从索引0开始，截取5个字符串，返回hello
            alert(s.substr(7)); //从索引7开始截取，一直到结束，返回orld!
            alert(s.substr(-7,3));//负数与长度相加，即str.substr(5,3),返回 wo
            alert(s.substr(-7,-3));//负数与长度相加，即str.substr(5,0),返回""*/
//        9.substring()     不支持负数  
//当传入的参数是正数时，substring与slice的功能基本相同，
// 唯一的区别是当第一个参数大于第二个参数时，方法将第二个参数作为截取
//的起始位置而将第一个参数作为截取结束的位置，且截取的字符串不包含第一个参数位置对应的值，
//当传入的参数是负值时，该方法会将所有的负值转化为0
        /*var str = "hello world!";
        alert(str.substring(3,7));//返回lo w
        alert(str.substring(3));//返回lo world!
        alert(str.substring(9,5));//返回 wor,即str.substring(5,9),不包含第九项
        alert(str.substring(-7,-3));//负数与长度相加，即str.substring(0,0)返回""
        alert(str.substring(-7,3));//负数与长度相加，即str.substring(0,3)返回hel*/
//        10.concat()
//将一个或多个字符串拼接起来，返回拼接到的新的字符串，原字符串不变

            /*var str1 = "hello ";
            var res = str1.concat(" world","!");
            alert(res);//返回hello world！
            alert(str1);//返回hello*/
//        11.endsWith()
//返回一个值，该值指示字符串或子字符串是否以另一个指定字符串结尾。
//stringObj.endsWith(str, [, position]);
//stringObj
//必需。要搜索的字符串对象。
//str
//必需。搜索字符串。
//position
//可选。字符串对象中要搜索的以 0 开头的第一个字符的位置。
//返回值
//如果以 position 开始的字符串以搜索字符串结尾，endsWith 方法返回 true；否则返回 false。
            /*"abcd".endsWith("cd");   // true
            "abcd".endsWith("e");    // false
*/
//        12.includes()
//返回一个布尔值，该值指示传入字符串是否包含在字符串对象中。
//stringObj.includes(substring [, position]);
//参数
//stringObj
//必需。要测试的字符串对象。
//substring
//必需。要测试的字符串。
//position
//可选。字符串对象中要测试的以 0 开头的第一个字符的位置。
//返回值
//如果传入的字符串包含在字符串对象中，则 includes 方法返回 true；否则返回 false
/*
        // Returns true
        "abcde".includes("cd")
        "abcde".includes("cd", 2)

        // Returns false
        "abcde".includes("CD")
        "abcde".includes("cd", 3)*/
//        13.replace()    查找字符  替换字符   
//使用正则表达式或搜索字符串替换字符串中的文本。
//stringObj. replace(rgExp, replaceText)
//参数
//stringObj
//必需。要执行替换的 String 对象或字符串文本。
//replace 方法不会修改此字符串。相反，此方法的返回值是替换所生成的字符串。
//rgExp
//必需。包含正则表达式模式和适用标志的正则表达式对象的实例。
//也可以是表示正则表达式的 String 对象或字符串文本。
//如果 rgExp 不是正则表达式对象的实例，则将它转换为字符串，并对结果执行精确搜索；
//不会尝试将字符串转换为正则表达式。
//replaceText
//必需。一个 String 对象或字符串文本，其中包含用于替换 stringObj 中 rgExp 的每个成功匹配项的文本
//。在 Internet Explorer 5.5 或更高版本中，replaceText 参数也可以是返回替换文本的函数。

/*下面的示例阐释了如何使用 replace 方法将“the”的所有实例替换为“a”。*/

       /* var s = "the batter hit the ball with the bat";

        // Replace "the" with "a".
        var re = /the/g;  正则
        var result = s.replace(re, "a");
        document.write(result);    // Output: a batter hit a ball with a bat*/
//        14.startsWith()
//返回一个值，该值指示字符串或子字符串是否以另一个指定字符串开头。
//stringObj.startsWith(str, [, position]);
//stringObj
//必需。要搜索的字符串对象。
//str
//必需。搜索字符串。
//position
//可选。字符串对象中要搜索的以 0 开头的第一个字符的位置。
//返回值
//如果以 position 开始的字符串以搜索字符串开头，则 startsWith 方法返回 true；否则返回 false。
           /* "abcd".startsWith("ab"); // true
            "abcd".startsWith("bc"); // false

            "a".startsWith("a");     // true
            "a".endsWith("a");       // true*/

//        15.toLowerCase()
//将字符串中的所有字母字符转换为小写形式。

       /* var str1 = "This is a STRING.";
        var str2 = str1. toLowerCase();
        document.write(str2);   // Output: this is a string.*/
//        16.toUpperCase()
//将字符串中的所有字母字符转换为大写形式。

        /*ar str1 = "This is a STRING.";
        var str2 = str1.toUpperCase();
        document.write(str2);  // Output: THIS IS A STRING.*/

//        17.trim()
//删除元素前置及后缀的所有空格，然后返回结果，原数组不变

            /*var str1 = "      hello world   ";
            var str2 = str1.trim();
            alert(str1);//返回"      hello world   "
            alert(str2);//返回"hello world"*/
//        18.trimLeft()
//trimLeft() 方法从一个字符串的左端移除空白字符。
//        19.trimRight()
//trimLeft() 方法从一个字符串的右端移除空白字符。
////      19
////        数学对象
//
//        1.Math.abs()
// 返回一个数字的绝对值（即该值不考虑数字是为正还是为负）。 例如，-5 的绝对值和 5 的绝对值相同。
//        2.Math.ceil()
//返回大于或等于其数字参数的最小整数。
        /*var i=3.5;
        i=Math.ceil(i);
        console.log(i);*/

//        3.Math.cos()
//返回数的余弦值。
//        4.Math.sin()
//返回数的正弦值
//        5.Math.tan()
//返回数的正切值
//        6.Math.floor()
//返回小于或等于其数值参数的最大整数。
//        7.Math.max()
//返回所提供的一组数值表达式中的较大者。
//        8.Math.min()
//返回所提供的一组数值表达式中的较小者。
//        9.Math.PI()
//Pi. 这是圆的周长与直径的比率。

        /*var radius = 3;
        var area = Math.PI * radius * radius;
        document.write(area); // Output: 28.274333882308138*/
//        10.Math.pow()
//返回基数表达式的指定次幂的值。
//        11.Math.random()
//返回介于 0 和 1 之间的伪随机数。
//        12.Math.round()
//返回所提供的舍入到最近整数的数值表达式。

//        13.Math.sqrt()
//返回一个数的平方根
//        14.Math.trunc()
//    返回数字的整数部分，删除任何小数数字。
```

#####  

### 1.对象的遍历方式

var obj={

}

for(var i in obj){

​	

}

### 2.递归拷贝对象

# 				DOM   BOM 

### 1.BOM浏览器对象模型

****

浏览器   window    1.document 2. location 3.history

BOM包含DOM　　

#### 1.location

****

地址的构成

1.网络传输协议       http://    超文本传输协议       https://     加强版  安全性高

2.底层支持       TCP/IP   7层架构构成  http:最上层

3.域名/主机名/主机地址www.sssss.com:80端口号/aa/aa/index.html（路径）? 浏览器自动忽略(查询字符串)    一般默认	  ？后的东西都是查询字符串

协议  主机名 端口号  路径 查询字符串 锚地址

location.protocol 协议

location.host 主机名加端口号

location.hostname 主机名

location.port 端口号

location.pathname  路径

location.search   查询字符串		

location.hash   锚地址  #隔开  位置的跳转   不能实现动画  瞬间到达位置

location.href  网页的完整地址   可以设置 获取    不是个函数

4.方法

location.reload(boolean); 重新加载  加缓存   不加缓存（true  重新加载所有数据）

location.assign('http://www.baidu.com')    和href功能一样  函数运行 有历史记录

location.replace('http://www.baidu.com')     替换      没有历史记录	

#### 2.history

****

history.length  

1.方法

   1.history.forward()  next  下一个

1. history.back()  prev   上一个

   3.history.go(0)  刷新   



### 2.DOM  文档对象模型     document    主要对元素操作

****

document.URL   输出文档的路径

document.tilte   1.获取文档标题  2.设置文档标题

document.documentElement.clientWidth    浏览器宽度

document.documentElement.clientHeight    浏览器高度

##### 对于元素的获取方法

旧  ：var div=document.getElementsByTagName('div');   获取的是DOM集合   获取标签名的所有元素     能用DOM对象调用

document.getElementsByClassName('class');       IE浏览器没有这个   不支持获取类名的方式     能用DOM对象调用

document.getElementById('id');      不是集合  是元素      不能用DOM对象调用     只能document调用

document.getElementsByName('name');          不能用DOM对象调用    只能document调用  表单name

##### 常用获取对象

新 ：  document.querySelector();      支持任意选择器     只能选一个     可以用forEach()  遍历   和css选择器选择方法类似   能用DOM对象调用

document.querySelectorAll();        全选     能用DOM对象调用

   属性选择器div[aa=bb]        

[...]  扩展运算

### 3.window对象的属性

****

window.alert();

window.prompt();

window.confirm();     与alert类似

window.open();  控制打开窗开的大小等

window.write();

window.screen.width      屏幕的分辨率

window.screen.height    屏幕的分辨率

**window.onload     所有资源加载完毕后执行**

#### 时间函数

##### 1.setInterval()    在一定的时间内重复不断的做某件事情

参数  1.回调函数   2.时间   单位ms    每隔时间执行

创建时间函数

例如：setInterval(function(){

console.log(1);

},1000);

##### 2.clearInterval()

清除时间函数

传入setInterval的id

##### 3.setTimeout()

用法一样      

等一段时间   执行一次函数

##### 4.clearTimeout()

清除 setTimeout

width=div.offsetwidth;    获取宽度

## 事件   初识

****

用户的行为   称为事件      加on     加单个

##### 1.鼠标  

  click 单击  dblclick  双击    mousemove 鼠标移入   鼠标移动时触发的事件 mousedown鼠标上的按钮被按下了 	    mouseup 鼠标按下后，松开时激发的事件    mouseover当鼠标移动到某对象范围的上方时触发的事件    mouseout 当鼠标离开某对象范围时触发的事件

mouseenter  进入   mouseleave  离开

##### 2.键盘    

  keydown  按下  keypress  按住    keyup  抬起    加给document    打印键  非打印键

blur 失去焦点  focus 获取焦点 光标闪动   submit  提交加form  reset  重置 加form  change 改变里面值  失去焦点触发change   用于表单元素

事件是一些特殊的属性或者方法

##         内容     对元素CSS样式的操作    对元素HTML的操作

### 1内容设置操作

##### 1.innerHTML

​	1.可以识别标签

​	2.设置 所有东西重新写

##### 2.innerText

​	1.只能获取文本

​	2.不识别标签

### 2.html属性的操作

class  id  src href     对象.html属性

通过id 或者类名  改变

classname

​	1.classlist.add()  添加  

​	2.classlist.remove()    移除

​	3.classlist.toggle()

1. ```
   myDiv.classList.toggle('myCssClass'); //现在是增加
   myDiv.classList.toggle('myCssClass'); //现在是删除
   ```

    这个方法的作用就是，当myDiv元素上没有这个CSS类时，它就新增这个CSS类；如果myDiv元素已经有了这个CSS类，它就是删除它。就是反转操作。

   4.classList.contains()       检查是否含有某个CSS类

   ```
   myDiv.classList.contains('myCssClass'); //returns true or false	
   ```

   ​

##### 1.自定义属性(非标准)  

 访问方式和标准属性不一样     attributes  保存所有的属性    

访问 obj .getAttribute('自定义属性');     设置  obj .setAttribute('自定义属性','新');

##### 2.标准属性

1.   obj.


1. a.访问 obj .getAttribute()      它只有一个参数——你打算查询的属性的名字

   b.设置  obj .setAttribute('自定义属性','新');

### 3.操作样式 CSS

##### 1.设置    

​	1.obj.style.xxx=' ';     出现在行内

​	2.obj.style.cssText='width: ; 等等 ';

##### 2.获取

​	1.obj.style.样式       只能获取行内样式

​	2.window.getComputedStyle(obj,null).width;         1.div   获取的对象    2.null  固定值      IE6.7.8 不能用  =>  （div.currentStyle.width;）

#### 选项卡

1.获取元素  2.遍历   3.先清除所有   4.加js  

# ****

##### 如果一个块元素不设置宽高 ，默认宽度是父元素的宽度，默认的高度的是内容的高度    可以用此特性代替box-sizing属性  但是获取的宽高是设置的宽高

****

#### 1.获取实际宽高 offset

width=div.offsetWidth;    height=div.offsetHeight;   获取到的数值类型   不包含margin值   

#### 2.获取位置

place=div.offsetLeft;      place=div.offsetTop;     1.如果一个元素不定位  默认依照body定位   2.如果定位依照谁定位  默认依照谁计算

一个元素依照另一个元素定位 padding不影响定位       

##### offsetLeft、offsetTop计算的距离有定位属性的上级元素的距离，如果没有定位属性的上级元素，计算的是距离body的值

 任何一个元素都可以具有滚动条      overflow: scroll;    出现滚动条

#### 3.获取滚动条的高度

​	1.document.body.scrollTop     只在谷歌浏览器适用      可以设置   设置默认值   要看自定义高度 关闭浏览器重新打开  不加单位

​	2.document.documentElement.scrollTop     只在火狐浏览器适用      不加单位

SEO 搜索引擎优化 

window.onscroll=function(){

滚动事件浏览器滚动不断触发onscroll事件

}	

# 节点内容

> html文档中，所有的构成部分都是节点，每一个节点和节点之间的关系构成整个html文档树模型

#### 1.节点的特征

```
nodeName 节点名字
nodeType 节点类型
nodeValue 节点值
```

##### 1、文档节点(document)

```
nodeName:#document      nodeType: 9       nodeValue:null
```



##### 2、文本节点(文本)

```
nodeName:#TEXT       nodeType: 3        nodeValue:文本内容
```



##### 3、元素节点(div)

```
nodeName:大写的标签名       nodeType: 1            nodeValue：null
注意：div.id不是一个节点值
```

##### 4、注释节点(注释)

```
nodeName:#comment      nodeType:8          nodeValue：属性值
```

##### 5、属性节点(属性)

```
nodeName:属性名			nodeType: 2         nodeValue：属性值
```

#### 2.节点之间的关系

##### 1.同辈关系

> console.log(div.previousSibling)           所有节点范围内的上一个节点



> previousElementSibling				上一个元素节点



> console.log(div.nextSibling)			所有节点范围内的下一个节点



> console.log(div.nextElementSlibing)			下一个元素节点

##### 2.父辈关系

> div.childNodes         所有节点



> div.children              所有元素节点



> div.children.length     节点长度

##### 3.子对父辈

 div.parentNode        输出父辈所有节点

div.parentElement      输出

#### 3.节点的创建

```
var newdiv = docment.createElement('div')         只存在于内存里面
var body = document.querySelector('body')		//添加子节点
body.appendChild(newdiv)		//添加一个div

newdiv.id='box'
```

#### 节点的追加

```
let sec = document.querySeletor('section');		//获取section
let a = document.createElement('a')               
let par = sec.parentNode;        //获取父节点
par.inserBefore(a,sec)			//把a放到sec元素之前
```



#### 节点的删除

```
let sec = document.querySeletor('section');
let par =sec.parentNode;
par.removeChild(sec);
用父元素移除子元素
后续处理   sec=null;
```

```
par.replaceChild(a,sec)
替换元素        替换的元素     要被替换的元素
```



#### 节点的复制

```
document.createElement()创建元素
obj.appendChild()  
```

```
var div = document.querySeletor('div');
var clone = div.clonenode(ture)  //写ture会克隆所有子节点
```

# 事件   对象继续   

#### 1.事件源

> 事件发生在谁的身上，谁是事件源

#### 2.事件类型

> 用户行为

#### 3.事件处理程序

> 事件发生后的响应

##### 同一个元素添加多个事件添加属性

obj.addEventListener('添加事件 一般不加on','事件处理函数function(){}',false(固定值 可以不写) );    不会覆盖    IE低版本不支持

obj.attachEvent('on+事件'，'函数名');			IE 低版本添加

##### 事件删除

obj.removeEventListener('移除的事件'，'函数名称');    

obj.detachEvent(' on+事件'，'函数名')       IE  低版本删除

#### 4.事件对象   一般用e来表示 接收

> 事件对象是事件发生的时候的，自动创建的对象的一个对象，用来保存事件发生时候的所有信息  在匿名函数里加实参e  默认第一个参数传递

##### 鼠标  

1. altkey   

2. cancelBubble

3. clientX    clientY      距离浏览器窗口的距离

   1. ```js
      div.onclick=move;
      function move(e){
        this.innerText=`x:${e.clientX},y:${e.clientY}`
      }
      ```

4. ctrlKey

5. detail

6. offsetX    offsetY        距离当前元素(事件源)的距离    

7. pageX     pageY            一般移动端使用    距离body的距离

8. screenX    screenY     距离屏幕的距离

9. shiftKey

10. srcElement

11. target

12. type

13. which

#### e的兼容性处理   IE    window.event

##### 键盘事件

* e.keycode  ascii码值

* e.key     按下的值

* e.type    事件类型

* e.altkey      验证altkey、shiftkey、ctrlkey 有没有被按下

* e.shiftkey

* e.ctrlkey

  * 37:左 38:上  39:右  40: 下     32:空格    13:回车       ascii码值

  获取表单的 值  value    

##### 滚轮事件    mousewheel    

wheelDelta:120     向上     谷歌

wheelDelta:-120     向下

detail   向下 3   向上-3      火狐

e.preventDefault();   阻止默认动作    谷歌  火狐    方法

e.returnValue=false;    IE       属性    阻止默认动作

```js
 var div=document.querySelector('div');
            function wheel(e){    //定义函数  作为参数传入添加的滚轮事件
                var e=e||window.event;    //e做兼容 事件对象做兼容   现在浏览器支持e ，IE低window.event
                if(e.preventDefalt){    //清除浏览器默认的动作   做兼容
                    e.preventDefault();   //谷歌  火狐 支持
                }else{
                    e.returnValue=false;     //IE 低版本 支持
                }

                if(e.wheelDelta==120||e.detail==-3){    //判断 鼠标滚轮移动方向
                    div.style.width=div.offsetWidth+20+'px';   //向上加宽度
                }
                if(e.wheelDelta==-120||e.detail==3){
                    div.style.width=div.offsetWidth-20+'px';   //向下减宽度
                }
            }
//            添加滚轮事件    做兼容 判断浏览器是否支持add
            if(div.attachEvent){
                div.attachEvent('onmousewheel',wheel);
            }else {
                div.addEventListener('mousewheel', wheel);
                div.addEventListener('DOMMouseScroll', wheel);    //
            }
```



##### 

* transitionend       animationend
  * addEventListener('transitionend',function(){},false)
  * addEventListener('animationend',function(){},false)

#### 添加方式

div.attachEvent('onmousewheel',wheel);     IE

div.addEventListener('mousewheel', wheel);    谷歌

 div.addEventListener('DOMMouseScroll', wheel);     火狐

#### 事件流

事件发生的顺序    

#### 1.冒泡性事件流    重点

当一个事件触发的时候，当前元素的父元素乃至整个页面都会以一定的顺序来响应事件，事件响应的顺序叫做事件流

**只要是事件都会冒泡    除了 mouseenter      mouseleave**   

###### 1.阻止事件流

 e.stopPropagation();       阻止事件流   阻止事件传递

```
例如：
son.onclick=function(e){         
	if(e.stopPropagation){
      e.stopPropagation();  //   阻止事件流   阻止传播
       e.preventDefault(); //清除浏览器默认的动作   做兼容
	}
	else{
      e.cancelBubble=true;
      e.returnValue=false; 
	}
    console.log('son冒泡');
};  
```

#### 2.捕获型事件流    了解

+ 从根元素往下执行


+ obj.addEventListener('事件',function(){},true);       true  会被捕获到

#### 3.整个事件流  

+ 先从html向下捕获，再从当前元素向上冒泡

#### 4.事件委托

+ **将子元素的事件委托给父元素**

* 需要做判断 点击的事件是是否是想要的事件

###### 1.新加的元素，需要事件时

###### 2.做事件优化时

###### 3.当使用ajax 的时候 

#### 5.目标事件源： 

- 真正触发事件的元素

```js
document.body.onclick=function(e){
  var obj=e.target;          //目标事件源
  if(obj...){    //判断是否为自己想要的元素   执行
    
  }
}
tagname    大写
nodeName   大写
```

###### 表格：

table-layout: fixed;    固定宽度

border-collapse: collapse;    合并边框

# 事件问题



# 日期对象

格林尼治时间    GMT时间     一段时间有几秒偏差

本初子午线    0度经线

UTC时间     世界协调时     

计算机元时间  1970  1  1  0   0   0   0	   前为负  后为正   

当前时间距离1970的毫秒数

##### 实例化

* var time=new Date()   

* gettime()   当前毫秒数  距离元时间

* getFullYear       getMonth    getDay获取星期1~6 0代表周日   getDate  getHours    getMinutes    getSeconds    GetMilliseconds  

* get  换成   set  设置时间    

* >月 日 年 时 分 秒     
  >
  >随意设置   2017, 12, 12, 12, 12, 12, 12,123    月份0~11   代表1~12

  倒计时 距离2017.12.1.8   天 时 分 秒 

##### cookie        字符串

- 本地保存

- 键值对结构    search  

- 大小   4k

- 同域原则   域名   

- 不能跨浏览器访问 

- 临时型cookie 

  - document.cookie='aa=bb';  可以设置所有cookie    可以访问所有cookie   
    - 浏览器打开  关闭  ->生命周期    

- expirs 有效期      时间cookie        ';expires='+now.toGMTSring();  有效期 

- ````js
  var now=new Date();
  now.setTime(now.getTime()+20*1000);
  document.cookie='aa=bb;expires='+now.toGMTString();
  ````

- setcookie()  设置   有生命周期

- ````js
  //    setcookie();

  //   设置cookie  临时 有生命周期的
  //   键值对        键 key    值value
      function setcookie(key,value,time){
  //        根据有无时间来区分添加的是临时的还是有生命周期的
          if(time){
              var now=new Date();   //创建新对象
              now.setTime(now.getTime()+time*1000);  //设置时间   time*1000转化为秒
              document.cookie=key+'='+value+';expires='+now.toGMTString();  //添加cookie cookie时间
          }else{
              document.cookie=key+'='+value;  //无生命周期 添加cookie
          }
      }

  ````

- ​

- delcookie()    删除

  ````js
  //      delcookie();

  //          删除cookie
  //         cookie过期自动删除
      function delcookie(key){
          var now=new Date();    //创建新对象
          now.setTime(now.getTime()-1);   //设置过期时间
          document.cookie=key+'nullll'+';expires='+now.toGMTString();
      }
  ````

  ​

- getcookie()    获取 

- ````js
  //    getcookie();
  //获取cookie  从键  获取   值

      function getcookie(key){
          var cookies=document.cookie;  //获取所有cookie
          var cool=cookies.split('; '); //将cookie里字符串转化为数组    split分割字符串转化为数组
          var val;   //声明一个变量
          cool.forEach(function (value) {
              var co=value.split('=');    //继续将字符串转化为数组   以=为分割符
              if(co[0]==key){   //判断键值是否为要获取的
                  val=co[1];     // 将值赋值给一个变量
                  return;    //
              }
          })
          return val;
      }

  ````

##### 本地存储   H5新增

1. localStroage      永久存储     locaStroage.setItem('name','xiaosi');设置   removeItem  去除    getItem  获取
2. sessionStroage    会话级存储   （窗口）会话关闭就删除
   * 存储大小5~10MB
   * 同域原则    
   * 不能跨浏览器
   * 以上存储都不安全
   * 拥有相同的函数
   * clear（清空）  getTtem 
   * 只能存储字符串
   * delete  删除
   * ​

database  数据  

数组存储对象

JSON.stringify();    转化为字符串

JSON.parse();     转化为对象  解析



























