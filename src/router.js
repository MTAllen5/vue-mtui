import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'
import Button from './views/Button.vue'
import Icon from './views/Icon.vue'
import Title from './views/Title.vue'
import Panel from './views/Panel.vue'
import Cell from './views/Cell.vue'
import Grid from './views/Grid.vue'
import Alert from './views/Alert.vue'
import Confirm from './views/Confirm.vue'
import Toast from './views/Toast.vue'
import Input from './views/Input.vue'
import Form from './views/Form.vue'
import Loading from './views/Loading.vue'
import LoadingBar from './views/LoadingBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo/buttons', name: 'buttons', component: Button },
    { path: '/demo/icons', name: 'icons', component: Icon },
    { path: '/demo/titles', name: 'titles', component: Title },
    { path: '/demo/panels', name: 'panels', component: Panel },
    { path: '/demo/cells', name: 'cells', component: Cell },
    { path: '/demo/grids', name: 'grid', component: Grid },
    { path: '/demo/alert', name: 'alert', component: Alert },
    { path: '/demo/confirm', name: 'confirm', component: Confirm },
    { path: '/demo/toast', name: 'toast', component: Toast },
    { path: '/demo/inputs', name: 'inputs', component: Input },
    { path: '/demo/form', name: 'form', component: Form },
    { path: '/demo/loading', name: 'loading', component: Loading },
    { path: '/demo/loadingbar', name: 'loadingbar', component: LoadingBar },
    { path: '/:other/:subOther?', name: '404', component: NotFound }
  ]
})
