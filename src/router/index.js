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
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
  },
  {
    path: "/dby",
    name: "Dby",
    component: () => import("../views/list/Dby.vue"),
  },
  {
    path: "/bh2",
    name: "Bh2",
    component: () => import("../views/list/Bh2.vue"),
  },
  {
    path: "/bh3",
    name: "Bh3",
    component: () => import("../views/list/Bh3.vue"),
  },
  {
    path: "/cxt",
    name: "Cxt",
    component: () => import("../views/list/Cxt.vue"),
  },
  {
    path: "/wdsj",
    name: "Wdsj",
    component: () => import("../views/list/Wdsj.vue"),
  },
  {
    path: "/ys",
    name: "Ys",
    component: () => import("../views/list/Ys.vue"),
  },
  {
    path: "/11",
    name: "11",
    component: () => import("../views/11.vue"),
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
  {
    name: "Detail",
    path: "/list/:id/:name?", // params占位符可以写多个
    component: () => import("../views/Detail.vue"),
    meta: {
      hideTabBar: true, // 是否隐藏底部导航
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
