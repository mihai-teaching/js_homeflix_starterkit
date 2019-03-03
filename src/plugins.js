// ======================================================
// Icons
// ======================================================

import Vue from "vue";

// Icons
import AddIcon from "vue-ionicons/dist/md-add-circle-outline";
import HelpIcon from "vue-ionicons/dist/ios-help";

// Plugins
import VTooltip from "v-tooltip";
import vSelect from "vue-select";

// Icons
// ======================================================

// Helper
const createIcon = (name, icon) => ({ name, icon });

// Create Global components
[createIcon("AddIcon", AddIcon), createIcon("HelpIcon", HelpIcon)].forEach(o =>
  Vue.component(o.name, o.icon)
);

// Plugins
// ======================================================

Vue.use(VTooltip);
Vue.component("v-select", vSelect);
