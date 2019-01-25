<template>
  <div class="accountMsgItem">
    <div class="accountMsgItemCont">
      <div class="msgIcon">
        <i class="icon iconfont icon-xiaoxi"></i>
      </div>
      <div class="msgCont" :class="hasBorBot?'bor_bot':''">
        <span class="msgText">{{text}}</span>
        <span class="goToIcon">
          <i class="icon iconfont icon-chevron-thin-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "accountMsgItem",
  data() {
    return {};
  },
  props: ["text", "hasBorBot"]
};
</script>
<style>
.accountMsgItem {
  width: 100%;
  height: 46px;
  line-height: 46px;
}
.accountMsgItemCont {
  width: 100%;
  display: flex;
  align-items: center;
}
.msgIcon {
  width: 46px;
  height: 46px;
  text-align: center;
}
.msgCont {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
}
.msgCont.bor_bot {
  border-bottom: 1px solid #eee;
}
</style>
