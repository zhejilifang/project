<template>
  <div class="counter-warp">
    <div class="index-header">
      <div class="search-btn">
        <i-icon type="search" size="20" color="#000"/>
      </div>
      <div class="tab-channels">
        <i-tabs :current="current" scroll color="#F85151">
          <i-tab
            v-for="(value,index) in channels"
            :key="value.name"
            :title="value.name"
            @click="handleClickTab(value.name)"
          ></i-tab>
        </i-tabs>
      </div>
      <div class="change-btn">
        <div class="add-btn">
          <i-icon type="add" size="20" color="#000"/>
        </div>
        <div class="user-btn">
          <i-icon type="addressbook" size="20" color="#000"/>
        </div>
      </div>
    </div>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>


<style lang="less">
.counter-warp {
  width: 100%;
  height: 100%;
  .index-header {
    width: 100%;
    height: 45px;
    display: flex;
    border-bottom: 1px solid #ccc;
    .search-btn {
      width: 44px;
      height: 44px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    .tab-channels {
      flex: 1;
      height: 100%;
      overflow: hidden;
    }
    .change-btn {
      width: 88px;
      height: 44px;
      display: flex;
      border-left: 1px solid #ccc;
      flex-shrink: 0;
      .add-btn,
      .user-btn {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
