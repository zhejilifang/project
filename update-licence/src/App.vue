<template>
  <keep-alive exclude="IndexPage">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
// 引入JSBridge
import JSBridge from "@/utils/JSBridge.js";
// 引入mixins
import { init } from "@/mixins/index";

export default {
  name: "update-licence",
  mixins: [init],
  mounted() {
    console.log(this.name);
  },
  provide() {
    return {
      num: 1314,
      login: () => {
        console.log("调用了login");
        this.login();
      }
    };
  },
  methods: {
    login() {
      // 登录
      JSBridge.invoke("app", "login", {
        loginCallBackName: res => {
          console.log("res...", res);
        }
      });
    }
  }
};
</script>

<style>
@import url("./scss/common.css");
</style>
