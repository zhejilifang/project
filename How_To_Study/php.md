# php

## 介绍

### wamp

w：windows  操作系统    mamp  mark本       lamp linux系统

a：apache  服务器    web服务器    提供服务（提供某种特定功能的代码块）      处理请求、响应请求

m：mysql  数据库服务  sqlserver   access  orisql   关系型的数据库：关系模型的基础上建立的数据库  mangodb

p：PHP

集成开发环境

静态网页：用HTML和css，JS写出来的网页  数据都是静态的，  没有链接数据库的网页

动态网页：链接数据库，数据库中获取

数据库：

web服务器：提供web服务的。

PHP：是运行在服务器端的脚本语言

show batabases;

http://localhost/ddd/dd

http://127.0.0.1 

### 服务器处理

处理用户请求

静态资源：.html  .css    .js   .jpg  .gif   .png     请求静态直接原样返回（字符串）

动态资源：.php   .jsp   .java    PHP处理器将文件处理，将输出的东西返回去

当在地址栏键下地址的时候，浏览器结合我们的软硬件将http请求发送到网络中，服务器接收到我们的请求，开始处理我们的请求，请求的资源是分为静态资源和动态资源的，静态资源像.html,.css,.js等这些后缀名的文件，动态资源像.php  .jsp  .Java 等这些资源。服务器碰到请求是静态资源会直接进行返回，碰到动态资源会先进行解析，PHP文件最终输出的内容将会交给服务器，最后服务器返回输出的内容，当浏览器接收到返回的内容，开始绘制，碰到href   src   url   这些东西的时候会再次向服务器发送请求，最终呈现整个页面。 

## PHP

PHP是一种超文本预处理语言   是运行在服务器端，能和HTML进行嵌套用于制作动态网页的语言。

### PHP特点

> 运行在服务器端的脚本语言
>
> 能支持绝大部分的操作系统
>
> 能支持大部分的服务器   apache   IIS
>
> 能支持大部分的数据库    mysql    sql     server     Access
>
> 能操作数据库
>
> 能操作文件
>
> 能操作图片
>
> ...
>
> 如果有别的语言

用于动态网页的制作，适合web的开发。

## PHP基础

header("content:text/html;charset:utf8");

### 变量

输出  echo  'ddddd' 用来输出字符串

   var_dump()   输出任何的数据类型和值

定义：$开头定义

notice 注意  warning    不会停止运行

致命性的错误 的时候 会停止  error

命名规范和js是一样的

#### 常量

define('PI','3.14');   在全局范围内定义  用define来定义   常量名字大写 不加$一旦定义后不能被更改。

const PI=123;    

#### 检测

检测变量有没有被定义    isset($ddd);  判断一个变量是不是被定义  若是则true否则为false；当一个变量值为null的时候，被认为是没有定义

defined(name:'PI') 判断一个常量是不是被定义

判断一个变量有没有定义用isset()

判断一个常量有没有设置用defined()

#### 删除变量

unset() 删除变量   不允许删除常量

#### 常量和变量的区别

常量的值不能在改变或者是被删除

常量不加$

常量只能用const或者是define来定义

常量可以在任何位置去访问

常量的值不能延迟求值，只能是标量（const 不可以，define可以）

```PHP
function name(){
    retrun 50;
}
define('PI',name());
const PI=name(); 是错的
```

#### 变量引用

```PHP
'&'符号用于引用   引用地址
$nub=200;
$nub2=&$nub;
$nub=300;
echo $nub2;   //300
```



#### 可变变量

将一个变量的值变为另一个变量的名

```PHP
$nub='name';
$$nub=123;
var_dump($$nub); //int 123
echo $name;  //123
```

### 数据类型

4种标量     2种复合类型   2种特殊类型         用.表示链接，可以链接两个标量类型，链接成字符串。

#### 标量：

