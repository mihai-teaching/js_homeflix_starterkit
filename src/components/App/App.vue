<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Login from "../Login/Login.vue";
import Footer from "../../components-ui/Footer.vue";
import Loading from "../../components-ui/Loading.vue";

// Constants
import { APP_STATE, OVERLAY_SPEED } from "./core/constants";

export default {
  name: "App",
  components: {
    Login,
    Loading,
    Footer
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
          return this.isAppReady;
      }
      return this.isAppReady;
    }
  },
  updated() {},
  mounted() {
    setTimeout(() => {
      this.setAppReady(true);
      this.hideLoading();
    }, OVERLAY_SPEED);
  }
};
</script>

<template>
  <div class="c-app">
    <Loading :show="isLoading"/>
    <Login :show="getLoginVisibility()"/>
    <!-- <Main :show="!getLoginVisibility()"/> -->
    <!-- <InfoBubble class="c-header_info-bubble"/> little circle at the bottom right -->
    <Footer/>
  </div>
</template>