<template>
  <div class="cart">
    <h3 style="margin-bottom: -8px">购物车</h3>
    <van-card
      v-for="item in carts"
      :key="item.id"
      :price="item.price"
      :title="item.product.name"
      :thumb="item.product.coverImage | dalImg"
      :thumb-link="'#/list/' + item.product.id"
      color="#fff"
    >
      <template #footer>
        <van-icon
          name="delete-o"
          size="2em"
          color="rgb(231, 231, 234)"
          class="delsp"
          @click="delCart(item.id)"
        />
        <van-stepper
          v-model="item.amount"
          @minus="jian(item.product.id, item.product.price)"
          @plus="jia(item.product.id, item.product.price)"
        />
        <van-checkbox v-model="item.isChk" class="cartckbox"></van-checkbox>
      </template>
    </van-card>
    <div class="cartinfo">
      <van-submit-bar
        :price="sumPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="chkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { loadCartsAPI } from "../services/carts";
import { addToCart } from "../services/carts";
import { delFromCart } from "../services/carts";
export default {
  data() {
    return {
      result: [],
      checked: false,
      carts: [],
    };
  },

  methods: {
    onSubmit() {
      console.log(this.carts);
      console.log(this.carts.every((item) => item.isChk));

      loadCartsAPI();
    },
    toDetail(item) {
      this.$router.push({
        name: "Detail",
        params: {
          id: item.id,
        },
      });
    },
    async jia(id, price) {
      await addToCart(id, 1, price);
      // console.log(id, price);
    },
    async jian(id, price) {
      await addToCart(id, -1, price);
    },
    async delCart(id) {
      console.log(id);
      await delFromCart(id);
      const index = this.carts.findIndex((item) => item.id);
      this.carts.splice(index, 1);
      this.$store.dispatch("loadCarts");
    },
  },
  async created() {
    const resCarts = await loadCartsAPI();
    this.carts = resCarts.data.map((item) => ({
      ...item,
      isChk: true,
    }));
  },
  computed: {
    chkAll: {
      set(v) {
        this.carts.forEach((item) => (item.isChk = v));
      },
      get() {
        console.log(this.carts.length);
        return this.carts.length > 0
          ? this.carts.every((item) => item.isChk)
          : false;
      },
    },
    sumPrice() {
      return this.carts
        .filter((item) => item.isChk)
        .reduce((pre, cur) => pre + cur.price * 100 * cur.amount, 0);
    },
  },
};
</script>

<style>
.van-submit-bar {
  bottom: 50px;
}
.van-card {
  background-color: #fff;
}
.van-card__header {
  padding-left: 10vw;
}
.cartckbox {
  position: absolute;
  top: 35%;
}
.delsp {
  position: absolute;
  top: 20%;
  right: 6%;
}
.van-card__title {
  max-width: 45vw;
}
</style>
