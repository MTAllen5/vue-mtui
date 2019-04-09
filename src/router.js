import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'
import Button from './views/Button.vue'
import Icon from './views/Icon.vue'
import Title from './views/Title.vue'
import Panel from './views/Panel.vue'
import Grid from './views/Grid.vue'
import Alert from './views/Alert.vue'
import Confirm from './views/Confirm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo/buttons', name: 'buttons', component: Button },
    { path: '/demo/icons', name: 'icons', component: Icon },
    { path: '/demo/titles', name: 'titles', component: Title },
    { path: '/demo/panels', name: 'panels', component: Panel },
    { path: '/demo/grids', name: 'grid', component: Grid },
    { path: '/demo/alert', name: 'alert', component: Alert },
    { path: '/demo/confirm', name: 'confirm', component: Confirm },
    { path: '/:other/:other?', name: '404', component: NotFound }
  ]
})
