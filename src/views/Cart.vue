<template>
  <div class="cart">
    <h3>购物车</h3>
    <div class="cartinfo">
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