>  整型 ：int   整数
>
>  浮点型  ：float 也作double   小数   
>
>  字符串  ：string   
>
>  ```PHP
>  $nub=200;
>  $num=300;
>  echo $nub.$num;  //200300
>  $str1='这是一个数字$nub";
>  $str2='这是一个数字$nub';
>  var_dump($str1);//  string '这是一个数字200'
>  var_dump($str2);//  string '这是一个数字$nub'
>  PHP里面的双引号可以解析变量，单引号不能
>  ```
>
>  布尔类型  ：boolean       true   false

#### 复合类型：

数组:

​       索引数组

  ```PHP
echo '<pre>';
$arr=array('a','b','c');
echo $arr['0'];
print_r($arr);
$arr=array(
  0=>'a',
  2=>'b',
)
  ```

​       关联数组

```PHP
$arr=array(
  'name'=>'lisi',
  'age'=>13
)
  exit; // 退出   下面的不运行
  //遍历
  foreach($arr as $item=>$value){
      $item   //键
      $value  //值
  }
```

count($arr)   数组的长度

对象:

```PHP
class person{
    
}
$obj=new person();
```

#### 特殊类型：

null       

resource:引用   is_resource();检测是否是一个资源

gettype() 获取变量的类型

is_int()     is_integer()

is_float()   is_double()

is_bool()

is_string()

is_resource()

is_null()

is_array()

is_object()

判断是否是某一种类型的

类型转化

强制性转化 strval($nub);

intval()     floatval()     doubleval()     boolval()   strval()     标量之间相互转

strval() 将true转化为1    将false转化为“”;

(string) $nub;   

(int)   (float)  (double)  (bool)  (string)   (boolean)

false的情况  0  '0'   null   ''   false  空数组   

settype('$nub','string') 改变了原来的数值  不建议

### 字符串方法

> echo();

> strlen();  输出字符段的长度

> trim();  去两边的空白字符
>
> ltrim();左边的空白字符
>
> rtrim();右边的空白字符

> strtolower() 小写
>
> strtoupper()  大写

> strrev()   字符串反转

> md5()     将字符串翻译成16进制   不可逆  md5(str:123);   主要加密

> explode()  将字符串分割成数组    explode(',','d,dd,d')

> substr()    substr('djdidajla','0','4')  从指定位置截取到指定的长度   按字节去截取
>
> 中文字符 占3个字节  
>
> mb_substr()   mb_substr('fdadaf','0','4','utf8');   按字符去截取
>
> strstr()   从匹配到的第一个字符的位置到末尾截取  before needle  true为
>
> strstr从匹配的字符开始截取，最后的参数决定了向前还是向后截取

> strpos()  查找字符的首次出现的位置，offset 表示从第几个字符开始找
>
> strrpos() 查找字符的最后一个出现的位置，

> str_replace()  替换
>
> str_ireplace()  不区分大小写

### 数组方法：

> count()    数组的长度

> in_array()   判断某个值是否在数组中，可以启用全等  strict  是否启用全等的操作

> array_search()   查找某个值对应的键。若找不到，返回false。

> array_key_exists()  判断某个值是不是数组的键，若是为真，否则为假。

> array_filter()   筛选，返回值是新数组，接受回调函数
>
> ```PHP
> array_filter($arr,function($value){
>     return false;
> });
> array_walk($arr,function($value,$item))   与foreach一样
> ```
>
> array_walk()  类似foreach，将每一个值都执行一个函数
>
> array_map()   映射

> array_push()  将数组的后边推入一个新元素 ，会影响原数组  和 equalto js
>
> array_pop()   删除最后一个元素，会影响
>
> array_shift()   删除第一个元素，会影响
>
> array_unshift()   将数组的前边推入一个新元素 ，会影响原数组   equalto js

> array_keys()   获取所有的键  返回键组成的数组，如果有第二个参数，那么只返回与第二个参数匹配的键
>
> array_values()  获取所有的值  值组成的数组

