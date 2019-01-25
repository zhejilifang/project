import Vue from 'vue'
import App from './App.vue'

// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

new Vue({
  el: '#app',
  render: h => h(App)
})
