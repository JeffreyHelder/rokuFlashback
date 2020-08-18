import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    account: null,
    isAccountLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isAccountLoggedIn = true;
      } else {
        state.isAccountLoggedIn = false;
      }
    },
    setAccount(state, token) {
      state.account = token;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setAccount({ commit }, account) {
      commit("setAccount", account);
    }
  }
});
