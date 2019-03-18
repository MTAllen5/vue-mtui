/**
 * axios基础封装类
 */

import Vue from 'vue'
import Axios from 'axios'

let requestTimeMap = {}

Axios.defaults.timeout = 3000 // 请求超时时间
Axios.defaults.withCredentials = true // 是否允许携带cookie

/**
 * 请求拦截器
 */
Axios.interceptors.request.use(config => {
  // 请求节流
  let time = requestTimeMap[config.url]
  if (time !== undefined) {
    let now = new Date().getTime()
    let diff = now - time
    if (diff <= 500) {
      console.log('重复点击=' + diff)
    } else {
      requestTimeMap[config.url] = now
    }
  } else {
    requestTimeMap[config.url] = new Date().getTime()
  }

  return config
}, error => {
  console.log(error.data.message)
  return Promise.reject(error)
})

/**
 * 返回状态判断(添加响应拦截器)
 */
Axios.interceptors.response.use(res => {
  if (res.data && res.data.code !== 1) {
    if (res.data.bizCode === '9999') {
      // 未登录，跳转到登录模块去
      Vue.prototype.$router.push({
        path: '/login',
        query: {
          type: 0
        }
      })
    } else {
      console.log(res.data.message)
    }

    return Promise.reject(res)
  }
  return res.data
}, error => {
  // 服务器异常提示
  if (error && error.response) {
    switch (error.response.status) {
      case 400: error.message = '错误请求'; break
      case 404: error.message = '请求错误,未找到该资源'; break
      case 408: error.message = '请求超时'; break
      case 500: error.message = '服务器端异常'; break
      default: error.message = `连接错误${error.response.status}`
    }
  } else if (error.message === 'repeatRequest') {
    console.log('重复请求数据: ====== ')
    return Promise.reject(error)
  } else {
    error.message = '连接到服务器失败'
  }
  console.log('错误日志:======')
  console.log(error)

  return Promise.reject(error) // 返回response的错误信息
})

Vue.prototype.$http = Axios
