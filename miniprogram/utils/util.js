const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 用于activity_home.js 将数据以时间顺序排列
 * 将储存的data.time转为String, 移除秒数
 * @param {*} data input data
 */
const modifyData = data => {
  var modified = data.sort((a, b) => b.time - a.time)
  for (let i in modified) {
    modified[i].time = formatTime(modified[i].time)
    modified[i].time = modified[i].time.substring(0, modified[i].time.length - 3)
  }
  return modified
}

module.exports = {
  formatTime: formatTime,
  modifyData: modifyData
}