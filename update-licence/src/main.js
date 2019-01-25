import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index";
import store from "@/store/index";

// 引入vant库插件
import { Popup, Picker, Area, Toast } from 'vant';

Vue.use(Popup);
Vue.use(Picker);
Vue.use(Area);
Vue.use(Toast);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})