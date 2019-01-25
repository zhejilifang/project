<template>
  <div class="registryPage">
    <my-header/>
    <input-reg/>
  </div>
</template>
<script>
import myHeader from "./myHeader";
import inputReg from "./inputReg";
export default {
  name: "RegistryPage",
  components: {
    myHeader,
    inputReg
  }
};
</script>
<style>
</style>
