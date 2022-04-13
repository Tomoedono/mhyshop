<template>
  <div class="login">
    <router-link to="/"
      ><img
        src="http://localhost:1337/uploads/b29d8fe1-4ffe-40ae-9a96-36ec5d2cfd56.png"
        class="logo"
        alt=""
    /></router-link>
    <van-form @submit="onSubmit">
      <van-field
        v-model="userName"
        name="userName"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link style="float: right" :to="{ name: 'Reg' }"
      >立即注册<van-icon name="arrow"
    /></router-link>
  </div>
</template>

<script>
import { Notify } from "vant";
import { loginAPI } from "../services/auth";
import { setToken } from "../utils/auth";
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      const res = await loginAPI({
        userName: this.userName,
        password: this.password,
      });
      if (res.code == 1) {
        Notify({
          message: "登录成功",
          type: "success",
        });
        setToken(res.data);
        // 派发action获取购物车信息
        // this.$store.dispatch("loadCarts");
        this.$router.replace({
          name: "User",
        });
      } else {
        Notify({
          message: res.data,
          type: "warning",
        });
      }
    },
  },
};
</script>

<style scoped></style>
