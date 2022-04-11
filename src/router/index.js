import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
  },
  {
    name: "Cart",
    path: "/cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      neddLogin: true,
    },
  },
  {
    name: "User",
    path: "/user",
    component: () => import("../views/User.vue"),
    meta: {
      neddLogin: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
