<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters("app", ["isAppReady", "isAuthenticated"])
  },
  methods: {
    ...mapActions("app", ["logout"])
  }
};
</script>

<template>
  <transition :duration="2000">
    <header v-if="isAppReady" class="c-header o-wrapper">
      <div>
        <h1 class="c-header_title">Homeflix</h1>
        <transition :duration="3500">
          <div v-if="isAuthenticated" class="c-header_auth">
            <h3 class="c-header_welcome">Welcome</h3>
            <p id="username" class="c-header_username">USERNAME_ERROR</p>
          </div>
        </transition>
      </div>
      <div>
        <button
          v-if="isAuthenticated"
          @click="logout"
          type="button"
          class="c-header_logout-btn o-btn"
        >Logout</button>
      </div>
    </header>
  </transition>
</template>