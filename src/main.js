import Alert from './components/alert'
import Box from './components/box'
import Button from './components/button'
import Cell from './components/cell'
import Icon from './components/icon'
import Panel from './components/panel'
import Title from './components/title'

const components = {
  Alert,
  Box,
  Button,
  Cell,
  Icon,
  Panel,
  Title
}

const install = function (Vue, config = {}) {
  if (install.installed) return

  Object.keys(components).forEach(component => {
    if (component !== 'install') {
      components[component].install(Vue)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

components.install = install

export default components
