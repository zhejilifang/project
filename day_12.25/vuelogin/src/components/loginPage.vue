<template>
  <div class="loginPage">
    <my-header/>
    <input-reg/>
  </div>
</template>
<script>
import myHeader from "./myHeader";
import inputReg from "./inputReg";

export default {
  name: "LoginPage",
  components: {
    myHeader,
    inputReg
  }
};
</script>
<style>
</style>
