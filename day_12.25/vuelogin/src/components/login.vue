<template>
  <div class="login">
    <div class="logo">
      <img src="../common/images/logo.png" alt>
    </div>
    <div class="toView">
      <p class="telLoginBtn" @click="toLoginView">手机号登录</p>
      <p class="registryBtn" @click="toRegistryView">注册</p>
      <p class="visitorLogin">
        <span>游客试用</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    toLoginView() {
      this.$router.push({
        path: "/login",
        query: {
          title: "手机号登录",
          text: "登录",
          flag: true
        }
      });
    },
    toRegistryView() {
      this.$router.push({
        path: "/registry",
        query: {
          title: "注册",
          text: "注册",
          flag: false
        }
      });
    }
  }
};
</script>
<style>
</style>