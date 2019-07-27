import Vue from 'vue'
import Router from 'vue-router'
import Compare from './views/Compare.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'compare' }
    },
    {

      path: '/compare',
      name: 'compare',
      component: Compare
    }
  ]
})
