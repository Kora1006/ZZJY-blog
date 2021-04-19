import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: true, // 是否展开导航栏
  },
  mutations: {
    ['SET_COLLAPSED'](state, collapsed) {
      state.isCollapse = collapsed
    }
  },
  actions: {
    setCollapsed(context, value) {
      context.commit('SET_COLLAPSED', value);
    }
  },
  modules: {
  },
  getters: {
    collapsed:state => state.isCollapse
  }
})
