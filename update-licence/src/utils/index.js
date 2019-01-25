import Cookie from 'js-cookie';

// 获取token
export let getToken = () => {
    return Cookie.get('chelun_acToken') || '';
}