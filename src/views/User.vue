<template>
  <div>
    <div class="user">
      <h3>个人中心</h3>
      <div class="userInfo">
        <div class="userHead">
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img-static.mihoyo.com/communityweb/upload/c9d11674eac7631d2210a1ba20799958.png?x-oss-process=image/resize,m_lfit,w_140,h_140,limit_1/format,webp"
          />
        </div>
        <div class="">
          <h4>{{ this.user.nickName }}</h4>
          <p>通行证 ID: {{ this.user.id }}</p>
        </div>
      </div>
      <div class="mhyServe">
        <div class="mhyServe-cell">
          <van-icon name="orders-o" />
          <span>我的订单</span>
          <van-icon name="arrow" />
        </div>
        <div class="mhyServe-cell">
          <van-icon name="coupon-o" />
          <span>我的优惠券</span>
          <van-icon name="arrow" />
        </div>
        <div class="mhyServe-cell">
          <van-icon name="location-o" />
          <span>收货地址</span>
          <van-icon name="arrow" />
        </div>
        <div class="mhyServe-cell">
          <van-icon name="service-o" />
          <span>联系客服</span>
          <van-icon name="arrow" />
        </div>
        <div class="mhyServe-cell">
          <van-icon name="description" />
          <span>查看《服务条款》</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div>
        <van-button block @click="logOut">退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfoAPI } from "../services/auth";
import { removeToken } from "../utils/auth";
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    logOut() {
      removeToken();
      // 重置购物车信息
      this.$store.commit("resetCarts");
      this.$router.replace("/");
    },
    async loadData() {
      const res = await userInfoAPI();
      // console.log(res);
      this.user = res.data;
    },
  },
};
</script>

<style>
.userInfo {
  display: flex;
  background-color: #fff;
  padding: 1rem;
}
.userInfo h4 {
  margin-top: 1rem;
  height: 1rem;
}
.userHead {
  margin-right: 1rem;
}
.user p {
  margin-top: 0.5rem;
}
.mhyServe {
  margin: 2.5vw 0;
  background: #fff;
  line-height: 2rem;
  font-size: 14px;
  border-bottom: #9e9e9e1f 1px solid;
}
.mhyServe-cell {
  display: flex;
  align-items: center;
  padding: 2.5vw 3.3vw;
}
.mhyServe-cell span {
  margin-left: 0.2rem;
  flex: 1;
}
</style>
