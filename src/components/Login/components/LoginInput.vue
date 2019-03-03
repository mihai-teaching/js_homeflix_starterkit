<script>
// Helpers
import classNamesHelper from "../../../_helpers/classNamesHelper";

export default {
  name: "LoginInput",
  props: {
    errorMsg: String,
    hasError: Boolean,
    onChange: Function,
    placeholder: String,
    type: String
  },
  methods: {
    getClassNames: function() {
      return classNamesHelper("c-login_input-group_error", [
        "-error",
        this.hasError
      ]);
    }
  }
};
</script>

<template>
  <div class="c-login_input-group">
    <input
      class="c-login_input-group_input"
      :type="type"
      :placeholder="placeholder"
      @keyup="onChange"
    >
    <span :class="getClassNames()">{{ errorMsg }}</span>
  </div>
</template>