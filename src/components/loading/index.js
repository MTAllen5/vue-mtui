import Loading from './Loading'

Loading.install = function (Vue, options = {}) {
  // 创建子类，插入到DOM中
  let LoadingConstructor = Vue.extend(Loading)
  let LoadingInstance = new LoadingConstructor().$mount()
  document.body.appendChild(LoadingInstance.$el)

  Vue.prototype.$loading = (type, tips) => {
    // 配置参数
    if (tips) {
      LoadingInstance.$data.tips = tips
    }

    LoadingInstance[type]()
  }

  ['show', 'hide'].forEach(type => {
    Vue.prototype.$loading[type] = (tips) => {
      return Vue.prototype.$loading(type, tips)
    }
  })
}

export default Loading
