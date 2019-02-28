import React from 'react';
import { Router } from 'dva/router';
// 引入配置路由组件
import RouterView from './RouterView'
// 引入路由按需加载
import dynamic from 'dva/dynamic';

// 引入一级路由
// import TabPage from '@/views/TabPage'
// import LoginPage from '@/views/LoginPage'
// import SearchPage from '@/views/SearchPage'
// import PlayPage from '@/views/PlayPage'
const TabPage = dynamic({
  component: () => import('@/views/TabPage'),
});
const LoginPage = dynamic({
  component: () => import('@/views/LoginPage'),
});
const SearchPage = dynamic({
  component: () => import('@/views/SearchPage'),
});
const PlayPage = dynamic({
  component: () => import('@/views/PlayPage'),
});

// 引入二级路由
// import DiscoverPage from '@/views/tab/DiscoverPage'
// import AccountPage from '@/views/tab/AccountPage'
// import Login from '@/views/login/Login'
// import Register from '@/views/login/Register'
const DiscoverPage = dynamic({
  component: () => import('@/views/tab/DiscoverPage'),
});
const AccountPage = dynamic({
  component: () => import('@/views/tab/AccountPage'),
});
const Login = dynamic({
  component: () => import('@/views/login/Login'),
});
const Register = dynamic({
  component: () => import('@/views/login/Register'),
});

// 引入三级路由
// import Recomment from '@/views/tab/discover/Recomment'
// import Radio from '@/views/tab/discover/Radio'
const Recomment = dynamic({
  component: () => import('@/views/tab/discover/Recomment'),
});
const Radio = dynamic({
  component: () => import('@/views/tab/discover/Radio'),
});




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
    path: '/search',
    component: SearchPage
  }, {
    path: '/play/:ids?',
    component: PlayPage
  }, {
    path: '/tab',
    component: TabPage,
    children: [{
      path: '/tab/discover',
      component: DiscoverPage,
      children: [{
        path: "/tab/discover/recomment",
        component: Recomment
      }, {
        path: "/tab/discover/radio",
        component: Radio
      }]
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
      component: AccountPage
    }]
  }, {
    path: '*',
    redirect: '/tab/discover/recomment'
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