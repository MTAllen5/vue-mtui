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
import Dialog from './components/dialog'
import Alert from './components/alert'
import Confirm from './components/confirm'
import Toast from './components/toast'
import Loading from './components/loading'
import LoadingBar from './components/loadingbar'
// 表单
import Input from './components/input'
import Switch from './components/switch'

const components = {
  Button,
  Icon,
  Title,

  Box,
  Cell,
  Grid,
  GridItem,
  Panel,

  Dialog,
  Alert,
  Confirm,
  Toast,
  Loading,
  LoadingBar,

  Input,
  Switch
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
