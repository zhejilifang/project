import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import index from "./modules/index";
import detail from "./modules/detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    index,
    detail
  },
  plugins: [createLogger()]
})