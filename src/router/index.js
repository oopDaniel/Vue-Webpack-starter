import Vue from 'vue'
import Router from 'vue-router'

import AdminView from '../components/views/AdminView'
import AdminDashboard from '../components/views/AdminDashboard'
import UserView from '../components/views/UserView'
import Dashboard from '../components/views/Dashboard'
import User from '../components/views/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UserView,
      children: [
        {
          path: '/',
          component: Dashboard
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {
          path: '/',
          component: AdminDashboard
        }
      ]
    }
  ]
})
