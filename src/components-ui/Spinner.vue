<script>
export default {
  name: "Spinner"
};
</script>

<template>
  <transition name="fade">
    <div class="c-spinner">
      <div class="c-spinner_inner1"></div>
      <div class="c-spinner_inner2"></div>
    </div>
  </transition>
</template>