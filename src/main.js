import Button from './components/Button/Button'

const install = function (Vue, config = {}) {
  if (install.installed) {
    return
  }

  Vue.component('M' + Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button
}
