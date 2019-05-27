import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from './layout'
import Vscode from './vscode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '12',
      component: AppLayout
      // redirect: '/home',
      // children: []
    },
    {
      path: '/vscode',
      name: 'vscode',
      component: Vscode
      // redirect: '/home',
      // children: []
    }
  ]
})
