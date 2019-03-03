// ======================================================
// Components / App / Core / Store
// ======================================================

// Constants
import { APP_STATE, LOADING_SPEED } from "./constants";

// Helpers
const dispatchHelper = (action, dispatch, opt = null) =>
  dispatch(action, opt, { root: true });

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
    toggleLoading({ commit }, delay) {
      commit("showLoading");
      setTimeout(() => commit("hideLoading"), delay);
    },
    login({ commit, dispatch }, username) {
      dispatchHelper("app/toggleLoading", dispatch, LOADING_SPEED * 6);
      setTimeout(() => {
        commit("login", username);
        commit("setCurrentState", APP_STATE.HEADER__UPDATING_USER_INFOS);
      }, LOADING_SPEED * 5);
    },
    logout({ commit, dispatch }) {
      commit("logout");
      dispatchHelper("app/toggleLoading", dispatch, LOADING_SPEED * 10);
      setTimeout(() => {
        commit("setCurrentState", APP_STATE.LOGIN__LOG_INTO_APP);
      }, LOADING_SPEED * 3);
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
    setAppReady(state, value) {
      state.isAppReady = value;
    },
    login(state, username) {
      state.username = username;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.username = null;
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
