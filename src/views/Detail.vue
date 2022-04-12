<template>
  <div class="detail">
    <van-nav-bar left-arrow @click-left="onClickLeft" fixed>
      <template #right>
        <van-icon name="more-o" is-link @click="show = true" size="20" />
        <van-action-sheet
          v-model="show"
          :actions="actions"
          cancel-text="取消"
          @select="onSelect"
        />
      </template>
    </van-nav-bar>
    <van-image :src="product.coverImage | dalImg" width="100%" />
    <van-cell-group class="productTitle">
      <p>{{ product.name }}</p>
      <p>&nbsp;&nbsp;¥{{ product.price }}</p>
    </van-cell-group>
    <van-sku
      v-model="showsku"
      :sku="sku"
      :goods="goods"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-cell title="请选择商品款式" is-link title-style="color:#9696a1" />
    <div style="margin-top: 1.2rem">
      <van-cell title="商品详情" />
      <div class="content" v-html="product.content"></div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcondp" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { get } from "../utils/request";
import LoginVue from "./Login.vue";
export default {
  data() {
    return {
      show: false,
      showsku: false,
      actions: [{ name: "米游铺" }],
      id: this.$route.params.id,
      product: {},
      sku: {},
      goods: {
        picture: "",
      },
    };
  },
  async created() {
    const res = await get("api/v1/products/" + this.id);
    this.product = res.data;
    this.goods.picture = "http://localhost:1337" + this.product.coverImage;
    this.sku = {
      tree: [
        {
          k: "规格", // skuKeyName：规格类目名称
          k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: JSON.parse(res.data.desc),
        },
      ],
      list: [
        {
          id: this.id, // skuId
          s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
          price: this.product.price * 100, // 价格（单位分）
          stock_num: this.product.amount, // 当前 sku 组合对应的库存
        },
        {
          id: this.id, // skuId
          s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
          price: this.product.price * 100, // 价格（单位分）
          stock_num: this.product.amount, // 当前 sku 组合对应的库存
        },
        {
          id: this.id, // skuId
          s1: "3", // 规格类目 k_s 为 s1 的对应规格值 id
          price: this.product.price * 100, // 价格（单位分）
          stock_num: this.product.amount, // 当前 sku 组合对应的库存
        },
      ],
      price: this.product.price,
      stock_num: this.product.amount,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSelect() {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      this.$router.replace({
        name: "Home",
      });
    },
    toCart() {
      this.$router.push({
        name: "Cart",
      });
    },
    onClickIcon() {},
    onClickIcondp() {
      this.$router.push({
        name: this.product.category.desc,
      });
    },
    onClickButton() {
      this.showsku = true;
    },
    onBuyClicked() {
      //购买
    },
    onAddCartClicked() {
      //加入购物车
    },
  },
};
</script>

<style>
.detail {
  margin-top: 3rem;
}
.productTitle {
  padding: 1rem;
  line-height: 1.6rem;
}
</style>
