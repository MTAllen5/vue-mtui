// 基本元素
import Button from './components/button'
import Icon from './components/icon'
import Title from './components/title'
// 布局
import Box from './components/box'
import Cell from './components/cell'
import Grid from './components/grid/index_grid'
import GridItem from './components/grid/index_grid_item'
import Panel from './components/panel'
// 消息弹窗
import Alert from './components/alert'
import Dialog from './components/dialog'

const components = {
  Button,
  Icon,
  Title,

  Box,
  Cell,
  Grid,
  GridItem,
  Panel,

  Alert,
  Dialog
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
