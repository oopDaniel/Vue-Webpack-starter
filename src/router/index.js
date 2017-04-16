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

const Signup = resolve =>
  require.ensure(['../components/views/Signup'], () => resolve(
    require('../components/views/Signup')
  ), 'login')

const Signin = resolve =>
  require.ensure(['../components/User/Signin'], () => resolve(
    require('../components/User/Signin')
  ), 'login')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UserView,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/user',
          name: 'info',
          component: Info
        },
        {
          path: '/signin',
          name: 'signin',
          component: Signin
        }
      ]
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {
          path: '/',
          name: 'adminDashboard',
          component: AdminDashboard
        }
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
