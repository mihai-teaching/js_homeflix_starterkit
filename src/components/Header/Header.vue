<script>
import { mapGetters } from "vuex";

// Components
import LogoutButton from "../LogoutButton/LogoutButton.vue";

export default {
  name: "Header",
  computed: {
    ...mapGetters("app", ["isAppReady"])
  },
  components: {
    LogoutButton
  }
};
</script>

<template>
  <transition :duration="2000">
    <header v-if="isAppReady" class="c-header o-wrapper">
      <h1 class="c-header_title">Homeflix</h1>
      <!-- <LogoutButton class="c-header_logout-btn"> -->
    </header>
  </transition>
</template>