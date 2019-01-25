<template>
  <div class="gohome-page">
    <img src="../assets/decorate_left.png" class="decorate decorate-left">
    <img src="../assets/decorate_right.png" class="decorate decorate-right">
    <div class="gohome-content">
      <div class="step-header">
        <img src="../assets/logo@2x.png" class="logo">
        <h1 class="step-title">春节回家每日一谎步骤</h1>
        <div class="title-line"></div>
      </div>
      <div class="step-content">
        <div class="step-list">
          <div class="step-item">
            <h3 class="item-title">Step 1</h3>
            <p class="item-info">选择谎话背景图</p>
          </div>
          <div class="step-item">
            <h3 class="item-title">Step 2</h3>
            <p class="item-info">选择贴心谎话</p>
          </div>
          <div class="step-item">
            <h3 class="item-title">Step 3</h3>
            <p class="item-info">生成谎话海报，领取免费春节“治”人攻略</p>
          </div>
        </div>
        <div class="start-btn">
          <button>开始制作</button>
        </div>
      </div>
      <div class="activity-rules">
        <p>活动规则：</p>
        <p>2月3日-2月7日，春节全程谎言陪伴，每天不再担心各种质问，同时天天都能有攻略（免费会员课程）领取哦！</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoHome"
};
</script>
<style lang="scss" scoped>
.gohome-page {
  width: 100%;
  height: 100%;
  background: url("../assets/bg.png") no-repeat;
  background-size: cover;
  position: relative;
  padding: 0.5rem 0.5rem 0 0.5rem;
  .decorate {
    width: 0.74rem;
    height: 0.73rem;
    position: absolute;
    top: 0.3rem;
    &.decorate-left {
      left: 0.3rem;
    }
    &.decorate-right {
      right: 0.3rem;
    }
  }
  .gohome-content {
    width: 100%;
    height: 100%;
    .step-header {
      width: 100%;
      position: relative;
      height: 2.5rem;
      .logo {
        width: 1rem;
        height: 1.14rem;
      }
      .step-title {
        width: 4.8rem;
        height: 1.6rem;
        font-family: AliHYAiHei;
        font-size: 0.6rem;
        color: #fed59e;
        text-align: right;
        position: absolute;
        right: 0;
        top: 0.2rem;
        font-weight: 800;
      }
      .title-line {
        width: 1rem;
        height: 0.08rem;
        background: #fed59e;
        position: absolute;
        right: 0;
        top: 2rem;
      }
    }
    .step-content {
      width: 100%;
      .step-list {
        width: 100%;
        padding: 0.5rem 0;
        .step-item {
          width: 100%;
          padding: 0.5rem 0;
          font-family: AliHYAiHei;
          color: #ffffff;
          font-weight: 800;
          position: relative;
          .item-title {
            font-size: 0.36rem;
            height: 0.48rem;
            line-height: 0.48rem;
          }
          .item-info {
            font-size: 0.34rem;
            height: 0.45rem;
            line-height: 0.45rem;
          }
          &:after {
            content: "";
            width: 0.6rem;
            height: 0.04rem;
            position: absolute;
            left: 0;
            background: #ffffff;
            bottom: 0.4rem;
          }
        }
      }
      .start-btn {
        width: 100%;
        text-align: center;
        button {
          width: 2.6rem;
          height: 0.66rem;
          border: 0.02rem solid #fff;
          border-radius: 0.02rem;
          outline: none;
          background: none;
          color: #fff;
        }
      }
    }
    .activity-rules {
      width: 100%;
      font-family: PingFangSC-Regular;
      font-size: 0.24rem;
      color: #ffffff;
      padding-top: 0.3rem;
    }
  }
}
</style>


