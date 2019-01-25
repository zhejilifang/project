<template>
  <div class="found">
    <div class="tab">
      <router-link to="/index/found/recommend">个性推荐</router-link>
      <router-link to="/index/found/station">主播电台</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Found"
};
</script>
<style>
</style>