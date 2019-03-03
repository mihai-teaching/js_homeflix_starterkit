<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Footer from "../../components-ui/Footer.vue";
import Header from "../Header/Header.vue";
import InfoBubble from "../InfoBubble/InfoBubble.vue";
import Loading from "../Loading/Loading.vue";
import Login from "../Login/Login.vue";

// Constants
import { APP_STATE, LOADING_SPEED } from "./core/constants";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    InfoBubble,
    Login,
    Loading
  },
  computed: {
    ...mapGetters("app", ["appCurrentState", "isAppReady", "isLoading"])
  },
  methods: {
    ...mapActions("app", ["hideLoading", "setAppReady", "toggleLoading"]),
    // Check if the login should be displayed, else content
    getLoginVisibility() {
      switch (this.appCurrentState) {
        case APP_STATE.LOGIN__ADDING_USERNAME_VALIDATION:
        case APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION:
        case APP_STATE.LOGIN__LOG_INTO_APP:
          return this.isAppReady;
        default:
          return false;
      }
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
    <!-- <Main :show="!getLoginVisibility()"/> -->
    <InfoBubble/>
    <Footer/>
  </div>
</template>