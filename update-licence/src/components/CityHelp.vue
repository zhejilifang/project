<template>
  <div class="city-help">
    <span @click="showHelpMask">?</span>
    <van-popup v-model="showHelp">
      <img
        class="help-mask-pic"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546529979065&di=1a783ea4f778ff5b2ba98c6e2a22a6d9&imgtype=0&src=http%3A%2F%2Fimage.bitauto.com%2Fdealer%2Fnews%2F100056762%2F41b943a0-c06b-4abf-b4b7-d6a03e96d58d.jpg"
        alt
      >
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "CityHelp",
  inject: {
    num: {
      default: 520
    },
    login: {
      default: () => {}
    }
  },
  data() {
    return {
      // 长传证件图片弹窗
      showHelp: false
    };
  },
  mounted() {
    console.log(this.num);
    this.login();
  },
  methods: {
    showHelpMask() {
      this.showHelp = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.help-mask-pic {
  width: 80%;
}
</style>

