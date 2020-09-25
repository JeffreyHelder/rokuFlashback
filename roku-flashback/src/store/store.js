import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    account: null,
    user: null,
    isUserMax: null,
    isAccountLoggedIn: false,
    isUserLoggedIn: false
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
    },
    setUser(state, user) {
      state.user = null;
      state.user = user;
      if (user) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setIsUserMax(state, userCount) {
      if (userCount >= 5) {
        state.isUserMax = true;
      } else {
        state.isUserMax = false;
      }
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setAccount({ commit }, account) {
      commit("setAccount", account);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setIsUserMax({ commit }, userCount) {
      commit("setIsUserMax", userCount);
    }
  }
});
