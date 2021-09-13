import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme : false
  },
  mutations: {
    TOGGLE_THEME(state) {
      state.darkTheme = !state.darkTheme
      if (state.darkTheme === true) {
        localStorage.setItem('THEME','DARK')
      } else {
        localStorage.setItem('THEME','LIGHT')
      }
    },
    GET_THEME(state) {
      let theme = localStorage.getItem('THEME')
      if (theme === 'DARK') {
        state.darkTheme = true
      }else {
        state.darkTheme = false
      }
    }
  },
  actions: {
    toggleTheme({commit}) {
      commit('TOGGLE_THEME')
    },
    getTheme({commit}) {
      commit('GET_THEME')
    }
  },
  modules: {
  }
})