> array_sum()   将数组中的值加起来
>
> array_merge()  合并多个数组，如果有相同的键值，那么后者就会覆盖前者
>
> array_unique() 数组去重

> array_rand()  在数组里面随机取出一个键，如果取多个，返回的是键组成的数组

> sort()  升序  若为数字，按数字大小排序，若为字母，按ASCII码值进行排序    按照值进行升序排序，重新排键
>
> rsort()  降序 按照值进行降序排序，重新排键
>
> asort()   按照值进行升序排序，保持原来的键
>
> arsort()   按照值进行降序排序，保持原来的键
>
> ksort()   按照键进行升序排序
>
> krsort()  按照键进行降序排序
>
> impord() 将数组转换成字符串

数学方法

> abs()
>
> ceil()
>
> floor()
>
> min()
>
> max()
>
> round()
>
> mt_rand(20,30);    20-30之间的随机数

### 函数

#### 1、参数

如果定义了形式参数，就必须传入同样的实际参数,实际参数与形式参数一一对应 ，实际参数可以超出，形参不可以

```PHP
function fun($a,$b){
    echo $a+$b;
}
fun(1,2)
  function_exists('fun');   判断某一个函数是否存在的
  可变函数  运行变量
  $name='fun';
  $name();
```



#### 2、作用域

全局变量只能在全局去用，局部变量只能在局部去用  

```PHP
$nub=200
function fun(&$aa){
    $aa=300;
  echo $aa;//300
}
fun($nub);
echo $nub//300
  function fun(){
    global $nub;
    echo $nub;//300
}
fun();
function fun(){
    echo $GLOBALS['nub'];//300
}
find();
超全局变量   ： $GLOBALS
  $_GET    $_POST   $_REQUEST    $_FILES    $_SERVER     $SESSION服务器端的session     $COOKIE  所有的cookie
```

#### 3、静态的变量

```PHP
function fun(){
    static $nub=200;
  $nub+=1;
  echo $nub;
}
fun();//201
fun();//202
//在函数第一次运行的时候声明，之后的函数运行都会用这一个静态变量。
```

exit()  and  die()  一样

 实现代码复用

require    

include     将另一个文件引入到该文件中

require_once()  

include_once()

include_once()和 require_once() 

当文件找不到的时候require_once() 报错  include_once()  警告

## 时间

```PHP
date_default_timezone_set('Asia/Shanghai');   设置时间时区
date_default_timezone_get();  获取时间的区域
time();   获取秒数
microtime();   获取微秒数    加true就会转化为float
getdate();  获取所有的时间的细节
date('Y-m-d H:i:s');  获取时间  可以初始化格式
mktime(8,0,0,8,8,2008);  设置时间
```

### 格式化时间

A:'AM'或是'PM';

d:几日，两位数字，若不足则补零；

D：星期几，3个英文字母，

F：月份，英文全名

h：12小时制的小时

H：24小时制的小时

g：12小时制的小时，不补零；

G：24小时制的小时，不补零；

j：几日，不足不补零；

l：星期几，英文全名

m：月份，两位数字

n：月份，两位数字，不补零；

M：月份，3个英文字母；

s：秒；从’00‘至’59‘

S：字尾加英文序数，两个英文字母，’21th‘

t：指定月份的天数，从‘28’到‘31’

u:总秒数

w：数字型的星期几；从“0（星期天）到6（星期六）”

Y：年，四位数字

y：年，两位数字

z：一年中的第几天；从’1‘至’356‘

## cookie

setcookie(name:' ',value:' ',);

## session   

存储在服务器端   sessionid

```PHP
session_start();
$_SESSION['name']=123;  只要不关浏览器，session一直存在
unset($_SESSION['name']);  清除session1
session_destroy();    清除session_id
```

