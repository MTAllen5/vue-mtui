import Confirm from './Confirm'

Confirm.install = function (Vue, options = {}) {
  // 创建子类，插入到DOM中
  let ConfirmConstructor = Vue.extend(Confirm)
  let ConfirmInstance = new ConfirmConstructor().$mount()
  document.body.appendChild(ConfirmInstance.$el)

  Vue.prototype.$confirm = (options) => {
    if (typeof options !== 'number' && typeof options !== 'string' && typeof options !== 'object') {
      throw new Error('alert: 不合法的参数类型')
    }

    // 配置参数
    if (typeof options === 'number' || typeof options === 'string') {
      ConfirmInstance.$data.message = options
    } else if (typeof options === 'object') {
      let keys = Object.keys(ConfirmInstance.$data)

      keys.forEach(key => {
        if (typeof options[key] !== 'undefined' && options[key] !== null) {
          ConfirmInstance.$data[key] = options[key]
        }
      })
    }

    ConfirmInstance.show()
  }
}

export default Confirm
