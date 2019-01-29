<template>
  <div class="container-detail">
    <h1 class="avatar-title">{{info.title}}</h1>
    <div class="avatar-media">
      <div class="media-pic">
        <img :src="info.media_user.avatar_url" mode="widthFix">
      </div>
      <div class="media-user">
        <p class="screen-name">
          {{info.media_user.screen_name}}
          <span
            v-if="info.media_user.user_auth_info"
          >{{info.media_user.user_auth_info.auth_info}}</span>
        </p>
        <p class="publish-time">{{publishTime}}</p>
      </div>
      <div class="action-btns">
        <button>A+</button>
        <button>A-</button>
      </div>
    </div>
    <div class="avatar-content">
      <div class="avatar-paragraph" v-for="(item, index) in formatContent" :key="index">
        <p class="avatar-text" v-if="item.type=='text'">{{item.content}}</p>
        <img
          v-else-if="item.type=='image'"
          mode="widthFix"
          :src="item.info.src"
          :alt="item.info.alt"
        >
        <video v-else-if="item.type=='video'" :src="item.info"></video>
      </div>
    </div>
    <div class="avatar-footer">
      <div class="write-comment">
        <span class="editor">
          <i-icon type="editor" size="18" color="#000"/>
        </span>
        <input type="text" :placeholder="placeholder" placeholder-style="color:#333">
      </div>
      <div class="purpose-btns">
        <span class="comment-btn">
          <i-icon type="interactive" size="26"/>
        </span>
        <span class="collect-btn">
          <i-icon :type="isCollection?'collection_fill':'collection'" size="26"/>
        </span>
        <button class="share-btn" open-type="share">
          <i-icon type="share" size="26"/>
        </button>
        <span class="circle-btn">
          <i-icon type="share" size="26"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.container-detail {
  width: 100%;
  padding: 20px 15px 60px 15px;
  .avatar-title {
    width: 100%;
    font-size: 24px;
    font-weight: 800;
  }
  .avatar-media {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    .media-pic {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .media-user {
      flex: 1;
      padding-left: 8px;
      .screen-name {
        font-size: 16px;
        color: #333;
        span {
          font-size: 12px;
          color: #fff;
          background: #f85151;
          border-radius: 5px;
          padding: 0 5px;
        }
      }
      .publish-time {
        font-size: 14px;
        color: #999;
      }
    }
    .action-btns {
      display: flex;
      button {
        color: #333;
        font-size: 14px;
        line-height: 1.5;
        margin-left: 8px;
        padding: 0 5px;
      }
    }
  }
  .avatar-content {
    width: 100%;
    img,
    video {
      width: 100%;
    }
    .avatar-paragraph {
      width: 100%;
      font-size: 18px;
      padding: 15px 0;
    }
  }
  .avatar-footer {
    width: 100%;
    height: 46px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1rpx solid #ccc;
    padding: 8px 0;
    .write-comment {
      flex: 1;
      padding: 0 15px;
      height: 100%;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        background: #eee;
        border-radius: 18px;
        padding-left: 36px;
        box-sizing: border-box;
        font-size: 14px;
      }
      .editor {
        position: absolute;
        left: 15px;
        top: 0;
        width: 26px;
        height: 24px;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .purpose-btns {
      padding: 0 15px;
      display: flex;
      align-items: center;
      span,
      button {
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
      }
      button::after {
        border: none;
      }
    }
  }
}
</style>
