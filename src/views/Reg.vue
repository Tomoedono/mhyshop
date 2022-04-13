<template>
  <div class="reg">
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
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请填写13位手机号' }]"
      />
      <van-field
        v-model="nickName"
        name="nickName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repassword"
        type="password"
        name="repassword"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
    <router-link style="float: right" :to="{ name: 'Login' }"
      >立即登录<van-icon name="arrow"
    /></router-link>
  </div>
</template>

<script>
import { Notify } from "vant";
import { regAPI } from "../services/auth";
import { setToken } from "../utils/auth";
export default {
  data() {
    return {
      userName: "",
      password: "",
      repassword: "",
      nickName: "",
      pattern: /^1[3456789]\d{9}$/,
    };
  },
  methods: {
    async onSubmit() {
      if (this.password != this.repassword) {
        Notify({
          message: "两次输入的密码不一致",
          type: "warning",
        });
        return;
      }
      // setToken("123");
      const info = await regAPI({
        userName: this.userName,
        password: this.password,
        nickName: this.nickName,
      });
      console.log(info);
      if (info.code == 1) {
        Notify({
          message: "注册成功",
          type: "success",
        });
        setToken(info.data);
        // 派发action获取购物车信息
        this.$store.dispatch("loadCarts");
        // 跳转到个人中心
        this.$router.replace({
          name: "User",
        });
      } else {
        Notify({
          message: "注册异常",
          type: "danger",
        });
      }
    },
  },
};
</script>

<style scoped>
.logo {
  width: 100vw;
  display: block;
}
</style>
