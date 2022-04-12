<template>
  <div class="ys">
    <van-search placeholder="" shape="round" />
    <van-grid :border="false" :column-num="2" :gutter="10" class="products">
      <van-grid-item
        v-for="item in products"
        :key="item.id"
        size="sm"
        @click="toDetail(item)"
      >
        <van-image :src="item.coverImage | dalImg" />
        <p>{{ item.name }}</p>
        <span>{{ item.price }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    get("api/v1/products", { category: 6 }).then((res) => {
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

<style></style>
