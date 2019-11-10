import Counter from './Counter'

Counter.install = function (Vue) {
  Vue.component(Counter.name, Counter)
}

export default Counter
