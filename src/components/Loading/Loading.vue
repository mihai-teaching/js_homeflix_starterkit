<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Spinner from "../../components-ui/Spinner.vue";

// Constants
import { OVERLAY_SPEED } from "../App/core/constants";

export default {
  name: "Loading",
  data: function() {
    return { duration: OVERLAY_SPEED };
  },
  computed: {
    ...mapGetters("app", ["isLoading"])
  },
  components: {
    Spinner
  }
};
</script>

<template>
  <transition name="fade" :duration="duration">
    <aside v-if="isLoading" class="c-loading o-overlay">
      <Spinner :show="true"/>
    </aside>
  </transition>
</template>