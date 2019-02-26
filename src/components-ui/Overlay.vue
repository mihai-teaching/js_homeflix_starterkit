<script>
import Spinner from "./Spinner.vue";
export default {
  name: "Overlay",
  components: {
    Spinner
  }
};
</script>

<template>
  <transition name="fade">
    <aside class="c-overlay o-overlay">
      <Spinner/>
    </aside>
  </transition>
</template>