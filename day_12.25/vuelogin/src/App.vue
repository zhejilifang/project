<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from "./components/login";
export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style>
@import url("./common/css/common.css");
@import url("./common/fonts/iconfont.css");
@import url("./common/css/style.css");
</style>
