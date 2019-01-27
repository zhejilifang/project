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
      <div class="news-list">
        <div class="news-item" v-for="(value,index) in newsList" :key="value.item_id">
          <h2 class="item-title">{{value.title}}</h2>
          <p class="item-info">
            <span class="media-name">{{value.media_name}}</span>
            <span class="comment-count">{{value.comment_count}}评论</span>
            <span class="item-remove">x</span>
          </p>
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
  .news-list {
    width: 100%;
    padding: 0 15px;
    .news-item {
      width: 100%;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      .item-title {
        width: 100%;
        font-size: 18px;
        color: #000;
      }
      .item-info {
        line-height: 2.5;
        font-size: 12px;
        color: #999;
        position: relative;
        .comment-count {
          padding: 0 10px;
        }
        .item-remove {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 12px;
          padding: 0 8px;
          border-radius: 7px;
          border: 1px solid #999;
          line-height: 10px;
          text-align: center;
        }
      }
    }
  }
}
</style>
