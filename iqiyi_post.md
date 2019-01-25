## 爱奇艺小程序
### 1.首页  
- 接口地址：https://pub.m.iqiyi.com/h5/mina/home/
    + / 截至时间Dec28 

### 2.热点
- 接口地址：https://pub.m.iqiyi.com/h5/mina/hot/0/2/?uid=2cc5c1baa9d04acff7753fde47d004a9&ppuid=&rh_version=5
    + 数据请求方式的不同 **/hot/0/2**
        +  初始是为**/hot/0/1**(默认)
        +  当执行下拉刷新是就改为2
        +  如果不下拉刷新就不会更改,采取默认
        +  根据当前的**/hot/0**/? 参数执行上拉加载
    + 每次请求返回数据的条数各有不同，需要与之前请求的数据合并到一起展示出来
    + 每次执行上拉刷新就应提示返回的数据量为多少
    + **rh_version**的参数，默认为1；上拉加载或者下拉刷新都会影响到**rh_version**参数的变化，每次都+1

```
    截至时间Dec28
    上拉加载或下拉刷新-更改数据调试：
        https://pub.m.iqiyi.com/h5/mina/hot/0/2/?uid=2cc5c1baa9d04acff7753fde47d004a9&ppuid=&rh_version=5
        更改：rh_version参数就行
```
### 3.风云榜
- 接口地址：https://pub.m.iqiyi.com/h5/mina/board/playIndex/?cid=6&dim=day&len=10&pageNumber=1&play_platform=H5_QIYI
    + **解析地址**
        * 默认从cid=**-1**(**-1为总榜**,**2为电视剧**,**1为电影**)
        * **cid**控制顶部大分类的数据切换
        * **dim**控制大分类下的热度榜(dim=hour-**默认**)/飙升榜(dim=hour)/播放指数榜(dim=day)
        * **pageNumber**控制下拉加载--每次返回10条数据，数据累加合并

### 4.我的页面
    需登陆
**调用爱奇艺账号登录**

```
    跳转到账号登录页面
    手机号进行登录
```

**调用微信登录**
```
    wx.login
    调用wx.getUserInfo
```
