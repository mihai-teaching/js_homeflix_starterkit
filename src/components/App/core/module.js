// ======================================================
// Components / App / Core / Store
// ======================================================

// Constants
import { APP_STATE, OVERLAY_SPEED } from "./constants";

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
    setAppState({ commit }, value) {
      commit("setCurrentState", value);
    },
    setAppReady({ commit }, value) {
      commit("setAppReady", value);
    },
    toggleLoading({ commit }) {
      commit("showLoading");
      setTimeout(() => commit("hideLoading"), OVERLAY_SPEED);
    },
    login({ commit, dispatch }) {
      dispatchHelper("app/toggleLoading", dispatch);
      setTimeout(() => commit("login"), OVERLAY_SPEED);
    },
    logout({ commit, dispatch }) {
      dispatchHelper("app/toggleLoading", dispatch);
      setTimeout(() => commit("logout"), OVERLAY_SPEED);
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
