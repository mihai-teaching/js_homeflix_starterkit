// ======================================================
// Store
// ======================================================

import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    app
    // products
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
});
