import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: { // global states of app
    token: null,
    user: null,
    isUserLoggedIn: false,
    isAdminLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token // for updating token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setAdmin (state, token) {
      state.token = token
      if (token) {
        state.isAdminLoggedIn = true
      } else {
        state.isAdminLoggedIn = false
      }
    },
    setUser (state, user) { // for updating user
      state.user = user
    }
  },
  actions: { // for calling mutations
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setAdmin ({commit}, token) {
      commit('setAdmin', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
