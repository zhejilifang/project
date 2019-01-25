import Vue from "vue";
import Router from "vue-router";
import Login from "../components/login";
import LoginPage from "../components/loginPage";
import Vip from "../components/vip";
import RegistryPage from "../components/registry";
import Index from "../components/indexPage";
import Found from "../components/indexSub/found";
import Recommend from "../components/indexSub/recommend";
import Station from "../components/indexSub/station";
import Movie from "../components/indexSub/movie";
import Mine from "../components/indexSub/mine";
import Friend from "../components/indexSub/friend";
import Account from "../components/indexSub/account";


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index/found'
    }, {
        path: '/toLogin',
        name: 'Login',
        component: Login
    }, {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    }, {
        path: '/registry',
        name: 'RegistryPage',
        component: RegistryPage
    }, {
        path: '/index',
        name: 'Index',
        component: Index,
        children: [{
            path: 'found',
            component: Found,
            children: [{
                path: '',
                redirect: 'recommend'
            }, {
                path: 'recommend',
                component: Recommend
            }, {
                path: 'station',
                component: Station
            }]
        }, {
            path: 'movie',
            component: Movie
        }, {
            path: 'mine',
            component: Mine
        }, {
            path: 'friend',
            component: Friend
        }, {
            path: 'account',
            component: Account
        }]
    }, {
        path: '/vip',
        component: Vip
    }]
})