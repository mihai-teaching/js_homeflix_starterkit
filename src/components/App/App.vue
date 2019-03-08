<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Footer from "../../components-ui/Footer.vue";
import Header from "../Header/Header.vue";
import InfoBubble from "../InfoBubble/InfoBubble.vue";
import Loading from "../Loading/Loading.vue";
import Login from "../Login/Login.vue";
import Main from "../Main/Main.vue";

// Constants
import { APP_STATE, LOADING_SPEED } from "./core/constants";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    InfoBubble,
    Login,
    Loading,
    Main
  },
  computed: {
    ...mapGetters("app", ["appCurrentState", "isAppReady", "isLoading"])
  },
  methods: {
    ...mapActions("app", ["hideLoading", "setAppReady", "toggleLoading"]),
    // Check if the login should be displayed, else content
    getLoginVisibility() {
      return this.appCurrentState <= APP_STATE.LOGIN__LOG_INTO_APP
        ? this.isAppReady
        : false;
    },
    getMainContentVisibility() {
      return this.appCurrentState <= APP_STATE.LOGIN__LOG_INTO_APP
        ? false
        : this.isAppReady;
    }
  },
  updated() {},
  mounted() {
    setTimeout(() => {
      this.hideLoading();
      setTimeout(() => this.setAppReady(true), LOADING_SPEED / 3);
    }, LOADING_SPEED * 3);
  }
};
</script>

<template>
  <div class="c-app">
    <Loading/>
    <Header/>
    <Login :show="getLoginVisibility()"/>
    <Main :show="getMainContentVisibility()"/>
    <InfoBubble/>
    <Footer/>
  </div>
</template>