import Cell from './Cell'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell
