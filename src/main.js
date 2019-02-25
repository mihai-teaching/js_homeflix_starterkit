// ======================================================
// Main
// ======================================================

// Root
import Vue from "vue";
import App from "./components/App";

// Styles
import "vue2-animate/dist/vue2-animate.min.css";
import "vue-ionicons/dist/ionicons.css";
import "./styles/main.scss";

// Setup Icons
import "./icons";

// Launch Vue
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#root");
