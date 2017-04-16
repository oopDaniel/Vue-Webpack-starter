import Vue from 'vue'
import Router from 'vue-router'

import UserView from '../components/views/UserView'
import Dashboard from '../components/User/Dashboard'
import Info from '../components/User/Info'

Vue.use(Router)

const AdminView = resolve =>
  require.ensure(['../components/views/AdminView'], () => resolve(
    require('../components/views/AdminView')
  ), 'admin')
const AdminDashboard = resolve =>
  require.ensure(['../components/Admin/Dashboard'], () => resolve(
    require('../components/Admin/Dashboard')
  ), 'admin')

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
          component: Info
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
