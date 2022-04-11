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
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="">
          <h4>用户name</h4>
          <p>通行证 ID: 111111</p>
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
        <van-button block>退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.userInfo {
  display: flex;
  background-color: #fff;
  padding: 1rem;
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
