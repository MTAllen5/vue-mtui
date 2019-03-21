import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* 导入基础组件 start */
// import Alert from './components/base/alert'
// import Confirm from './components/base/confirm'
// import Toast from './components/base/toast'
// import Loading from './components/base/loading'
// import LoadingBar from './components/base/loadingbar'

// Vue.use(Alert)
// Vue.use(Confirm)
// Vue.use(Toast)
// Vue.use(Loading)
// Vue.use(LoadingBar)

// const requireComponent = require.context(
//   './components/base', // 其组件目录的相对路径
//   false, // 是否查询其子目录
//   /[A-Z]\w+\.(vue|js)$/ // 匹配基础组件文件名的正则表达式
// )

// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName)

//   // 获取组件的 PascalCase 命名
//   const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1') // 剥去文件名开头的 `./` 和结尾的扩展名

//   // 全局注册组件
//   Vue.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })
/* 导入基础组件 end */

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
