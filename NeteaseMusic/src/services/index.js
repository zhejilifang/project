import request from '@/utils/request';

export function getBanner() {
  return request('/banner');
}

export function getPersonalized() {
  return request('/personalized')
}

export function login(phone, password) {
  return request(`/login/cellphone?phone=${phone}&password=${password}`)
}

export function loginStatus() {
  return request('/login/status')
}

export function getUserDetail(userId) {
  return request(`/user/detail?uid=${userId}`)
}