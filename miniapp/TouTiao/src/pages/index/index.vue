<template>
  <div class="counter-warp">
    <div class="index-header">
      <div class="search-btn">
        <i-icon type="search" size="24" color="#000"/>
      </div>
      <div class="tab-channels">
        <i-tabs :current="current" scroll color="#F85151" i-class="channels-item">
          <i-tab
            v-for="(value,index) in channels"
            v-if="!value.defaultNotShow"
            :key="value.name"
            :title="value.name"
            @click="handleClickTab(value.name,value.appUrl)"
          ></i-tab>
        </i-tabs>
      </div>
      <div class="change-btn">
        <div class="add-btn">
          <i-icon type="add" size="24" color="#000"/>
        </div>
        <div class="user-btn">
          <i-icon type="addressbook" size="24" color="#000"/>
        </div>
      </div>
    </div>
    <div class="news-cont">
      <NewsList :list="newsList"></NewsList>
    </div>
    <div :class="{refresh:true, active:isRefresh}" @click="refreshPage">
      <img src="../../assets/refresh.png">
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
  padding-top: 45px;
}
.index-header {
  width: 100%;
  height: 45px;
  display: flex;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  z-index: 99;
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
    .channels-item {
      height: 100%;
      color: #333;
      font-weight: 800;
      font-size: 16px;
    }
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
.news-cont {
  width: 100%;
}
.refresh {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 10px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-shadow: 0 0 2px 1px #999;
  img {
    width: 24px;
    height: 24px;
  }
  &.active {
    animation: rotateD 1.2s linear infinite;
  }
  @keyframes rotateD {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(720deg);
    }
  }
}
</style>
