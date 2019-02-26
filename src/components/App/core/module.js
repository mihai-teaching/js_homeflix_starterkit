// ======================================================
// Components / App / Core / Store
// ======================================================

// Constants
import { APP_STATE } from "./constants";

export default {
  namespaced: true,
  state: {
    currState: APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION,
    isOverlay: true
  },
  actions: {
    toggleOverlay({ commit }) {
      commit("showOverlay");
      setTimeout(() => {
        commit("hideOverlay");
      }, 1500);
    },
    hideOverlay({ commit }) {
      commit("hideOverlay");
    }
  },
  getters: {
    getCurrentState: state => state.currState,
    isOverlay: state => state.isOverlay
  },
  mutations: {
    setCurrentState(state, newState) {
      state.app.currState = newState;
    },
    showOverlay(state) {
      state.isOverlay = true;
    },
    hideOverlay(state) {
      state.isOverlay = false;
    }
  }
};