```PHP
$img=imagecreate(width:'',height:'');   创建图片
$img=imagecreatetruecolor(width:'',height:'');颜色较多
$color=imagecolorallocate();   创建颜色
$color=imagecolorallocatealpha();  有透明度
imagesetpixel(image:'',x:'',y:"",color:''); 画点
imageline()
imagettftext();
imagefill($img,x:0,y:0,$color); 大背景
header('content-type:image/png');
imagepng($img);
imagedestroy($img);
```

## 魔术常量

```php
__DIR__  文件路径
__FILE__  文件路径+名字
__CLASS__
__LINE__  运行代码当前行
basename();  从一个路径中，返回文件名
dirname();    从一个路径中，返回路径
file_exists(); 判断文件或者是路径存在不存在
mkdir();创建文件夹
rmdir();只能删除空文件夹
unlink();删除文件
is_file();判断是不是一个文件   只能识别当前的路径，如果需要认识上一级或下一级，需要写相对路径
is_dir();判断是不是一个路径
scandir();
```

### 上传文件

```PHP
$arr=['png','jpeg','gif'];
$size=1024*500;
$file=$_FILES['file'];
is_upload_file();判断是否是一个上传的文件
  move_uploaded_file();  转存文件
```

## 数据库

mysql 数据库服务器    能够永久存储数据信息的集合为数据库

表  字段   

sql  结构化查询语言 去操作数据库  只能查询关系型的数据库

> 数据库的定义语言      数据库的建立删除  表的删除建立 字段的操作
>
> 数据库的操作语言    （增删改）（10%）查（90%）
>
> 数据库的权限管理

```SQL
show databases; 查看所有的数据库
use myclass;  使用数据库  myclass;
show tables;   查看所有的表
select * from goods;  查看所有的货物表
create datebase 206class default set charset utf8;  直接写charset  字符集为utf8;
show databases;
use 206class;
create table user (
  username char(10) not null, 字段
  pass varchar(10) not null
  )  engine innodb charset=utf8;            存储引擎;创建表
  desc user;  查看字段 
drop  database 206class; 删除数据库
rename table aa to user;  修改表的名字
show create table user;   查看表的创建过程
engine   innodb   myisam    存储引擎定义了方式，效率，安全性。
innodb 安全性高  效率低
myisam 安全性低  效率高
主键：唯一的标识这一行数据的信息 和自增配合在一起
create table student (
id tinyint(10) not null primary key auto_increment,
  name char(100) not null unique key,
  grade float(5,2) not null default 0.00,
  updatetime datetime on update current_timestamp not null
) engine=innodb default charset=utf8;
unsigned 必须放在tinyint的后边要修饰
alter table student add num char(20) not null; 添加字段
alter table student drop num;   删除字段
alter table stuent change grade grades;修改字段名字
alter table student modify;  只能修改字段后面的
alter table student modify times datatime default current_timestamp on update current_timestamp;
comment 描述注释
```

### 数据插入，查询

```SQL
select * from user;查找所有的字段
insert into user(username) values('admin');
投影运算 
select 字段 from  表
insert into   表（字段）  values(要插入的数据一一对应)   指定默认值和自增可以去省略。
select * from user where id=1;
select * from user where username = 'admin';
delete 删除    delete from user where id = 7;  删除id=7的一行
update  更新  update user set pass=123,username='new user2' where id=10;  更新id=10的一行的pass,username
where 模型 id<8 and pass=123;id<8 or id>10; id between 8 and 10;
where id in (1,2,5,10);
where name like "电%"("%电%");模糊查询% 一个或多个字符
where name like "电_ _";  _代表一个字符
where name is null;   若为空的，用该方法查
select id,name,(shop_price-price)*count as profit from goods;
select id,name,floor(shop_price) from goods;
select id,name,shop_price-price as profit from goods having profit>200;
where 是对原字段进行筛选
having  可以对不存在表格中的字段筛选
where  在having的前面  
```

链接数据库

