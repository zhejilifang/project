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

export function formatTime(time) {
  let min = Math.floor(time / 60),
    sec = Math.ceil(time % 60);
  return `${min>9?min:'0'+min}:${sec>9?sec:'0'+sec}`
}