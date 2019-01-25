import Vue from 'vue'
import Router from 'vue-router'
import GoHome from '@/components/GoHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'GoHome',
    component: GoHome
  }]
})