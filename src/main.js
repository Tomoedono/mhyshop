import Vue from "vue";
import Vant from "vant";
import App from "./App.vue";
import router from "./router";
import "vant/lib/index.css";
import { serverUrl } from "./utils/request";
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.filter("dalImg", (url) => {
  if (url) {
    if (url.startsWith("http")) {
      return url;
    }
    ("");
    return serverUrl + url;
  } else {
    return "";
  }
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
