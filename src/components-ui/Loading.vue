<script>
// Components
import Spinner from "./Spinner.vue";

// Constants
import { OVERLAY_SPEED } from "../components/App/core/constants";

export default {
  name: "Loading",
  data: function() {
    return { duration: OVERLAY_SPEED };
  },
  props: {
    show: Boolean
  },
  components: {
    Spinner
  }
};
</script>

<template>
  <transition name="fade" :duration="duration">
    <aside v-if="show" class="c-loading o-overlay">
      <Spinner :show="true"/>
    </aside>
  </transition>
</template>