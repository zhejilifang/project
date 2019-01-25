~~~
::before   ::after  伪对象选择器
过渡动画{ transition:是一个复合属性
          transition-property 表示参与过度的属性，多个属性用逗号隔开   all为默认值
          transition-duration表示过度动画的持续时长/动画的速度曲线 s  ms 
          transition-timing-function:设置动画过渡类型效果
                                     ease-in先慢后快
                                     ease-out先快后慢
                                     ease-in-out慢快慢（ease）
                                     linear 匀速
                                     ease 默认值（慢快慢）。
           transition：1s 1s  延迟一秒执行动画一秒
鼠标事件：hover  active  visited focus  checked 
transform:skew(45deg) x轴旋转45°transform:skewY(45deg) transform:skew(x，y) 可以填负值
transform:rotate(45deg) 旋转== rotateZ(45deg)  元素默认绕Z轴转
transform:rotate3d(1,1,1,45deg);前三个参数表示旋转的方向，第四个参数为旋转的角度，前三个参数只有0和1，0表示不参与旋转，1表示参与旋转。
transform：scale（2） 宽和高都放大2倍  scale（0）表示隐藏元素 scale（1）保持不变   大于一表示放大  小于一表示缩小 最小为0  不支持%缩放
transform:translate(50px)  位移可以是正负值  可以用% 支持Z轴
scale（） 用于缩放 
transform-style:preserve-3d
perspective:9rem;
transform-origin 设置元素的基准点 top  center  50% 50%
transform:rotate(16000deg) scale(2); 多种变形用空格隔开

所有属性都能参与动画，但并不是所有属性都有动画效果。
~~~

### 12.27

0351-2529422

~~~
自定义字体 又叫(非官方字体/服务器端字体(不需要安装，不受环境影响))
语法：@font-face{
  font-family:"text"; //字体名称
  src:url("../ad.ttf") ,url("../ad.woff"),url("../ad.eot"),url("../ad.svg");
  // url指的是字体上传到服务器	的路径，src指的是服务器接收后存放的位置  解决兼容性
  字体格式：
  ttf  woff   eot   svg 
  为了做到浏览器的兼容性需要上传多种字体格式
  format检测文件格式类型
  1.旋转xyz位移向下
  2.位移向下
  3.y轴旋转
  4.位移向上
  5.透明度变化
~~~

### 12.29

~~~
@keyframes  定义动画   
animation：new  6s  linear  2s  
animation-name:new 表示调用动画的名称
animation-duration:动画的持续时间
animation-timing-function:动画类型
animation-delay:动画的延迟
animation-iteration-count:动画执行的次数
infinite表示无限循环
animation-direction:动画执行的放向
normal（正常方向）
alternate（正反交替）
animation-fill-mode:动画结束时的停留状态
forwards表示结束时的状态
backforwards表示开始时的状态
none默认值
both开始或结束时的状态
animation-play-state:动画是否暂停
paused暂停
running运行

animation-name的默认值为none，表示取消动画

@keyframes +动画名称
0%{}  开始帧  ==from
100%{}结束帧  ==to
关键帧动画的单位必须是百分比
~~~

5075977218436

~~~
backface-visibility:hidden属性的作用是隐藏元素背面解决动画的闪屏问题,其默认值是visible。
~~~

### 1.2

~~~
animate。css库
shake(抖动) flash（闪烁）bounce（弹跳）翻转（flip） 旋转（rotateIn/rotateOut）淡入淡出（fadeIn）
使用时元素必须添加animated类
display：none  不支持动画
~~~

### 1.3

### flex布局

~~~
flex布局 弹性盒子布局
新弹性盒；display：flex;  老弹性盒：display:box;
子元素就会作为弹性盒进行伸缩，子元素默认水平排列，即使有溢出也#不会换行#
只能控制直属子元素
float/clear/vertical-align  失效
justify-content:设置检索子元素主轴的对齐方式
flex-start;顶对其
content;居中对齐
flex-end;末对其
display: inline-flex;将对象作为内联块级弹性伸缩盒显示
弹性盒为块元素
弹性盒会默认继承父元素的高度
~~~

### flex-direction

flex-direction:决定主轴的方向

~~~
row(默认值)：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上端。
column-reverse：主轴为垂直方向，起点在下沿。
~~~

justify-content 元素在主轴方向上的对齐方式

~~~
flex-start(默认值):起点对齐
flex-end:末端对其
center:居中
space-between:两端对齐，项目之间的间隔都相等。
space-around:每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
~~~

flex-wrap:决定元素是否换行显示

~~~
nowrap
wrap
wrap-reverse
~~~

align-items定义了元素在侧轴上的对齐方式

~~~
flex-start:交叉轴的起点对齐。
flex-end:交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline:项目在第一行文字的基线对齐。
stretch（默认值）:如果项目未设置高度或设为auto，将占满整个容器的高度
~~~

flex-flow

~~~
flex-direction和flex-wrap的混合属性
设置子元素书否换行以及排列方式
~~~

align-content

~~~
设置元素多根轴线的对齐方式（如果只有一根轴线则不会生效）
~~~

order用于设置子元素显示次序值越大显示越靠后，默认值为0，可以识别负值

子项目

~~~
flex:1
grow 子项目分配父容器的剩余空间
basis 设置元素的基准值
shrink 有溢出内容时的收缩比例
auto  表示 1 1 auto
align-self覆盖父元素align-items的属性设置自己在侧轴上独特的对齐方式
~~~

overflow-y:scroll;

渐变

~~~
background:-webkit-gradient(linear,0%,0%,0%,90%,from(red),to(blue));淘汰

background:-webkit-linear-gradient(left,#ccc 0%,#fff 10%)
~~~

字间距

letter-spacing

### 鼠标样式

~~~
cursor：pointer  点击状态
        move  移动状态
        wait  加载状态
~~~

多行文本省略

~~~
display:-webkit-box;需要用老版本的弹性盒子实现
-webkit-box-orient:vertical;===flex-direction:column;
word-break:break-all;强制文本换行显示
-webkit-line-clamp:2;最多显示n行
overflow:hidden; 非visible(溢出可见)
text-overflow:ellipsis;  clip(切除)

单行文本省略

%text{
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
~~~

text-indent    首行缩进

border-image:用于设置边框图像

~~~
border-image-source:url()
border-image-slice切片大小
border-image-outset偏移量
border-image-repeat:repeat round stretch
~~~

background-clip:content-box;内容向外裁剪

​                               padding-box

​                                border-box

background-origin:border-box;背景图绘制的起点content-box

## 移动端兼容问题

非可点击元素设置cursor：pointer；

背景图片模糊：使用2倍的背景图代替img标签

background：contain；

输入框在最底部时点击软键盘时遮挡

content=“emall=no”

content=“telephone=no” 

touch-callout:none; 禁止系统的默认菜单弹出

baceface-visibility:hidden;解决闪屏问题

~~~
<input autocapitalize="off" autocorrect="off">
~~~

## input的placeholder会出现文本位置偏上的情况

~~~
line-height:normal;
~~~

android下取消输入语音按钮

~~~
input：：-webkit-input-speech-button{display:none}
~~~

css动画页面闪白卡顿

~~~
解决方法:开启硬件加速
尽可能使用合成属性
~~~

fixed定位缺陷

~~~
通过iscroll插件解决这个问题
iOS不支持Android比iOS好
~~~

### 阻止旋转屏幕时字体大小改变

~~~
html,bodt,form,...{-webkit-text-size-adjust:none(100%);}
~~~

ios6下伪类hover

~~~
给元素添加(add)class   .box:hover
~~~

在移动端修改难看的点击高亮效果

~~~
-webkit-tap-highlight-color:rgba(0,0,0,0);
~~~

~~~
a href="tel打电话    mailto发邮件    sms发短信"
~~~

防止滚动条卡顿,慢

~~~
overflow-scrolling:touch
~~~

#### appearance：none  取消表单元素默认样式

retina屏的1px边框

~~~
border-width:thin;
~~~

强制竖屏

~~~
content=“portrait”强制竖屏 landscape强制横屏
~~~

## 媒体查询（响应式布局）

核心：media   query

概念：在不同的临界点下设置不同的样式内容

@media   媒介类型（screen所有浏览器）   关键词（and not(非某种设备) only（仅有的设备） ）   （查询条件）{}

TV print handheld(手持设备) all(所有设备)print()

查询条件

多个查询条件用and连接

缺点：加大页面代码的加载量，加载速度较慢

媒体类型和关键词可以一起省略  all市默认值

~~~
<meta name="viewport" content="width=device-width,initial..."/>
媒体查询必须结合<meta>使用
媒体查询可以检测到用户的手持方向
orientation:landscape(横屏)
orientation:portrait(竖屏)
aspect-ratio(检测浏览器可视宽高的比例):320/480;

<link rel="stylesheet" href="css/check.css" media="screen and (min-width:768px)"> 调用条件

~~~

thick边框粗线

text-transform:capitalize;英文首字母大写

​                           :uppercase 全部大写

~~~
article{
  column-count:3;(用于实现多栏布局的栏目数，正整数)
  column-width:200px;(表示每一栏的宽度)
  columns是一个符合属性:
         3   300px  表示最多显示三栏，每栏300px的宽度
  多栏布局中元素一定要有宽度，其中width表示所有栏目的总宽度
  column-gap:设置栏间距
  多栏布局的宽度始终相等，只适合做文章排版，不适合做网站，height要自适应
  column-rule:5px solid #eee;(用于实现栏目之间的分割线)
  column-rule-width    column-rule-style 
  column-rule-color
  length  thin  thick medium中等线
  column-rule-style有9个值none不算
  column-span:all/none(表示是否横跨所有列)
}
div{
  @include num(2rem,2rem);
  background:url(../xxx.png);
  overflow:hidden(非visible)；
  resize:both;vertical;horizontal;none;
  resize:用户以拖动的形式改变原有尺寸的大小
}

<input type="file" accept="image/$.png">文件域  accept(限定文件上传的格式)
 accept="image/*"限定只能上传图片格式
 format 用于检测格式类型
 
 
 <link rel="shortcut icon" href="img/logo-tianmao.jpg" />
 实现苹果自定义图片	
~~~

~~~
outline:30px solid #eee;不站位  不能单独设置某一方向的轮廓
outline-offset:50px;设置轮廓线的偏移量（可以为负值）
~~~

~~~
input 中disabled禁用状态背景成灰色 readonly只读状态
~~~

### bootstarp

开源的第三方UI框架   由三部分构成 HTML  css  js

~~~
jQuery 主要是解决兼容问题

bootstarp专注于移动端  移动优先
bootstarp中全局*{font-size:14px;}
bootstarp的核心是组件

~~~

### 按钮

~~~
按钮样式名.btn
.btn           基础按钮
.btn-default   默认按钮
.btn-primary   主要按钮
.btn-success   成功按钮
.btn-warning   警告按钮
.btn-info      信息按钮
.btn-danger    危险按钮
.btn-link      链接按钮
.btn-inverse   逆操作

btn-lg 大型按钮   btn-sm 小型按钮 btn-xs 迷你按钮
~~~

### nav

~~~
nav是创建导航的类

.nav-list 列表导航
.nav-tabs 切换性导航，标签页导航
.nav-pills 胶囊试导航
.nav-stacked 叠放式导航
     .dropdown给li添加下拉样式
     .breadcrumb 面包屑导航
     
~~~

### 文本

~~~

~~~

表单用于数据的交互

表格中th是标题单元格  可以自动加粗和居中

border-collapse:collapsing; 合并表格边框线

cellspace单元格间距

1像素表格的写法

### 表格

~~~
.table 基础表格
~~~



~~~
通过用tr的bgcolor覆盖table的bgcolor  table上设置cellspacing
align="center"在table上会让table居中
align="center"在tr上会让文本居中

~~~

无样式列表

unstyled 去除项目列表符号

### 栅格系统

~~~
栅格系统中嵌套的列要满足12列
row要清除margin否则会出现横滚
col-lg-  表示超大屏1200px以上
col-md-  中屏992-1200px
col-sm-  小屏768-992px
col-xs-  小屏768px以下移动端

col-md-offset- 指偏移量 占位

被嵌套的列不一定是12
~~~

~~~
content:"字符"
        none 取消
        attr(class)添加属性的属性值
        url()图片
~~~

## 高级H5

~~~
width = device-width
宽度 = 设备宽
initial-scale = 1.0
minimum-scale = 1.0
maximum-scale = 1.0
user-scalable = no //默认yes

内核
-webkit- 谷歌
-ms- IE
-moz- 火狐

PPI : 屏幕显示密度
DPR ：设备物理像素和逻辑像素的对应关系，即物理像素/逻辑像素
Resolution : 分辨率

http: https: ssh: 网络协议 protocol
host 域名
port 端口
pathname 文件路径

方法返回元素的大小及其相对于视口的位置
Dom元素.getBoundingClientRect() 返回值是一个对象

window.navigator.appVersion 获取当前浏览器版本信息
window.devicePixelRatio 获取当前设备的dpr


iphone 4/5  320
iphone 6/7/8  375
iphone 6/7/8p 414

viewport相关的单位有四个，分别是vw vh vmin vmax

vw：是Viewport's width的简写,1vw等于window.innerWidth的1%
vh：和vw类似，是Viewport's height的简写，1vh等于window.innerHeihgt的1%
vmin：vmin的值是当前vw和vh中较小的值
vmax：vmax的值是当前vw和vh中较大的值

vmin和vmax是根据Viewport中长度偏大的那个维度值计算出来的，如果window.innerHeight > window.innerWidth则vmin取百分之一的window.innerWidth，vmax取百分之一的window.innerHeight计算
~~~

### 响应式

meida 媒体查询 推荐使用

onresize  js的方法

~~~
/根目录
./ 当前
../ 上级目录

calc()可以动态计算

@media关键字
  and 和
  only 唯一
  not 除了之外
~~~

sass

%名字{

}

@extend 继承和占位符

@mixin 名字($a:30px){}         @include 混合宏

$变量

声明函数

@function name(){

​	@return	

}

调用函数

name()

for循环

~~~
@for 变量 from to end+1{
	循环体
}
@for 变量 from strat through end{
	循环体
}
eg:
八个div
@for $i from to 9{
	div:nth-child(#{$i}){	background:rgba(255,$i*20,$i*20,$i*0.1)
}
}
~~~

$.ajax({

json 

jsoncallback

})

查看电脑IP地址



ipconfig   ipv4



~~~
js  
classList  返回类名集合
classList.add(要添加的类名)
removeClass()删除
contains()是否含有
hasClass()检测
~~~

visibility:hidden  //占位隐藏  余姚设置动画的元素要设置

pointer-events:none||auto(默认值);穿透一切事件

~~~
transform:translate() scale() rotate() skew();
上左负，右下正
~~~

steps() 定义的是分帧动画

getComputedStyle(dom节点)

~~~
粘性定位
position:sticky;
top:0;
left:0;
~~~

Object.assign({},def,opt)===$.extend()

jquery 相对大一些 兼容了各个浏览器

zepto.js 类似于jQuery 轻量级 适用于移动端 增加了移动端事件

​	手指系列事件:

​	tap:移动端点击事件  click有300ms 延迟

​	longTap:长按事件

### Swiper事件

~~~
swipe 滑动事件
swipeLeft 左滑事件
swipeRight 右滑事件
swipeUp 上滑事件
swipeDown 下滑事件
longTap 长按事件
tap 移动端点击事件
doubleTap 双击事件

requestAnimationFrame()
浏览器专门用来做动画的API，当页面不处于激活状态时会暂停动画，减少了浏览器cpu消耗
接收一个回调函数
返回值是requseId 数字

cancelAnimationFrame(requseId)  取消动画
~~~

## touch事件

~~~
touchstart 手指摁下
touchmove  移动
可以获取手指位置信息  e.touches[0]  类数组
touchend  离开
touchcancel 取消监听touch事件
~~~

### 

~~~
transitionend
过渡动画结束事件 需要考虑兼容
webkitTransitionEnd || mozTransitionEnd  || msTransitionEnd

animationStart
帧动画开始后触发事件
animationlteration
帧动画重复后触发事件
animationEnd
帧动画结束后触发事件
~~~





本地存储

~~~
localstorage -->  本地永久存储
sessionStorage  -->  只存储一次性浏览器关闭清除
只能用于客户端 
一般用于移动端 有API
浏览器定义了一些方法可以直接使用
HTML5新增的
添加属性
Storage.setItem(key,value) Storage.key=value  Storage['key']=value
获取值
Storage.getItem(key) Storage.key Storage['key']
返回对应的value 
删除值
Storage.removeItem(key)   delete Storage.key
删除全部
Storage.clear()
获取Key 返回下标为index的key
Storage.key()

如果key 不存在 返回null

属性值默认转为字符串

本地存储只支持字符串格式的数据 数组和对象进行存储时自动调用toString()方法转为字符串进行存储

cookies  可以用于客户端也可以用于服务端
一般用于PC端
自己封装插件  jquery.cookies.js
存储临时数据
~~~

### 拖放

~~~
draggable  拖放属性
默认  a  img  标签的draggable=true;
让元素拖动可设draggable=true;
~~~

drag  拖  不支持手机  不支持IE9以下的浏览器

元素拖放必须设置draggable=true;

drop 放

~~~
源对象
dragstart 源对象开始拖放
drag拖放过程
dragend 源对象拖放结束

过程对象
dragenter源对象开始进入过程对象范围内
dragover源对象在过程对象范围内移动
dragleave源对象离开过程对象
~~~

~~~
文件域
原生DOM节点input标签type为file的元素.files

功能:得到上传文件列表

返回值:对象

<input type="file" multiple> 默认只能上传一个文件 加了multiple属性可以上传多个文件
var files=$(this)[0].files[0]; 电脑本地文件
files得到一个文件对象{
	name:文件名称,
	size:文件大小单位b(字节),kb(千字节) mb(兆字节)
	type:文件类型,
	lastModified 文件创建时间
}
1mb=1024kb
1lb=1024b
电脑本地文件 通过Filereader对象读取到浏览器里
var readerObject = new FileReader();
设置要读取的文件
readerObject.readAsDataURL(files);
readerObject.onload=function(){
  获取读取结果
  console.log(this.result);返回值是一个base64格式的字符串
  var src=this.result;
}
获取音频视频总时长
audio/video.duration 返回值为number 单位为s
获取当前播放时长
audio/video.currentTime 返回值为number 单位为s
~~~

### video audio

~~~
video 视频
audio 音频

src="要加载音频和视频的路径"
autoplay 自动播放
loop 循环播放

audio或video对象.play() 播放

音频或视频加载完成事件 canplaythrough
  一般浏览器都会禁止此事件
audio或video对象.addEventListener('canplaythrough',function(){
  play()
})
可以通过按钮绑定
btn.onclick=function(){
  audio或video对象.play()
}

~~~



### Swiper 插件

~~~
1、引入css
2、定义样式
    swiper-container  父元素  加了overflow：hidden
    swiper-wrapper  ul  加了 display:flex
    swiper-slide   li  
    swiper-pagination 分页器类名 居中
3、引入JS
    实例化swiper
    var navdata=['已处理'，'待处理'];
 	new Swiper(父元素，{
 		//分页器组件
  		pagination:{
			el:dom元素, 
			clickable:true,
            type: ‘bullets’  圆点（默认）
                  ‘fraction’  分式 
                  ‘progressbar’  进度条
                  ‘custom’ 自定义   //分页器样式  ,
            renderBullet:function(index,classname){
  				renturn '<span 			class="'+classname+'">'+navdata[index]+'</span>';
  			}
		},
		//切换效果
		effect: 默认为"slide"（位移切换），可设置为'slide'（普通切换、默					认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）,
		//自动切换组件
		//autoplay:true,  3000
		autoplay:{
			delay:1000,//延迟时间
			disableOnInteraction: true/false  
			用户操作swiper之后，是否禁止autoplay。默认为true：停止。			
		},
		//无缝轮播
		loop:true,   //默认为false
		//初始显示轮播下标
		initialSlide:2,
		//轮播方向
		direction:可设置水平(horizontal)或垂直(vertical) ,
		//回调函数
		on:{
  			过渡滑块
  			slideChangeTransitionStart:function(){
  				console.log(this.activeIndex);
  				console.log(this.realIndex)
			}
		}
	})
4、操作
	实例对象.slideTo(index)  切换到指定的slide
~~~

### Better-scroll插件

~~~
better-scroll是一款重点解决移动端（已支持PC端）各种滚动场景需求的插件

1、引入JS
2、父元素的高度或宽度一定要小于子元素的宽度或高度
	2.1 父元素要添加相对定位和overflow:hidden
	2.2 只查找父元素下第一个子元素 忽略其他子元素

做横滚时父元素宽度不会被撑开 要动态计算子元素的宽度

3、实例化滚动条  
new BScroll(父元素,配置项)  默认垂直滚动

常用配置项{
  scrollbar:false/true 显示滚动条 默认为不显示
  scrollY:true/false 垂直方向滚动
  scrollX:false/true 水平方向滚动
  probeType:0/1/2/3 滚动条探测指数 0是不获取滚动位置不触发scroll事件 
  					1是滚动停止时触发 2是滚动过程中触发 3是实时触发
  click:true 能否使用点击事件
}

上拉加载更多：

1、滚动事件 监测滚动位置 判断loading状态
默认不激活
BScroll实例对象.on("scroll",function(){
  滚动触发操作
})
BScroll实例对象.y 当前滚动y轴距离
BScroll实例对象.x 当前滚动x轴距离
BScroll实例对象.maxScrollY 最大滚动y轴距离
BScroll实例对象.maxScrollX 最大滚动x轴距离

2、滚动停止事件 回到初始状态
BScroll实例对象.on("scrollEnd",function(){
  滚动条停止滚动触发操作
})
3、手指松开判断是否加载数据
BScroll实例对象.on("touchEnd",function(){
  if(dom.getAttribute("data-down")==="释放加载更多"){
  	for(var i=0;i<10;i++){
  		var p=document.createElement("p");
  		p.innerHTML=i;
  		dom.appendChild(p);
  		BScroll实例对象.refresh();
	}
  }
})
4、dom结构发生变化 刷新滚动条 重新计算滚动距离
BScroll实例对象.refresh();

BScroll实例对象.scrollToElement(dom节点，运动时间，滚动条距当前节点x轴的距离，滚动条距当前节点y轴的距离)
offsetx true 在父元素中间
offsety true 在父元素中间

BScroll实例对象.scrollTo(x,y,time)
x:x轴的距离
y:y轴的距离
time:时间

滚动事件
实例对象.on("scroll",function(){ 
})

属性
实例对象.x 当前x轴的距离
实例对象.y 当前y轴的距离
实例对象.maxScrollX 当前x轴最大滚动距离
实例对象.maxScrollY 当前y轴最大滚动距离
~~~

## canvas画布

~~~
canvas 用于在网页实时生成图像 ，并可以操作图像内容，是一个用JS操作的位图（bitmap）

画布 默认宽300 高150，宽高不能直接在style样式里设置，必须通过属性width，height设置 不带单位 
JS设置和获取
	获取：canvas节点.width    canvas节点.height
	设置：canvas节点.width=number  canvas节点.height=number
canvas和img可以直接通过width和height属性设置或获取宽高
获取画布
	canvas节点.getContext("2d");
	左上负数 右下正数  
设置起点
	画布.moveTo(x,y)
设置结束点
	画布.lineTo(x,y)
描边
	画布.stroke() (默认黑色)
设置描边颜色
	画布.strokeStyle=颜色值
填充
	画布.fill()
设置填充颜色
	画布.fillStyle=颜色值
开始路径
	画布.beginPath()
结束路径
	画布.closePath()
绘制矩形	
	画布.rect(x,y,w,h);
	w:width 正数向右负数向左;
	h:height正数向下负数向上;
填充矩形
	画布.fillRect(x,y,w,h) ==> rect()+fill()
描边矩形
	画布.strokeRect(x,y,w,h) ==> rect()+stroke()
清除矩形内容
	画布.clearRect(x,y,w,h)
绘制文字
	画布.fillText(文本内容，x,y) 实心文字
	画布.strokeText(文本内容，x,y) 空心文字
设置文字大小
	画布.font=文字大小 粗细 字体
设置文字水平对齐方式
	画布.textAlign="center|left(默认)|right|start|end"
设置文字垂直对齐方式
	画布.textBaseline="top|bottom(默认)|middle"
绘制虚线
	画布.setLineDash([线段长度，线段间距]);
旋转画布(以画布原点旋转)
	画布.rotate(弧度)
移动画布原点
	画布.translate(x,y)
绘制弧形
	画布.arc(x,y,r,start,end,顺时针(false)逆时针(true));
	x,y圆心点
	r半径
	start起始弧度  0度在3点钟方向
	end 停止弧度
Math.PI/180 一角度等于多少弧度
设置描边宽度
	画布.lineWidth=数字
本身角度加起始角度等于终止角度
公式
	Math.cos(弧度)*半径=x;
	Math.sin(弧度)*半径=y;
滚动条标签
  input type="range" value="1" min="1" max="10" 	step="8"
  value越小显示在左边,最小1最大10,一次移动8
导出画布
	canvas.节点.toDataURL();
设置或返回如何将一个源(新的)图像绘制到目标(已有)图像上
源对象=你打算放置到画布上的绘图
目标对象=你已经放置在画布上的绘图
	globalCompositeOperation="destination-out"
	globalCompositeOperation="source-over"(默认)
保存画布状态
	画布.save()
还原画布状态
	画布.restore()
设置阴影颜色
	画布.shadowColor=颜色值
设置模糊程度
	画布.shadowBlur=数值
设置阴影x轴的距离
	画布.shadowOffsetX=数值
设置阴影y轴的距离
	画布.shadowOffsetY=数值
设置虚线
	画布.setLineDash([参数，参数])
	第一个参数是线段长度,第二个参数是每段的距离
渐变添加颜色
	画布.addColorStop()
渐变
与CSS3中的渐变类似 
canvas中的渐变也分为线性渐变和径向渐变 
和图案填充的类似，需要定义我们的渐变规则

线性渐变

createLinearGradient(x1, y1, x2, y2) 
表示定义从一点到另一点的线性渐变 
返回一个CanvasGradient()对象 
上面有addColorStop()用来定义我们的渐变色 
0就是起始点，1是终点

eg:
var lGradient = ctx.createLinearGradient(0, 0, 0, 250);
lGradient.addColorStop(0, '#000');
lGradient.addColorStop(1, '#fff');
ctx.fillStyle = lGradient;
ctx.fillRect(0, 0, 500, 250);

径向渐变

createRadialGradient(x1, y1, r1, x2, y2, r2) 
相比线性渐变，多了两个点的半径参数 
除此之外使用方法和上面是一样的 
就不多做解释了 
比如说我们可以绘制一个渐变同心圆

var rGradient = ctx.createRadialGradient(250, 250, 100, 250, 250, 250);
rGradient.addColorStop(0, '#fff');
rGradient.addColorStop(0.5, '#000');
rGradient.addColorStop(1, '#fff');
ctx.fillStyle = rGradient;
ctx.fillRect(0, 0, 500, 500);

导出图片
canvas节点.toDataURL()

获取像素数据
  画布.getImageData(x,y,w,h)返回ImageData对象，该	对象拷贝了画布指定矩形的像素返回				ImageDatacolor/alpha以素组形式存在
  
设置指定像素数据
	画布.putImageData(像素数据对象,x,y)

绘制图片
画布.drawImage(要绘制的图片对象,绘制的起点坐标（x,y）,绘制图片的宽和高（w,h）)

灰度图片计算公式
	0.299*r+0.578*g+0.114*b

三角函数
	正弦：sin =对边/斜边 =y/r
	余弦：cos =领边/斜边=x/r
	Math.sin(弧度)
	Math.cos(弧度)
	
Image的complete 属性可返回浏览器是否已完成对图片的加载，加载完成返回true 否则返回false

encodeURIComponent() 编码
encodeURI() 编码
decodeURIComponent 解码
decodeRI 解码
~~~

## swiper-animation	

~~~
1.引入四个文件
    swiper.css
    animation.css
    swiper.js
    swiper.animation.js
2.添加动画的元素
    首先给元素添加.ani类名
    属性
    swiper-animate-effect：切换效果，例如 fadeInUp 
    swiper-animate-duration：可选，动画持续时间（单位秒），例如 0.5s
    swiper-animate-delay：可选，动画延迟时间（单位秒），例如 0.3s

3.swiper初始化 init
     swiperAnimateCache(); //隐藏动画元素 
     swiperAnimate(); //开始动画

4.切换slide  slideChnageTransitionStart || slideChnageTransitionEnd
    swiperAnimate(); //开始执行某一页动画
~~~

## bootstrap	

~~~
<!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
bootstrap是最受欢迎的HTML,CSS,JS框架，用于响应式布局、移动项目优先的WEB项目
    
1、父容器
	.container 响应式布局 会根据浏览器宽度发生改变 4个断点
	winw>1200 1170
	winw>992 970
	winw>768 750
	windw<768 100%
	.container-fluid 流式布局 宽度永远100%
2、文字对齐方式
	.text-center 居中
	.text-left 左对齐
	.text-right 右对齐
	.text-nowrap 不换行
3、文字大小写
	.tetx-capitalize 首字母大写
4、表格
	.table 基础类
	.table-striped 条纹表格
	.table-bordered 带表框表格
	.table-hover 悬停表格
	.table-condensed 紧缩表格
	状态类
	.active 灰色（悬停状态）
	.success 绿色（成功状态）
	.info 蓝色（信息状态）
	.warning 黄色（警告状态）
	.danger 红色（危险状态）
	 
	 响应式表格
	 	table 外加一个div div加类名.table-responsive
5、表单
	div加 .form-group 让表单组获得更好的排列
	.form-control 表单控件给input元素添加
	form加 .from-inline 水平排列的表单 让form-group在一行显示
		   .form-horizontal 让label 和 input 在一行显示
		   					input外加div 给div和label宽度
	label加 .control-label 让label元素和input元素水平垂直对齐
	span加 .form-control-feedback 文本框后图标(小眼睛等)
	
		css自带样式	pointer-events:auto(默认值)|none(不识别任何事件)
6、辅助类
	.center-block 让内容块居中 ==> margin:0 auto;
	关闭按钮 
	<button type="button" class="close"><span>&times;</span></button>
	倒三角
	<span class="caret"></span>
	快速浮动
	.pull-left
	.pull-right
	清浮动
	.clearfix
	显示隐藏
	.show .hidden
7、按钮
	.btn 基础类名
	.btn-lg 大按钮
	.btn-md 中等按钮(默认按钮大小)
	.btn-sm 小按钮
	.btn-xs 最小按钮
	
	按钮状态
	.btn-default 默认
	.btn-success 成功(绿色)
	.btn-primary 首选项(深蓝色)
	.btn-info 信息(浅蓝色)
	.btn-warning 警告(黄色)
	.btn-danger 危险(红色)
	.btn-link 链接
8、***栅格系统***
	行 .row   列.col
	1行分为12列
	col-1 ==> width:8.3333%
	col-2 ==> width:16.6666%
	col-3 ==> width:25%
	col-6 ==> width:50%
	col-9 ==> width:75%
	col-12 ==> width:100%
	
	.col-xs- 超小屏幕 <768px
	.col-sm- 小屏幕 >=768px
	.col-md- 中屏幕 >=992px
	.col-lg- 大屏幕 >=1200px
	
	.col-屏幕-offset-[0|12] 列偏移 相当于margin-left
9、导航
	
10、模态框
	结构
	.modal
		.modal-dialog
			.modal-content
				.modal-header
				.modal-body
				.modal-footer
	目标元素
	data-target="#dialog"
	切换类型
	data-toggle="modal"
	关闭模态框
	data-dismiss="modal"
~~~



