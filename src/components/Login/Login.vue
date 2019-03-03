<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import LoginInput from "./components/LoginInput";

// Helpers
import data from "../../_helpers/getData";
import { getReturnTypeError } from "../../_helpers/errors";

// Student's code
const { validateUsername, validatePassword } = data;

// Constants
import { APP_STATE, LOADING_SPEED } from "../App/core/constants";

export default {
  name: "Login",
  data: function() {
    return {
      isDataValid: false, // Initial value
      isUsernameValid: true,
      isPasswordValid: true
    };
  },
  props: {
    show: Boolean
  },
  components: {
    LoginInput
  },
  computed: {
    ...mapGetters("app", ["isAppReady", "appCurrentState"])
  },
  methods: {
    ...mapActions("app", ["login", "setAppState"]),
    // Username
    setUsernameValidState(value) {
      if (typeof value === "boolean") {
        this.isUsernameValid = value;
        this.isDataValid = value && this.isPasswordValid;
      } else {
        this.isUsernameValid = false;
        this.isDataValid = false;
        console.error(getReturnTypeError("validateUsername", value, "boolean"));
      }
    },
    onUsernameChange({ target }) {
      if (validateUsername) {
        const isValid = validateUsername(target.value);
        this.setUsernameValidState(isValid);
        this.setAppState(APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION);
      } else {
        this.setAppState(APP_STATE.LOGIN__ADDING_USERNAME_VALIDATION);
        this.setUsernameValidState(false);
      }
    },
    // Password
    setPasswordValidState(value) {
      if (typeof value === "boolean") {
        this.isPasswordValid = value;
        this.isDataValid = value && this.isPasswordValid;
      } else {
        this.isPasswordValid = false;
        this.isDataValid = false;
        console.error(getReturnTypeError("validatePassword", value, "boolean"));
      }
    },
    onPasswordChange({ target }) {
      if (validatePassword) {
        const isValid = validatePassword(target.value);
        this.setPasswordValidState(isValid);
        this.setAppState(APP_STATE.LOGIN__LOG_INTO_APP);
      } else {
        if (validateUsername) {
          this.setAppState(APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION);
        }
        this.setPasswordValidState(false);
      }
    },
    // Submit
    onSubmit(event) {
      event.preventDefault();
      const { target } = event;
      if (validateUsername && validatePassword) {
        // Get values
        const usernameValue = target.children[0].children[0].value;
        const passwordValue = target.children[1].children[0].value;
        // Validate inputs
        const isUsernameValid = validateUsername(usernameValue);
        this.setUsernameValidState(isUsernameValid);
        const isPasswordValid = validateUsername(passwordValue);
        this.setPasswordValidState(isPasswordValid);
        // Change state
        if (isUsernameValid && isPasswordValid) {
          this.login();
        }
      } else {
        if (!validateUsername) this.setUsernameValidState(false);
        if (!validatePassword) this.setPasswordValidState(false);
      }
    }
  }
};
</script>

<template>
  <transition :duration="{ enter: 2000, leave: 0 }">
    <div v-if="show" class="c-login">
      <h1 class="c-login_title">Welcome</h1>
      <hr class="c-login_hr">
      <form class="c-login_form" @submit="onSubmit">
        <LoginInput
          type="text"
          name="password"
          placeholder="username"
          :onChange="onUsernameChange"
          :hasError="!isUsernameValid"
          errorMsg="The username is not valid"
        />
        <LoginInput
          type="password"
          name="username"
          placeholder="password"
          :onChange="onPasswordChange"
          :hasError="!isPasswordValid"
          errorMsg="The password is not valid"
        />
        <button type="submit" class="c-login_btn">Login</button>
      </form>
    </div>
  </transition>
</template>