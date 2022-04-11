<template>
  <div class="home">
    <van-search placeholder="请输入搜索关键词" shape="round" />
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :show-indicators="false"
      style="background-color: #fff"
    >
      <van-swipe-item v-for="(i, index) in swipeImg" :key="index">
        <img :src="i" alt="" class="s-img" />
      </van-swipe-item>
    </van-swipe>
    <van-grid column-num="3">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeImg: [
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/17/c40a29b4c2d8edfa5537ce4f78fb8822_857289179952755736.png",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/04/08/ab76eaf29ce8e0b0ff6240a1e138f7fe_1602829636561602449.jpg",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/04/08/dbfc721da3b8c40cf47459a2e42ba8f7_6056454656449763077.jpg",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/03/04/3d274746aa31f2a7107b07d2860397e9_7686862900571971000.png",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/17/c40a29b4c2d8edfa5537ce4f78fb8822_857289179952755736.png",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/04/08/ab76eaf29ce8e0b0ff6240a1e138f7fe_1602829636561602449.jpg",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/04/08/dbfc721da3b8c40cf47459a2e42ba8f7_6056454656449763077.jpg",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/03/04/3d274746aa31f2a7107b07d2860397e9_7686862900571971000.png",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/02/17/c40a29b4c2d8edfa5537ce4f78fb8822_857289179952755736.png",
      ],
    };
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
</style>
