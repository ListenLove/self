import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showRegisterPage: false,
    themes: ['light', 'dark'],
    themeNow: 'light'
  },
  mutations: {
    setShowRegisterPage: (state, flag) => {
      state.showRegisterPage = flag
    },
    setThemeNow: (state, theme) => {
      state.themeNow = theme
    }
  },
  actions: {
    setShowRegisterPage: ({commit}, flag) => {
      commit('setShowRegisterPage', flag)
    },
    setThemeNowAct: ({commit}, theme) => {
      commit('setThemeNow', theme)
    }
  },
  getters: {
    isShowRegisterPage: state => {
      return state.showRegisterPage
    },
    getTheme: state => {
      return state.themeNow
    },
    getThemes: state => {
      return state.themes
    }
  }
})
