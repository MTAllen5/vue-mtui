import Loading from './Loading'

Loading.install = function (Vue, options = {}) {
  // 创建子类，插入到DOM中
  let LoadingConstructor = Vue.extend(Loading)
  let LoadingInstance = new LoadingConstructor().$mount()
  document.body.appendChild(LoadingInstance.$el)

  Vue.prototype.$loading = (isLoading, title) => {
    if (isLoading) {
      // 配置参数
      if (title) {
        LoadingInstance.$data.title = title
      }

      LoadingInstance.show()
    } else {
      LoadingInstance.hide()
    }
  }
}

export default Loading
