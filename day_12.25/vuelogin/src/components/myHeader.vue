<template>
  <header class="header">
    <a href="javascript:history.back()" class="back">&lt;</a>
    <p class="headerTitle">{{this.$route.query.title}}</p>
  </header>
</template>
<script>
export default {
  name: "myHeader"
};
</script>
<style>
</style>