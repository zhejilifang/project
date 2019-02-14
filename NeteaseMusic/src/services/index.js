import request from '../utils/request';

export function getBanner() {
  return request('/banner');
}