```PHP
$link=new mysqli('localhost','root','','user');
if($link->connect_errno){
    echo '链接数据库错误'.$link->connect_error;
  exit;
}
$sql="select * from user where username='$zhanghao'";
$result=$link->query($sql);
查询是一个结果集的形式，可以处理
  fetch_array()  处理成以关联数组和索引数组的形式  从结果集中抓取第一条数据，处理成数组形式，有三种数组可选
  分别是 MYSQLI_ASSOC   MYSQLI_NUM   MYSQLI_BOTH  
  fetch_array(MYSQLI_NUM);
  fetch_array(MYSQLI_ASSOC);
  fetch_assoc()  从结果集中抓取第一条数据，处理成关联数组形式
  fetch_row()  从结果集中抓取第一条数据，处理成索引数组形式
```

```sql
id  name   price   shop_price count
模糊查询  %  _  is  null   is not null
分组
求和   select sum(count) from goods;
sum min max avg  count   不能求信息以外的
select * from goods group by type;
select count(*) from goods group by type;
排序
order by desc   降序
order by asc    升序
select * from goods order by count desc,id desc;
select * from goods group by type order by count desc;
where group by having order by  limit  五个关键词的顺序
limit 限制
select * from goods order by count desc limit 3,2;
select * from goods order by count desc limit 2*n,2;  分页
复合
select id,name from goods where count = (select max(count) from goods);  where型子查询  单列多行   将上一次查询的结果作为条件
select count from (select id,name from goods) as tmp; from型子查询     将上次查询的结果作为临时的一张表
select * from goods where exists (select name from goods where id=10);  只要上次查询的结果存在就会执行，
多表关联
inner join 内链接
select news.id,news.title,user.username from news inner join user where news.uid = user.id;
left join 左链接   以左边的表为基准，对应去找右边的数据
select * from news left join user on news.uid=user.id;
right join 右链接
```

## cms   内容管理系统

```php
$db->query(‘set names utf8’);   不会出现乱码
```



affected_rows  影响的行数

category.php  栏目管理

insert_id;  插入的id

$db->close();

id, title varchar(255),con text(2000),img varchar(200), count int(100),likes int(100),time datetime default current_timestamp on  update current_timestamp, cid  int(10) not null 

let fileread=new FileReader();  将文件读取到浏览器里边

fileread.readAsDataURL(file); 读取文件的地址

fileread.onload=function(e){



}

formdata=new FormData();  创建一个表单对象，方便把数据携带过去

formdata.append('file',file);

ajax.upload.onprogress=function(){

 per=e.loaded/e.total;

} 上传文件的时候  文件上传的进度

ajax.onload=function(){

}   本次ajax什么时候结束

name=img[] 当将表单形成这个样式的时候，服务器会将传的转为二维数组

probetype

```
let myScroll = new IScroll('#wrapper',{
probetype:3,
startY=40
      });
      myscroll.on('scroll',function(){
        if(this.y>40){
          $('.pulldown').html{
            松手加载
          }.addclass('loading');
        }
        myscroll.on("scrollend",function(){
          
        })
      })
     echo json_encode($arr); 将数组解析成json格式的字符串
     myscroll.refresh()  重新去计算高度；
```
## 类和对象

upload

code

session

分页

面向过程编程的方式（需要什么写什么函数）

面向对象编程的方式（分析，逻辑）

### 面向过程

一个功能对应一个函数，需要什么功能就写什么函数

### 面向对象编程

将整个项目中的每一部分我们抽象为一个对象，我们关注的是对象和对象之间的联系，然后我们实现对象的成员方法或成员变量，从而构建我们整个项目。

js  属性和方法      PHP   成员变量和成员方法

### 对象和类的关系

类是对象的抽象

> 我们在具有某种相似特征的对象的基础上，抽象为一个用来描述或者是用来创建这些对象的类。比如说，我们将所有的人的特征抽象为人类的这个概念

对象是类的实例化

