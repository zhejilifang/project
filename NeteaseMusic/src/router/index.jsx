import React from 'react';
import { Router } from 'dva/router';
// 引入配置路由组件
import RouterView from './RouterView'

// 引入一级路由
import TabPage from '@/views/TabPage'
import LoginPage from '@/views/LoginPage'
// 引入二级路由
import DiscoverPage from '@/views/tab/DiscoverPage'
import Login from '@/views/login/Login'
import Register from '@/views/login/Register'



// 路由配置信息
let config = {
  routes: [{
    path: '/login',
    component: LoginPage,
    children: [{
      path: '/login/login',
      component: Login
    }, {
      path: '/login/register',
      component: Register
    }]
  }, {
    path: '/tab',
    component: TabPage,
    children: [{
      path: '/tab/discover',
      component: DiscoverPage
    }, {
      path: '/tab/video',
      component: props => <p>{JSON.stringify(props)}</p>
    }, {
      path: '/tab/friend',
      component: props => <p>{JSON.stringify(props)}</p>
    }, {
      path: '/tab/my',
      component: props => <p>{JSON.stringify(props)}</p>
    }, {
      path: '/tab/account',
      component: props => <p>{JSON.stringify(props)}</p>
    }]
  }, {
    path: '*',
    redirect: '/tab/discover'
  }]
}

// 导出根路由配置
export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={config.routes}></RouterView>
    </Router>
  );
}