import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { isLogined } from "../utils/auth";
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
    name: "Cart",
    path: "/cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      needLogin: true,
    },
  },
  {
    name: "User",
    path: "/user",
    component: () => import("../views/User.vue"),
    meta: {
      needLogin: true,
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
  mode: "hash",
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    // 判断是否登录
    if (isLogined()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});
export default router;