> 有了包含一些特征的抽象出来的类以后，那么我们可以通过这个类，去创建一个对象。所以说对象的类的实例化，比如说小明是人类的一个实例

### 特征

封装

> 我们将对象的成员变量或者是成员方法通过一个一些关键字比如 public   private protected 等去封装在类的内部，只留和外界的接口。
>
> 强内聚  低耦合  倾向于将更多的方法或者是变量封装在类的内部，更倾向于将更少的方法暴露在外部

```PHP
class Person{
  const AA=127;
  static $sta='uek'; //可以用关键字去修饰
  public $name=123;
  private $age=11;
  protected $num=111;
    function __construct(){   // 提供对象的初始化 ，为了提供对象的初始化，并且在创建对象的时候，构造函数会自动被调用  
        
    }
  function fun(){
    echo 'fun';          
  }
  function aa(){
       var_dump( $this->name);  //int  123
  }
}
$obj=new Person();
$obj->fun(); // fun
$obj->aa();
var_dump($obj->name); // int 123;
var_dump(Person::AA); //::作用域操作符
```

继承

> 一个类继承与另外一个类，从而获取这个类的成员变量和成员方法，通过关键字 extends 去继承
>
> 子类和父类
>
> 一个类可以被多个类所继承，但是一个类不能继承于多个类
>
> 如果子类中含有和父类中相同的方法，呢么子类中的方法覆盖父类中的方法
>
> 静态的方法里边只能用静态属性
>
> 静态方法只能被静态方法覆盖（重写）
>
> ```php
> class Man extends Person{
>   function __construct(){
>       parent::__construct();
>   }
>     function show(){
>         echo self::$sta;
>       echo parent::$sta;
>     }
> }
> ```
>
> 

多态

不同的对象调用同一个方法，或者是相同的操作，结果不同，就是多态

关键字

当一个成员变量或者是成员方法被public修饰的时候，在任何位置都可以去访问，但是被private（私有）或者是protected（受保护）修饰的时候，只能在类的内部去访问。

public   在任何位置都可以去使用

private  私有的，只能在当前的类内部去使用，不能被继承

protected  受保护的，只能在类的内部去访问

静态属性和方法也能被继承，同样受关键字约束

self:: 访问本类的属性和方法

parent::访问父类的属性和方法

git clone;

git status

git add *

git commit -m '这是主页'

git push

git rm -r --cached

type nul > .gitignore

uploadfile

controller

mvc 是程序，软件的架构方式

## MVC

### 定义

> MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范，用一种业务逻辑、数据、界面显示分离。
>
> MVC就是类似三层的一种架构，主要还是采用封装（分层）的思想，来降低耦合度，从而使我们的系统更加的灵活，扩展性更好。

### 内容

> model是应用程序中处理应用程序数据逻辑的部分。通常模型负责在数据库中存取数据
>
> view是应用程序中处理数据显示的部分，通常视图依据模型数据创建的，用来展示呈现数据
>
> controller是应用程序中处理用户交互的部分，通常控制器接受请求，定义要做的事情。选择相应的模型，选择相应的视图

### 优点：

> 1、大大提高了代码的可重用性
>
> 2、将整个系统分为三层，有效的实现了数据和视图的分离
>
> 3、提高整个系统的逻辑性

当浏览器发送请求，选择相对应的模型，链接数据库，将数据传递，根据模型创建视图，将视图传递到浏览器上

单页面应用

用地址栏的查询字符串来控制做什么

```PHP
index.php?m=index&f=index&a=init
  m module 前后台  
  f  file 对应的类
  a action 动作，类里边的方法
router 路由  实现功能的分发 通过地址栏通知做什么样的事情
  
```

基本语法

变量（数组赋值，数组下标，对象）

变量修饰器（capitalize,count characters,truncate,string format, date format)

复合修饰器

内置函数

$var=    for      foreach     if else   include    section~    while  

自定义函数

html开头的

Smarty 将数据和视图进行分离

