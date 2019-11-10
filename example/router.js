import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

import Button from './views/Button'
import Icon from './views/Icon'
import Title from './views/Title'
import Panel from './views/Panel'
import Cell from './views/Cell'
import Grid from './views/Grid'

import Dialog from './views/Dialog'
import Alert from './views/Alert'
import Confirm from './views/Confirm'
import Toast from './views/Toast'
import Loading from './views/Loading'
import LoadingBar from './views/LoadingBar'

import Input from './views/Input'
import Textarea from './views/Textarea'
import Switch from './views/Switch'
import Counter from './views/Counter'
import Form from './views/Form'

import NotFound from './views/404'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },

    { path: '/buttons', name: 'buttons', component: Button },
    { path: '/icons', name: 'icons', component: Icon },
    { path: '/titles', name: 'titles', component: Title },
    { path: '/panels', name: 'panels', component: Panel },
    { path: '/cells', name: 'cells', component: Cell },
    { path: '/grids', name: 'grid', component: Grid },

    { path: '/dialogs', name: 'dialogs', component: Dialog },
    { path: '/alert', name: 'alert', component: Alert },
    { path: '/confirm', name: 'confirm', component: Confirm },
    { path: '/toast', name: 'toast', component: Toast },
    { path: '/loading', name: 'loading', component: Loading },
    { path: '/loadingbar', name: 'loadingbar', component: LoadingBar },

    { path: '/inputs', name: 'inputs', component: Input },
    { path: '/textareas', name: 'textareas', component: Textarea },
    { path: '/switchs', name: 'switchs', component: Switch },
    { path: '/counters', name: 'counters', component: Counter },
    { path: '/form', name: 'form', component: Form },

    { path: '/:other', name: '404', component: NotFound }
  ]
})
