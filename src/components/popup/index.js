import Popup from './Popup'

Popup.install = function (Vue, options = {}) {
  Vue.component(Popup.name, Popup)
}

export default Popup
