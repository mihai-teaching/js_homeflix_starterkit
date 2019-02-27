// ======================================================
// Components / App / Core / Store
// ======================================================

// Constants
import { APP_STATE, OVERLAY_SPEED } from "./constants";

const dispatchHelper = (action, dispatch) =>
  dispatch(action, null, { root: true });

export default {
  namespaced: true,
  state: {
    currState: APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION, // use local storage
    isAuthenticated: false, // use local storage
    username: null, // use local storage
    isOverlay: true
  },
  actions: {
    toggleOverlay({ commit }) {
      commit("showOverlay");
      setTimeout(() => commit("hideOverlay"), OVERLAY_SPEED);
    },
    login({ commit, dispatch }) {
      dispatchHelper("app/toggleOverlay", dispatch);
      setTimeout(() => commit("login"), OVERLAY_SPEED);
    },
    logout({ commit, dispatch }) {
      dispatchHelper("app/toggleOverlay", dispatch);
      setTimeout(() => commit("logout"), OVERLAY_SPEED);
    },
    hideOverlay({ commit }) {
      commit("hideOverlay");
    }
  },
  getters: {
    getCurrentState: state => state.currState,
    isAuthenticated: state => state.isAuthenticated,
    isOverlay: state => state.isOverlay
  },
  mutations: {
    setCurrentState(state, newState) {
      state.currState = newState;
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
    showOverlay(state) {
      state.isOverlay = true;
    },
    hideOverlay(state) {
      state.isOverlay = false;
    }
  }
};
