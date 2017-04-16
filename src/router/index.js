import Vue from 'vue'
import Router from 'vue-router'

import UserView from '../components/views/UserView'
import Dashboard from '../components/views/Dashboard'
import User from '../components/views/User'

const AdminView = resolve =>
  require.ensure(['../components/views/Admin/AdminView'], () => resolve(
    require('../components/views/Admin/AdminView')
  ), 'admin')
const AdminDashboard = resolve =>
  require.ensure(['../components/views/Admin/AdminDashboard'], () => resolve(
    require('../components/views/Admin/AdminDashboard')
  ), 'admin')

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
