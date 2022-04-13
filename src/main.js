import Vue from "vue";
import Vant from "vant";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "vant/lib/index.css";
import { serverUrl } from "./utils/request";
import { loadCartsAPI } from "./services/carts";
Vue.use(Vant);
Vue.use(Vuex);
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
const store = new Vuex.Store({
  state: {
    carts: [],
  },
  actions: {
    async loadCarts({ commit }) {
      const res = await loadCartsAPI();
      commit("loadCartsEnd", res.data);
    },
  },
  mutations: {
    loadCartsEnd(state, payload) {
      state.carts = payload.filter((item) => item.product); // 赋值
    },
    resetCarts(state) {
      state.carts = [];
    },
  },
  // 相当于计算属性
  getters: {
    // 购物车中数据的数量
    cartCount(state) {
      return state.carts.length;
    },
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
