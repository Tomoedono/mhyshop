<template>
  <div id="app">
    <router-view class="main"></router-view>
    <van-tabbar route v-show="isShowTabBar">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="cart-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="contact" :to="{ name: 'User' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowTabBar: true,
    };
  },

  watch: {
    // 监听路由变化
    $route(v) {
      // 判断当前跳转到的页面是否需要隐藏底部导航
      if (v.meta.hideTabBar) {
        this.isShowTabBar = false;
      } else {
        this.isShowTabBar = true;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
img {
  max-width: 100%;
  display: block;
}
</style>
