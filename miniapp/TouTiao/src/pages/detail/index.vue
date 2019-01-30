<template>
  <div class="container-detail">
    <h1 class="avatar-title">{{info.title}}</h1>
    <div class="avatar-media" v-if="info.media_user">
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
        <button class="add-font-btn" @click="changeFont('add')">A+</button>
        <button class="sub-font-btn" @click="changeFont('sub')">A-</button>
      </div>
    </div>
    <div class="avatar-content">
      <div class="avatar-paragraph" v-for="(item, index) in formatContent" :key="index">
        <p
          :style="{fontSize:size+'px'}"
          class="avatar-text"
          v-if="item.type=='text'"
        >{{item.content}}</p>
        <img
          v-else-if="item.type=='image'"
          mode="widthFix"
          :src="item.info.src"
          :alt="item.info.alt"
        >
        <video v-else-if="item.type=='video'" :src="item.info"></video>
      </div>
    </div>
    <div class="avatar-comment">
      <h1 class="comment-title">
        <span>热门评论</span>
      </h1>
      <div class="comment-list">
        <div class="comment-item" v-for="(value,index) in comment" :key="value.id">
          <p class="comment-pic">
            <img :src="value.comment.user_profile_image_url">
          </p>
          <div class="comment-info">
            <p class="comment-user">
              <span class="comment-name">{{value.comment.user_name}}</span>
              <span class="comment-praise">
                <i-icon type="praise" size="20" color="#999" class="praise"/>
                {{value.comment.digg_count}}
              </span>
            </p>
            <p class="comment-cont">{{value.comment.text}}</p>
            <p class="comment-time">{{value.comment.create_time}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="avatar-footer">
      <div class="write-comment">
        <span class="editor">
          <i-icon type="editor" size="18" color="#000"/>
        </span>
        <input
          type="text"
          :placeholder="placeholder"
          placeholder-style="color:#333"
          @focus="placeholder='优质评论优先展开'"
          @blur="placeholder='写评论...'"
        >
      </div>
      <div class="purpose-btns">
        <span class="comment-btn">
          <i-icon type="interactive" size="26"/>
          <b class="comment-count">{{comment.length}}</b>
        </span>
        <span class="collect-btn" @click="changeCollect">
          <i-icon
            :type="isCollection?'collection_fill':'collection'"
            :color="isCollection?'#FFCA28':''"
            size="26"
          />
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
  padding: 20px 10px 60px 10px;
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
    border-bottom: 1px solid #ccc;
    img,
    video {
      width: 100%;
    }
    .avatar-paragraph {
      width: 100%;
      padding: 15px 0;
      .avatar-text {
        font-size: inherit;
      }
    }
  }
  .avatar-comment {
    width: 100%;
    .comment-title {
      width: 100%;
      padding: 15px 0;
      span {
        width: 100%;
        height: 100%;
        border-left: 1px solid #d43d3d;
        font-size: 14px;
        color: #999;
        padding-left: 5px;
      }
    }
    .comment-list {
      width: 100%;
      .comment-item {
        display: flex;
        padding: 15px 0;
        .comment-pic {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 0;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .comment-info {
          flex: 1;
          padding-left: 10px;
          .comment-user {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            .comment-name {
              color: #486495;
            }
            .comment-praise {
              display: flex;
              align-items: center;
              color: #777;
              font-size: 12px;
              .praise {
                margin-right: 8px;
              }
            }
          }
          .comment-cont {
            width: 100%;
            padding: 8px 0;
            font-size: 16px;
          }
          .comment-time {
            width: 100%;
            font-size: 12px;
            color: #222;
          }
        }
      }
    }
  }
  .avatar-footer {
    width: 100%;
    height: 42px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1rpx solid #ccc;
    padding: 6px 10px;
    .write-comment {
      flex: 1;
      height: 100%;
      padding-right: 15px;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        background: #eee;
        border-radius: 18px;
        padding: 0 10px 0 36px;
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
      .comment-btn {
        position: relative;
        .comment-count {
          position: absolute;
          right: -4rpx;
          top: 0;
          color: #fff;
          background: red;
          font-size: 16rpx;
          line-height: 1;
          border-radius: 10rpx;
          padding: 4rpx 10rpx;
        }
      }
    }
  }
}
</style>
