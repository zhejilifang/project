import Vue from 'vue';
import VueRouter from 'vue-router';

//获取token
import { getToken } from "@/utils/index";
// 获取登录状态
import { goLogin } from "@/api/index";

Vue.use(VueRouter);

//引入组件
/* import IndexPage from '@/pages/Index';
import FAQ from "@/pages/FAQ";
import AddressPage from "@/pages/Address"; */

// 优化组件引入 按需加载 注意 手机映射不显示页面
const IndexPage = () =>
    import ('@/pages/Index');
const FAQ = () =>
    import ('@/pages/FAQ');
const AddressPage = () =>
    import ('@/pages/Address');
const DrawImage = () =>
    import ('@/pages/DrawImage');

// 实例化路由
const router = new VueRouter({
    routes: [{
        path: '/index',
        component: IndexPage
    }, {
        path: '*',
        redirect: '/index'
    }, {
        path: '/FAQ',
        component: FAQ
    }, {
        path: '/address',
        component: AddressPage
    }, {
        path: '/drawImage',
        component: DrawImage
    }]
})

// 路由守卫检查登录状态
router.beforeEach((to, from, next) => {
    if (getToken()) {
        next();
    } else {
        goLogin();
    }
})

router.afterEach((to, from) => {

})

export default router;