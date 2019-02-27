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
  <transition name="fade">
    <aside v-if="show" class="c-overlay o-overlay">
      <Spinner :show="true"/>
    </aside>
  </transition>
</template>