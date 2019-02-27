<script>
export default {
  name: "Spinner",
  props: {
    show: Boolean
  }
};
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="c-spinner">
      <div class="c-spinner_inner1"></div>
      <div class="c-spinner_inner2"></div>
    </div>
  </transition>
</template>