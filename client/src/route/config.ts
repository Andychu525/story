import { RouteConfig } from 'vue-router'
import { BasicLayout } from '@/layout'

export const routerMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: BasicLayout,
        meta: {
          title: '总览',
          keepAlive: true,
          icon: 'dashboard',
          permission: ['dashboard']
        },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            meta: {
              title: '分析页',
              keepAlive: false,
              permission: ['dashboard']
            }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            meta: {
              title: '工作台',
              keepAlive: true,
              permission: ['dashboard']
            }
          }
        ]
      },
      {
        path: '/project',
        name: 'project',
        redirect: '/project/index',
        component: BasicLayout,
        meta: {
          title: '项目',
          icon: 'edit',
          permission: ['dashboard']
        },
        children: [
          {
            path: '/project/index',
            name: 'Project',
            meta: {
              title: '分析页'
            }
          }
        ]
      }
    ]
  }
]
