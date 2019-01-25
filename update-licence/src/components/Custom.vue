<template>
  <div class="custom">
    <div @click="changeCustom">
      <img src="../assets/cc-icon.png" alt>
    </div>
    <section id="custom-mask" v-show="showCustom">
      <div>
        <button id="cc">联系客服</button>
        <a href="tel:17600194842">拨打电话</a>
        <button @click="cancel">取消</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Custom",
  data() {
    return {
      // 客服弹窗控制开关
      showCustom: false
    };
  },
  methods: {
    changeCustom() {
      this.showCustom = true;
    },
    cancel() {
      this.showCustom = false;
    }
  }
};
</script>
<style lang="scss">
#custom-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 99;
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    button,
    a {
      width: 100%;
      height: 40px;
      font-size: 16px;
      letter-spacing: 10px;
      border-radius: 10px;
      color: #3aafc0;
      outline: none;
      border: 0;
      background: #eee;
      line-height: 40px;
    }
    button:first-child {
      border-radius: 10px 10px 0 0;
    }
    a {
      border-radius: 0 0 10px 10px;
      text-align: center;
    }
    button:last-child {
      margin: 10px 0;
    }
  }
}
</style>

