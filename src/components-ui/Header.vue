<script>
// Components
import LogoutButton from "../components/LogoutButton/LogoutButton.vue";

export default {
  name: "Header",
  components: {
    LogoutButton
  }
};
</script>

<template>
  <transition appear :duration="1000">
    <header class="c-header o-wrapper">
      <h1 class="c-header_title">Homeflix</h1>
      <!-- <LogoutButton class="c-header_logout-btn"> -->
    </header>
  </transition>
</template>