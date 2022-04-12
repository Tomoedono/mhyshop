<template>
  <div class="home">
    <van-search placeholder="" shape="round" />
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :show-indicators="false"
      style="background-color: #fff"
    >
      <van-swipe-item v-for="(i, index) in bannerImg" :key="index">
        <img :src="i.coverImage | dalImg" alt="" class="s-img" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" column-num="3">
      <van-grid-item
        v-for="(i, index) in product_categories"
        :key="index"
        :to="{ name: i.desc }"
      >
        <van-image :src="i.coverImage | dalImg" />
      </van-grid-item>
    </van-grid>
    <van-swipe
      class="my-swipe"
      :autoplay="2500"
      :show-indicators="false"
      style="background-color: #fff"
    >
      <van-swipe-item v-for="(i, index) in pzImg" :key="index">
        <img :src="i.coverImage | dalImg" class="s-img" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="2" :gutter="10" class="products">
      <van-grid-item
        v-for="item in products"
        :key="item.id"
        @click="toDetail(item)"
      >
        <van-image :src="item.coverImage | dalImg" />
        <p>{{ item.name }}</p>
        <span>¥{{ item.price }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { get } from "../utils/request";
export default {
  data() {
    return {
      bannerImg: [],
      pzImg: [],
      product_categories: [],
      products: [],
      loading: true,
      finished: true,
    };
  },
  created() {
    get("api/v1/banners", { category: 1 }).then((res) => {
      this.bannerImg = res.data;
    });
    get("api/v1/banners", { category: 2 }).then((res) => {
      this.pzImg = res.data;
    });
    get("api/v1/product_categories").then((res) => {
      this.product_categories = res.data;
    });
    get("api/v1/products", { per: 100 }).then((res) => {
      res.data.sort((a, b) => Math.random() - 0.5).splice(20);
      this.products = res.data;
    });
  },
  methods: {
    toDetail(item) {
      this.$router.push({
        name: "Detail",
        params: {
          id: item.id,
        },
      });
    },
  },
};
</script>
<style>
.s-img {
  width: 100vw;
}
body {
  background-color: #f3f3f4;
}
h3 {
  line-height: 10vw;
  text-align: center;
  border-bottom: #9e9e9e1f 1px solid;
  background-color: #fff;
}
.products {
  margin-top: 1.2rem;
  margin-bottom: 60px;
}
.products .van-grid-item__content {
  border-radius: 0.5rem;
}
.products span {
  align-self: flex-start;
}
</style>
