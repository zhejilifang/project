// set function parseTime,formatTime to filter
export { parseTime, formatTime }
from '@/utils'

// 复数+s
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

// 判断过去多少时间
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

// 数字 格式化
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

// 千分符
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 时间搓格式化
export function formatDate(time) {
  let date = new Date();
  date.setTime(time);
  let year = date.getFullYear(),
    month = (date.getMonth() + 1).toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0'),
    hour = date.getHours().toString().padStart(2, '0'),
    min = date.getMinutes().toString().padStart(2, '0'),
    sec = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}