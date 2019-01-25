<template>
  <div class="red-packet">
    <div @click="changePacket">
      <img src="../assets/ee-icon.png" alt>
    </div>
    <section id="packet-mask" v-show="showPacket">
      <div>
        <div class="mask-title">快来领取红包</div>
        <div class="mask-info">
          <img src="../assets/coupon.png" alt>
        </div>
        <div class="mask-btn">
          <button @click="closePacket">残忍拒绝</button>
          <button @click="sharePacket">分享领取</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// 引入分享
import { goShare } from "@/api/index";

export default {
  name: "RedPacket",
  data() {
    return {
      // 分享弹窗显示开关
      showPacket: false
    };
  },
  created() {
    // 分享至朋友圈
    window["CHELUN_SHARE_DATA_WXTIMELINE"] = {
      title: "车轮领红包",
      link:
        "https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
      imgUrl:
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0F/ChMkJltFaI2IbS33ABABY7G9_SQAApmOgH8fkQAEAF7570.jpg",
      type: "photo"
    };
    // 分享至好友
    window["CHELUN_SHARE_DATA_WXMESSAGE"] = {
      title: "快来领取车轮红包啦",
      desc: "微信分享官方文档",
      link:
        "https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
      imgUrl:
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0F/ChMkJltFaI2IbS33ABABY7G9_SQAApmOgH8fkQAEAF7570.jpg"
    };
  },
  methods: {
    changePacket() {
      this.showPacket = true;
    },
    closePacket() {
      this.showPacket = false;
    },
    sharePacket() {
      goShare();
      this.showPacket = false;
    }
  }
};
</script>
<style lang="scss">
#packet-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  > div {
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    .mask-title {
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: #fff;
      color: #555;
      font-size: 18px;
      font-weight: 800;
      border-radius: 5px 5px 0 0;
      border-bottom: 1px solid #ccc;
    }
    .mask-info {
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
    .mask-btn {
      width: 100%;
      height: 36px;
      display: flex;
      border-top: 1px solid #ccc;
      border-radius: 0 0 5px 5px;
      button {
        flex: 1;
        border: 0;
        outline: none;
        background: #fff;
        color: #3aafc0;
        &:nth-of-type(1) {
          border-right: 1px solid #ccc;
          border-radius: 0 0 0 5px;
        }
        &:nth-of-type(2) {
          border-radius: 0 0 5px 0;
        }
      }
    }
  }
}
</style>

