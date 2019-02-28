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
  <header class="c-header o-wrapper">
    <transition name="fadeDown">
      <h1 v-if="isAppReady" class="c-header_title">Homeflix</h1>
    </transition>
    <!-- <LogoutButton class="c-header_logout-btn"> -->
  </header>
</template>