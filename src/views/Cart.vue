<template>
  <div class="cart">
    <h3>购物车</h3>
    <div class="cartinfo">
      <!-- <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox checked-color="#ff6d6d"></van-checkbox>
        <van-checkbox checked-color="#ff6d6d"></van-checkbox>
        <van-checkbox checked-color="#ff6d6d"></van-checkbox>
      </van-checkbox-group>

      <van-button type="primary" @click="checkAll">全选</van-button>
      <van-button type="info" @click="toggleAll">反选</van-button> -->
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      checked: false,
    };
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    onSubmit() {},
  },
};
</script>

<style>
.van-submit-bar {
  bottom: 50px;
}
</style>
