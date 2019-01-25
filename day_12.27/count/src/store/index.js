import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import app from "./modules/app";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app
    },
    state: {
        name: '李大爷',
        age: 28
    },
    plugins: [createLogger()]
})