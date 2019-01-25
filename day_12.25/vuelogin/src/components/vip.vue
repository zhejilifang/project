<template>
  <div class="vipPage">
    <div class="vipHeader">
      <div class="back" @click="goBack">
        <i class="icon iconfont icon-chevron-thin-left"></i>
      </div>
      <div class="vipHeaderText">会员中心</div>
      <div class="vipUser">
        <i class="icon iconfont icon-yonghu"></i>
        <i class="icon iconfont icon-WIFI"></i>
      </div>
    </div>
    <div class="vipCont">
      <div class="vipCardList">
        <div class="vipCardTab">
          <div class="cardCont">
            <div class="cardMain">
              <div class="primeTitle">
                <img
                  src="https://p1.music.126.net/LoFHBRZnnaKNN0fAUQsahg==/109951163314278985.png"
                  alt
                >
              </div>
              <div class="primeDesc">黑胶VIP专属特权 + 音乐包特权</div>
              <div class="actionBtns">
                <button>立即加入</button>
              </div>
            </div>
          </div>
        </div>
        <div class="vipCardTab red">
          <div class="cardCont">
            <div class="cardMain">
              <div class="primeTitle">
                <img
                  src="https://p1.music.126.net/QmKAsPUbGdqDeCNVBF8xiQ==/109951163314281339.png"
                  alt
                >
              </div>
              <div class="primeDesc">开通畅享付费音乐特权</div>
              <div class="actionBtns">
                <button>立即加入</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vipTabCont"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Vip",
  methods: {
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>
<style>
</style>
