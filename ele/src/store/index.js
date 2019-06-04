import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入模块
import Navlist from "./modules/getNavlist"
import index from './modules/index'

export default new Vuex.Store({
  modules: {
    index,
    Navlist
  },
  plugins: [Logger()]
})
