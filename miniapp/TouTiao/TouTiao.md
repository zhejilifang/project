# 今日头条小程序的接口

## 首页
### 获取顶部tab
- url: get https://m.toutiao.com/pwa/api/wxapp/settings/?extra=jPWuEOiMajY1K3oh/wmrUgFGTCFxibxyezc4olGR3FoKpxz/CQXAiJ0vQ5iKOYtnYEy9FavJoVQdeRqbrFkriAGUc9u324ZOIxTf/YJAuI0Ao4PHucxsAE+EvWTyo+x4T/bGtfAqgW2FeQ/jkyZ4bXPqoK6PbmVYZTiLOKag+YIM57nIkI5D+ioccX1xhE5SZA1o1EvMb7fkc5adgk4UqiCVSkExXWkDOQJ3TPk9wivF3u9Bu+/XAMqIt+ra5aaoF7KKO6nD8Ze05I9bOxDj8wveCmEBSRpDXdsvGnJewJnoCY3sdPoVXo164cy7Heguy4Zv5l6e8Na4znDjhcAVqq4vC5n9oUwhquJ05aH6B2azLSakDCqTiABt7ljcenTHtYG/nyoF+3cMSeByRDh7w5sCPh4p9vLHFmbBzznaH+1oYAhxgCvRhbOT5IAMDNqzBNAjugjSqlV4TYH+i2a11E79P3UUJFIfnEbRwX5wuUPclaykJVWHlfFbTZdktEhtv3ECJt6tYXz0NovWMdCAnb/77hpivdOO5CQJtpD94jX18AQpAmWZdyIBz8V0jC63b3x05xN/LBCAWFJiMyxDPJmeHDRvQasvLgiCJDZwkZW3XG7v+vivBx4r/F1eQocXhHtSFlI9kCkulUGYbYjy5mHfCNdK1XYN9CgcXeGmMBUIVOVkJT/AyfLIjFbG/p5YYon9hOuJQrQU6/Xuk505YoP2WMUv4VuXfneoMt3dWRc=

### 分类tab切换
- url: get https://lf.snssdk.com/api/news/feed/v66/?language=zh-Hans-CN&count=20&category=[tab分类]&aid=1162&min_behot_time=[分页behot_time]&device_id=6650307045722932750

### 获取资讯详情
- url: get https://m.toutiao.com/pwa/api/wxapp/info/[资讯的id]/

### 获取资讯评论
- url: get https://ib.snssdk.com/article/v1/tab_comments/?group_id=[资讯的id]&&tab_index=0&count=[分页数量]&offset=[分页偏移]

### 生成小程序码
- url: get https://m.toutiao.com/pwa/api/wxapp/wxacode/?id=[资讯的id]&group_id=[资讯的id]&channel=0&page=pages/detail/detail

### 搜索提示接口
- url: get https://lf.snssdk.com/2/article/search_sug/?keyword=[搜索关键字]&device_id=6650307045722932750

### 搜索结果接口
- url: get https://lf.snssdk.com/api/2/wap/search_content/?keyword=[搜索关键字]&count=10&format=json&offset=[分页偏移]&search_text=[搜索提示结果]&device_id=6650307045722932750