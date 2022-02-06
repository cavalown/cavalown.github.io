import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./plugins/fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './style/reset.css';

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount("#app");
