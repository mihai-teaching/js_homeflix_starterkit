// ======================================================
// Icons
// ======================================================

// Icons
import Vue from "vue";
import AddIcon from "vue-ionicons/dist/md-add-circle-outline";

// Helper
const createIcon = (name, icon) => ({ name, icon });

// Create Global components
[createIcon("AddIcon", AddIcon)].forEach(o => Vue.component(o.name, o.icon));
