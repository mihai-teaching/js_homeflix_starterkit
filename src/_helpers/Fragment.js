// ======================================================
// Helpers / Fragment
// ======================================================

/**
 * Fragment component hack.
 * Got it from here : https://github.com/vuejs/vue/issues/7606#issuecomment-431329878
 */
export default {
  functional: true,
  render(_, ctx) {
    return ctx.children;
  }
};
