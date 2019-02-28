// ======================================================
// Main
// ======================================================

// Root
import Vue from "vue";
import App from "./components/App/App.vue";
import store from "./store";

// Styles
import "vue2-animate/dist/vue2-animate.min.css";
import "vue-ionicons/dist/ionicons.css";
import "./styles/main.scss";

// Setup Plugins
import "./plugins";

// Launch Vue
Vue.config.productionTip = false;
new Vue({
  store,
  render: h => h(App)
}).$mount("#root");
