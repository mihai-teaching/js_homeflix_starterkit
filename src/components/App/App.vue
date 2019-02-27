<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Login from "../Login/Login.vue";
import Footer from "../../components-ui/Footer.vue";
import Overlay from "../../components-ui/Overlay.vue";

// Constants
import { APP_STATE, OVERLAY_SPEED } from "./core/constants";

export default {
  name: "App",
  components: {
    Login,
    Overlay,
    Footer
  },
  computed: {
    ...mapGetters("app", ["appCurrentState", "isAppReady", "isOverlay"])
  },
  methods: {
    ...mapActions("app", ["hideOverlay", "setAppReady", "toggleOverlay"]),
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
      this.hideOverlay();
    }, OVERLAY_SPEED);
  }
};
</script>

<template>
  <div class="c-app">
    <Overlay :show="isOverlay"/>
    <Login :show="getLoginVisibility()"/>
    <!-- <Main :show="!getLoginVisibility()"/> -->
    <!-- <InfoBubble class="c-header_info-bubble"/> little circle at the bottom right -->
    <Footer/>
  </div>
</template>