import Mask from './Mask'

Mask.install = function (Vue, options = {}) {
  // 创建子类，插入到DOM中
  let MaskConstructor = Vue.extend(Mask)
  let MaskInstance = new MaskConstructor().$mount()
  document.body.appendChild(MaskInstance.$el)

  Vue.prototype.$mask = (type) => {
    MaskInstance[type]()
  }

  ['show', 'hide'].forEach(type => {
    Vue.prototype.$mask[type] = () => {
      return Vue.prototype.$mask(type)
    }
  })
}

export default Mask
