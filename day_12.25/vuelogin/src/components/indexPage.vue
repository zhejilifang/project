<template>
  <div class="indexPage">
    <header class="header">toubu</header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <router-link to="/index/found">发现</router-link>
      <router-link to="/index/movie">视频</router-link>
      <router-link to="/index/mine">我的</router-link>
      <router-link to="/index/friend">朋友</router-link>
      <router-link to="/index/account">账号</router-link>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Index"
};
</script>
<style>
</style>