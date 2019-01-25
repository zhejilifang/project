import request from '@/utils/request'
// 获取用户列表
export function getUserList(params) {
  // console.log('params...', params)
  return request({
    url: '/users/list',
    method: 'get',
    params
  })
}

// 更改用户信息
export function updateUserInfo(data) {
  // console.log('data...', data)
  return request({
    url: '/users/update',
    method: 'post',
    data
  })
}

// 删除用户信息
export function deleteUserInfo(data) {
  // console.log('id...data', data)
  return request({
    url: '/users/action',
    method: 'delete',
    data
  })
}

// 分配用户角色
export function modifyRoler(data) {
  // console.log('id...data', data)
  return request({
    url: '/users/action',
    method: 'put',
    data
  })
}

// 获取提交记录
export function getCommitData() {
  return request({
    url: '/users/commit',
    method: 'get'
  })
}