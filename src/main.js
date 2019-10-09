import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueQRCodeComponent from 'vue-qrcode-component';
import VueBarcode from 'vue-barcode';

import "./style/main.scss";

Vue.component('qr-code', VueQRCodeComponent);
Vue.component('barcode', VueBarcode);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
