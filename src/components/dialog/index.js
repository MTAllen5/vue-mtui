import Dialog from './Dialog'

Dialog.install = function (Vue, options = {}) {
  Vue.component(Dialog.name, Dialog)
}

export default Dialog
