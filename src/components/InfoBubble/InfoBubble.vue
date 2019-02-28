<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

// Components
import Fragment from "../../_helpers/Fragment";

// Helpers
import getTooltipContent from "./methods/getTooltipContent";

export default {
  name: "InfoBubble",
  props: {
    show: Boolean
  },
  computed: {
    ...mapGetters("app", ["appCurrentState", "isAppReady"])
  },
  methods: {
    getTooltipContent: function() {
      return getTooltipContent(this.appCurrentState);
    }
  }
};
</script>

<template>
  <transition name="fadeUp">
    <button v-if="isAppReady" v-tooltip.top-end="getTooltipContent()" class="c-info-bubble">
      <HelpIcon title="Help" rootClass="c-info-bubble_icon"/>
    </button>
  </transition>
</template>