import Loadingbar from './Loadingbar'

Loadingbar.install = function (Vue, options = {}) {
  // 创建子类，插入到DOM中
  let LoadingBarConstructor = Vue.extend(Loadingbar)
  let LoadingBarInstance = new LoadingBarConstructor().$mount()
  document.body.appendChild(LoadingBarInstance.$el)

  Vue.prototype.$loadingbar = {
    start: LoadingBarInstance.start,
    set: LoadingBarInstance.setPercent,
    finish: LoadingBarInstance.finish,
    isLoading: LoadingBarInstance.isLoading
  }
}

export default Loadingbar
