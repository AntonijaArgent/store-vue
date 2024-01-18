import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);
let router = new VueRouter({ mode: "history", routes: routes });

const params = {
  render: (h) => h(App),
  router: router,
};

const app = new Vue(params);

app.$mount("#app");
