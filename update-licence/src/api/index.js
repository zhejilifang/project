import JSBridge from '@/utils/JSBridge.js';

// 封装请求函数
let sendRequest = (url, method = 'GET', data = {}) => {
    let params = {
        method,
        headers: {
            'content-type': 'application/json'
        }
    };
    if (method == 'POST') {
        params.body = JSON.stringify(data)
    };
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    };
    return fetch(url, params).then(res => res.json()).then(body => body);
}

// 图片上传
export let uploadImg = (type) => {
    return new Promise((resolve, reject) => {
        JSBridge.invoke('device', 'chooseImage', {
            type,
            chooseCallbackName: function(res) {
                resolve(res);
            }
        })
    })
}

// 请求签发城市列表
export let cityList = () => {
    return sendRequest('/api1/ExchangeJiaZhao/cityList')
}

// 请求补换城市列表
export let costList = (...params) => {
    return sendRequest(`/api1/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`)
}

// 唤起登录接口
export let goLogin = () => {
    JSBridge.invoke('app', 'login', {
        loginCallBackName: () => window.reload()
    });
}

// 获取用户是否是会员
export let isVip = () => {
    return sendRequest('/api2/api/status')
}

// 唤起分享接口
export let goShare = () => {
    JSBridge.invoke('ui', 'shareMessage');
}

// 唤起支付接口
export let goPay = () => {
    JSBridge.invoke('app', 'pay', {
        price: 398.00,
        orderNum: '6486860195682793473',
        channels: ["weixin", "alipay", "baidu"],
        callbackUrl: 'https://h5.chelun.com/2017/update-licence2/order.html'
    });
}

// 上传base64图片
export let uploadBase64 = (base64) => {
    return sendRequest('http://123.206.55.50:11000/upload_base64', 'POST', { base64 })
}

// 图片转base64格式
export let imgToBase64 = (url) => {
    return sendRequest('http://123.206.55.50:11000/tobase64', 'POST', { url })
}