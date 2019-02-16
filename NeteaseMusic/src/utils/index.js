import Cookie from 'js-cookie';

export function setToken(token) {
  Cookie.set('token', token, { expires: 3 })
}

export function getToken() {
  return Cookie.get('token')
}

export function removeToken() {
  Cookie.remove('token')
}