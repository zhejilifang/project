import Vue from 'vue'
// 引入cookie操作
import Cookies from 'js-cookie'
// 引入公共样式，消除浏览器的差异
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import '@/styles/index.scss' // global css
// 引入根组件
import App from './App'
// 引入路由配置
import router from './router'
// 引入数据管理
import store from './store'
// 引入国际化配置
import i18n from './lang' // Internationalization
// 引入icon图标库
import './icons' // icon
// 引入错误日志
import './errorLog' // error log
// 引入权限管理
import './permission' // permission control
// 引入mock拦截请求
import './mock' // simulation data
// 引入自定义过滤器
import * as filters from './filters' // global filters
// 引入自定义指令
import permission from './directive/permission/index'
// 引入v-charts
import VCharts from 'v-charts'

// 挂载v-charts
Vue.use(VCharts)

// 挂载自定义指令
Vue.directive('permission', permission)

// 使用element-ui
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// 挂载全局自定义过滤器
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 去掉生成环境提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})