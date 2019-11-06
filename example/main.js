import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mtui from '@/main'

Vue.use(Mtui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
