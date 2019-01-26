<template>
  <div class="counter-warp">
    <i-button>按钮</i-button>
    <i-button v-on:click="handleClick" >默认按钮</i-button>
    <i-button v-on:click="handleClick" type="error" long="true">联通两边按钮</i-button>
    <i-button v-on:click="handleClick"  type="primary">Primary</i-button>
    <i-button v-on:click="handleClick" type="ghost">Ghost</i-button>
    <i-button v-on:click="handleClick" type="info">Info</i-button>
    <i-button v-on:click="handleClick" type="success">Success</i-button>
    <i-button v-on:click="handleClick" type="warning">Warning</i-button>
    <i-button v-on:click="handleClick" type="error">Error</i-button>
    <a :href="AppUrls.COUNTER" class="home">去往vuex</a>
    <a :href="AppUrls.PACKAGE_A" class="home">分包A</a>
    <a href="/pages/testExtend/main" class="home">测试继承</a>
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
