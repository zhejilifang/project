<template>
  <div class="type-service">
    <div class="service-item service-type">
      <div class="type-text">
        <span>服务类型</span>
      </div>
      <div class="type-change" @click="changeType">
        <span>{{type}}</span>
        <strong class="type-icon">&gt;</strong>
      </div>
    </div>
    <section id="type-model" v-model="showType">
      <van-popup v-model="showType" overlay position="bottom">
        <van-picker
          :columns="typeArray"
          show-toolbar
          title="服务类型"
          @cancel="onTypeCancel"
          @confirm="onTypeConfirm"
        />
      </van-popup>
    </section>
  </div>
</template>
<script>
export default {
  name: "TypePicker",
  data() {
    return {
      // 初始化显示服务类型
      type: "换驾照",
      // 服务类型picker开关
      showType: false,
      // 服务类型列表
      typeArray: ["换驾照", "补驾照"]
    };
  },
  methods: {
    changeType() {
      this.showType = true;
    },
    onTypeCancel() {
      this.showType = false;
    },
    onTypeConfirm(value) {
      this.type = value;
      this.onTypeCancel();
    }
  }
};
</script>
