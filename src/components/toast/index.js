import Toast from './Toast'

Toast.install = function (Vue, options = {}) {
  // 创建子类
  let ToastConstructor = Vue.extend(Toast)
  let ToastInstance = new ToastConstructor().$mount()

  Vue.prototype.$toast = (message, type, timeout) => {
    if (typeof message === 'string') {
      ToastInstance.$data.message = message
    }
    if (typeof type === 'string') {
      ToastInstance.$data.type = type
    }
    if (typeof timeout === 'number') {
      ToastInstance.$data.timeout = timeout
    }

    document.body.appendChild(ToastInstance.$el)
    setTimeout(function () {
      document.body.removeChild(ToastInstance.$el)
    }, ToastInstance.$data.timeout)
  }

  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

export default Toast