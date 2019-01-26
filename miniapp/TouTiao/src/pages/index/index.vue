<template>
  <div class="counter-warp">
    <i-button>按钮</i-button>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>


<style lang="less">
@import "./index";

.counter-warp {
  text-align: center;
  margin-top: 100px;
}

.home {
  display: block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
