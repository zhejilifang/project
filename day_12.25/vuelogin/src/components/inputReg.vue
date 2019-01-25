<template>
  <div class="inputRegCont">
    <div class="userTel">
      <span class="icon icon-tel"></span>
      <input type="text" placeholder="手机号">
    </div>
    <div class="userPwd">
      <span class="icon icon-suo"></span>
      <input type="password" placeholder="密码">
    </div>
    <p class="submitBtn">
      <button>{{this.$route.query.text}}</button>
    </p>
    <p class="registryPwd" v-if="this.$route.query.flag">
      <span>重设密码</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "inputReg"
};
</script>
<style>
</style>