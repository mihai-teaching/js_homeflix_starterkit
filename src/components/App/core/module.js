// ======================================================
// Components / App / Core / Store
// ======================================================

// Constants
import { APP_STATE, LOADING_SPEED } from "./constants";

// Helpers
const dispatchHelper = (action, dispatch) =>
  dispatch(action, null, { root: true });

// Check if data from cookie is valid : ... isAuthenticated = true ... username = null???
// const getValidState = () => null

export default {
  namespaced: true,
  state: {
    currState: APP_STATE.LOGIN__ADDING_USERNAME_VALIDATION, // use local storage
    username: null, // use local storage
    isAuthenticated: false, // use local storage
    isAppReady: false,
    isLoading: true,
    isOverlay: false
  },
  actions: {
    setAppState({ commit }, newState) {
      commit("setCurrentState", newState);
    },
    setAppReady({ commit }, value) {
      commit("setAppReady", value);
    },
    setAuthentification({ commit }, username) {
      commit("setAuthentification", username);
    },
    toggleLoading({ commit }) {
      commit("showLoading");
      setTimeout(() => commit("hideLoading"), LOADING_SPEED * 5);
    },
    login({ commit, dispatch }) {
      dispatchHelper("app/toggleLoading", dispatch);
      setTimeout(() => commit("login"), LOADING_SPEED);
    },
    logout({ commit, dispatch }) {
      dispatchHelper("app/toggleLoading", dispatch);
      setTimeout(() => commit("logout"), LOADING_SPEED);
    },
    hideLoading({ commit }) {
      commit("hideLoading");
    },
    showOverlay({ commit }) {
      commit("showOverlay");
    },
    hideOverlay({ commit }) {
      commit("hideOverlay");
    }
  },
  getters: {
    appCurrentState: state => state.currState,
    isAuthenticated: state => state.isAuthenticated,
    isAppReady: state => state.isAppReady,
    isLoading: state => state.isLoading,
    isOverlay: state => state.isOverlay
  },
  mutations: {
    setCurrentState(state, newState) {
      if (state.currState !== newState) {
        state.currState = newState;
      }
    },
    setAuthentification(state, username) {
      state.username = username;
      state.isAuthenticated = !!username;
    },
    setAppReady(state, value) {
      state.isAppReady = value;
    },
    login(state) {
      state.isAuthenticated = true;
      switch (state.currState) {
        case APP_STATE.LOGIN__ADDING_USERNAME_VALIDATION:
        case APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION:
          state.currState = APP_STATE.HEADER__UPDATING_USER_INFOS;
          break;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    showOverlay(state) {
      state.isOverlay = true;
    },
    hideOverlay(state) {
      state.isOverlay = false;
    }
  }
};
