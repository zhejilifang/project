import request from '@/utils/request'
// 用户登录
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}

// 用户注册
export function registerByUsername(username, password, phone) {
  const data = {
    username,
    password,
    phone
  }
  console.log(data);
  return request({
    url: '/users/register',
    method: 'post',
    data
  })
}

// 用户退出登录
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/users/info',
    method: 'get'
  })
}