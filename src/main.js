import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import router from "@/router";

createApp(App).use(router).use(VueChartkick).use(PulseLoader).mount("#app");
