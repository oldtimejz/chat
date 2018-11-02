import Vue from 'vue'
import Router from 'vue-router'
import Self from '@/components/Self'
import Chat from '@/components/Chat'
import Record from '@/components/Record'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Room from '@/components/Room'
import BaseWebView from '../BaseWebView'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseWebView',
      component: BaseWebView,
      children: [
        {
          path: '/',
          name: 'Record',
          component: Record
        },
        {
          path: '/room',
          name: 'Room',
          component: Room
        }
      ]
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register
    }
  ]
})
