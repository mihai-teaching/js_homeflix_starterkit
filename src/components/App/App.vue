<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Header from "../Header/Header.vue";
import Overlay from "../../components-ui/Overlay.vue";

// Constants
import { APP_STATE, OVERLAY_SPEED } from "./core/constants";

export default {
  name: "App",
  components: {
    Header,
    Overlay
  },
  computed: {
    ...mapGetters("app", ["getCurrentState", "isOverlay"])
  },
  methods: {
    ...mapActions("app", ["hideOverlay", "toggleOverlay"])
  },
  updated() {},
  mounted() {
    setTimeout(() => {
      this.hideOverlay();
    }, OVERLAY_SPEED);
  }
};
</script>

<template>
  <div class="c-app">
    <Overlay v-bind:show="isOverlay"/>
    <Header/>
  </div>
</template>