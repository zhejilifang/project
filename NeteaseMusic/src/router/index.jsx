import React from 'react';
import { Router } from 'dva/router';
// 引入配置路由组件
import RouterView from './RouterView'

// 引入一级路由
import TabPage from '../views/TabPage'
// 引入二级路由
import DiscoverPage from '../views/tab/DiscoverPage'



// 路由配置信息
let config = {
  routes: [{
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