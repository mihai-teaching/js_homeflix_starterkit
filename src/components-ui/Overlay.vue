<script>
// Components
import Spinner from "./Spinner.vue";

export default {
  name: "Overlay",
  props: {
    show: Boolean
  },
  components: {
    Spinner
  }
};
</script>

<template>
  <transition v-if="show" name="fade">
    <aside class="c-overlay o-overlay">
      <Spinner :show="true"/>
    </aside>
  </transition>
</template>