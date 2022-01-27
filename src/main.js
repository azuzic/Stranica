import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Croppa from "vue-croppa";
import VuejsDialog from "vuejs-dialog";
import "./assets/tailwind.css";
import "vue-croppa/dist/vue-croppa.css";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import { init } from "@emailjs/browser";
init("user_y34vpB1P8iKzvceSWI3kI");

Vue.config.productionTip = false;
Vue.use(Croppa);
Vue.use(VuejsDialog, {
  okText: "Nastavi",
  cancelText: "Odustani",
  animation: "bounce",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");