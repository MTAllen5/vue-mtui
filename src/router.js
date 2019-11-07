import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import NotFound from './views/404'
import Button from './views/Button'
import Icon from './views/Icon'
import Title from './views/Title'
import Panel from './views/Panel'
import Cell from './views/Cell'
import Grid from './views/Grid'
import Alert from './views/Alert'
import Confirm from './views/Confirm'
import Toast from './views/Toast'
import Input from './views/Input'
import Datepicker from './views/Datepicker'
import Form from './views/Form'
import Loading from './views/Loading'
import LoadingBar from './views/LoadingBar'

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
    { path: '/demo/datepicker', name: 'datepicker', component: Datepicker },
    { path: '/demo/form', name: 'form', component: Form },
    { path: '/demo/loading', name: 'loading', component: Loading },
    { path: '/demo/loadingbar', name: 'loadingbar', component: LoadingBar },
    { path: '/:other/:subOther?', name: '404', component: NotFound }
  ]
})
