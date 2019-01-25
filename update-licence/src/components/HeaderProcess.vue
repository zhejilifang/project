<template>
  <div class="header-process">
    <div
      class="process-item"
      :class="index==actInd?'active':''"
      v-for="(item,index) in processText"
      :key="item.processId"
    >
      <span>{{item.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderProcess",
  props: ["actInd"],
  data() {
    return {
      // 头部进度列表
      processText: [
        {
          processId: 1,
          text: "订单提交"
        },
        {
          processId: 2,
          text: "填写收货地址"
        },
        {
          processId: 3,
          text: "正在办理"
        },
        {
          processId: 4,
          text: "办理完成"
        }
      ]
    };
  }
};
</script>

