<template>
  <div class="account">
    <div class="myLogin">
      <div class="titleMsg">
        <p>登录网易云音乐</p>
        <p>手机电脑多端同步，尽享海量高品质音乐</p>
        <button class="toLoginView">立即登录</button>
      </div>
    </div>
    <div class="accountMsg">
      <div class="myNews">
        <accountMsgItem :text="'我的信息'" :hasBorBot="false"/>
      </div>
      <div class="accountShop">
        <div
          class="accountShopItem"
          v-for="(item,index) in accountShopList"
          :key="index"
          @click="toView(item.path)"
        >
          <accountMsgItem :text="item.text" :hasBorBot="item.hasBorBot"/>
        </div>
      </div>
      <div class="accountSet">
        <div class="accountSetItem" v-for="(item,index) in accountSetList" :key="index">
          <accountMsgItem :text="item.text" :hasBorBot="item.hasBorBot"/>
        </div>
      </div>
      <div class="accountShare">
        <div class="accountShareItem" v-for="(item,index) in accountShareList" :key="index">
          <accountMsgItem :text="item.text" :hasBorBot="item.hasBorBot"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import accountMsgItem from "./accountLi";

export default {
  name: "Account",
  data() {
    return {
      accountShopList: [
        {
          id: 1,
          text: "会员中心",
          hasBorBot: true,
          path: "/vip"
        },
        {
          id: 2,
          text: "商城",
          hasBorBot: true
        },
        {
          id: 3,
          text: "精品游戏推荐",
          hasBorBot: true
        },
        {
          id: 4,
          text: "在线听歌免流量",
          hasBorBot: false
        }
      ],
      accountSetList: [
        {
          id: 1,
          text: "设置",
          hasBorBot: true
        },
        {
          id: 2,
          text: "扫一扫",
          hasBorBot: true
        },
        {
          id: 3,
          text: "个性换肤",
          hasBorBot: true
        },
        {
          id: 4,
          text: "夜间模式",
          hasBorBot: false
        },
        {
          id: 5,
          text: "定时关闭",
          hasBorBot: true
        },
        {
          id: 6,
          text: "音乐闹钟",
          hasBorBot: true
        },
        {
          id: 7,
          text: "驾驶模式",
          hasBorBot: true
        },
        {
          id: 8,
          text: "亲子频道",
          hasBorBot: true
        },
        {
          id: 9,
          text: "小冰电台",
          hasBorBot: true
        },
        {
          id: 10,
          text: "优惠券",
          hasBorBot: false
        }
      ],
      accountShareList: [
        {
          id: 1,
          text: "分享网易云音乐",
          hasBorBot: true
        },
        {
          id: 2,
          text: "关于",
          hasBorBot: false
        }
      ]
    };
  },
  components: {
    accountMsgItem
  },
  methods: {
    toView(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>
<style>
</style>