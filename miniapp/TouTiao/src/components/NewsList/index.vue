<template>
  <div class="news-list">
    <div
      class="news-item"
      v-for="(value,index) in list"
      v-if="value.title"
      :key="value.item_id"
      @click="handleToDetail(value.display_url)"
    >
      <div class="item-cont">
        <h2 class="item-title">{{value.title}}</h2>
        <div class="item-gallery">
          <img :src="value.url" mode="widthFix" v-for="(value, key) in value.image_list" :key="key">
        </div>
        <p class="item-info">
          <span class="media-name">{{value.media_name}}</span>
          <span class="comment-count">{{value.comment_count}}评论</span>
          <span class="item-remove" @click.stop="removeNews(value.item_id)">x</span>
        </p>
      </div>
      <div class="item-photo" v-if="!value.image_list && value.middle_image">
        <img class="middle-image" mode="widthFix" :src="value.middle_image.url">
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="less" scoped>
.news-list {
  width: 100%;
  padding: 0 15px;
  .news-item {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    .item-cont {
      width: 100%;
      .item-title {
        width: 100%;
        font-size: 18px;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .item-info {
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
      .item-gallery {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        img {
          flex: 1;
          &:nth-child(2) {
            margin: 0 10rpx;
          }
        }
      }
    }
    .item-photo {
      width: 45%;
      flex-shrink: 0;
      padding-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>

