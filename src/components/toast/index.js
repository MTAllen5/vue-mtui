import Toast from './Toast'

Toast.install = function (Vue, options = {}) {
  
  Vue.prototype.$toast = (params) => {
    // 创建子类
    let ToastConstructor = Vue.extend(Toast)
    let ToastInstance = new ToastConstructor().$mount()

    if (typeof params === 'string') {
      ToastInstance.$data.message = params
    } else if (typeof params === 'object') {
      if (params.message && typeof params.message === 'string') {
        Object.keys(ToastInstance.$data).forEach(key => {
          if (typeof params[key] !== 'undefined') {
            ToastInstance.$data[key] = params[key]
          }
        })
      } else {
        throw new TypeError('错误的提示文本类型')
      }
    } else {
      throw new TypeError('参数错误')
    }

    document.body.appendChild(ToastInstance.$el)
    setTimeout(function () {
      document.body.removeChild(ToastInstance.$el)
    }, ToastInstance.$data.timeout)
  }

  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (params) => {
      if (typeof params === 'string') {
        params = {
          message: params,
          type: type
        }
      } else if (typeof params === 'object') {
        params.type = type
      } else {
        throw new TypeError('参数错误')
      }
      return Vue.prototype.$toast(params)
    }
  })
}

export default Toast
