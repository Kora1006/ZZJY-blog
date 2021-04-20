import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: true, // 是否展开导航栏
    netWork: 'online', // 当前是否断网
  },
  mutations: {
    ['SET_COLLAPSED'](state, collapsed) {
      state.isCollapse = collapsed
    },
    ['SET_NETWORK'](state, network) {
      state.netWork = network
    }
  },
  actions: {
    setCollapsed(context, value:boolean) {
      context.commit('SET_COLLAPSED', value);
    },
    setNetWork(context, value:string) {
      context.commit('SET_NETWORK', value);
    }
  },
  modules: {
  },
  getters: {
    collapsed:state => state.isCollapse,
    netWork: state => state.netWork,
  }
})
