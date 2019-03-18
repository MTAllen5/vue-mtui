import Alert from './Alert'

Alert.install = function (Vue, options = {}) {
  // 创建子类，插入到DOM中
  let AlertConstructor = Vue.extend(Alert)
  let AlertInstance = new AlertConstructor().$mount()
  document.body.appendChild(AlertInstance.$el)

  Vue.prototype.$alert = (options) => {
    if (typeof options !== 'number' && typeof options !== 'string' && typeof options !== 'object') {
      throw new Error('alert: 不合法的参数类型')
    }

    // 配置参数
    if (typeof options === 'number' || typeof options === 'string') {
      AlertInstance.$data.message = options
    } else if (typeof options === 'object') {
      let keys = Object.keys(AlertInstance.$data)
      keys.forEach(key => {
        if (typeof options[key] !== 'undefined' && options[key] !== null) {
          AlertInstance.$data[key] = options[key]
        }
      })
    }

    AlertInstance.show()
  }
}

export default Alert
