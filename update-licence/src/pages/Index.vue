<template>
  <div id="update-licence">
    <HeaderProcess :actInd="actInd"/>
    <div class="banner">
      <img src="http://picture.eclicks.cn/g2/img/r/2018/11/07/62e0398785c38983.jpg" alt>
    </div>
    <Upload/>
    <div class="service-list">
      <TypePicker/>
      <CityPicker/>
      <div class="service-item service-charge">
        <div class="charge-text">
          <span>服务费</span>
        </div>
        <div class="charge-price">
          <span>￥{{money?money:'399.00'}}</span>
        </div>
      </div>
    </div>
    <div class="discounts">
      <div class="discounts-text">
        <span>优惠</span>
      </div>
      <div class="discounts-find">
        <span>登录后查看优惠卷</span>
        <strong class="discounts-icon">&gt;</strong>
      </div>
    </div>
    <p class="FAQ">
      <router-link to="/FAQ">常见问题?</router-link>
    </p>
    <Custom/>
    <div class="footer-pay">
      <div class="pay-text">
        <span>实付:</span>
        <span class="pay-price">￥399</span>
      </div>
      <div class="pay-btn">
        <button @click="toPay">立即支付</button>
      </div>
    </div>
  </div>
</template>
<script>
// 引入辅助方法
import { mapState } from "vuex";
// 引入请求
import { isVip, goPay } from "@/api/index";

// 引入组件
import HeaderProcess from "@/components/HeaderProcess";
import Upload from "@/components/Upload";
import CityPicker from "@/components/CityPicker";
import TypePicker from "@/components/TypePicker";
import Custom from "@/components/Custom";

export default {
  name: "IndexPage",
  components: {
    Upload,
    CityPicker,
    TypePicker,
    Custom,
    HeaderProcess
  },
  data() {
    return {
      // 头部初始化样式
      actInd: 0
    };
  },
  computed: {
    ...mapState({
      money: state => state.cityPicker.money
    })
  },
  mounted() {
    isVip().then(res => {
      console.log("isVip...", res);
    });
  },
  methods: {
    toPay() {
      this.$router.push({ path: "/address" });
      //goPay();
    }
  },
  activated() {
    console.log("重新渲染...");
  },
  deactivated() {
    console.log("....");
  }
};
</script>
<style>
</style>

