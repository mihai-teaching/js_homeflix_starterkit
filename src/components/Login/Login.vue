<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import LoginInput from "./components/LoginInput";

export default {
  name: "Login",
  data: function() {
    return {
      isUserValid: false,
      isPasswordValid: false
    };
  },
  components: {
    LoginInput
  },
  computed: {
    ...mapGetters("app", ["isAppReady"])
  },
  methods: {}
};
</script>

<template>
  <transition :duration="{ enter: 2000, leave: 0 }">
    <div v-if="isAppReady" class="c-login">
      <h1 class="c-login_title">Welcome</h1>
      <hr class="c-login_hr">
      <form class="c-login_form">
        <LoginInput
          type="text"
          placeholder="username"
          :hasError="!isUserValid"
          errorMsg="The username is not valid"
        />
        <LoginInput
          type="password"
          placeholder="password"
          :hasError="!isUserValid"
          errorMsg="The password is not valid"
        />
        <button type="submit" class="c-login_btn">Login</button>
      </form>
    </div>
  </transition>
</template>