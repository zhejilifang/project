<template>
  <div class="stationPage">
    <div class="foundSwiper">
      <div class="banner">
        <swiper-parent :banner="banner"></swiper-parent>
      </div>
    </div>
    <nav class="nav">
      <a href="#">
        <i class="icon iconfont icon-gongzuo"></i>
        <span>电台分类</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-zixun"></i>
        <span>电台排行</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-27"></i>
        <span>DI电音</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-tianmao1"></i>
        <span>小冰电台</span>
      </a>
    </nav>
    <div class="stationCont">
      <div class="stationTitle">
        <strong>今日优选</strong>
        <span>
          <i class="icon iconfont icon-infenicon18"></i>
          换一换
        </span>
      </div>
      <ul class="stationList">
        <li v-for="(item,index) in stationList" :key="index">
          <dl>
            <dt>
              <img :src="item.imgurl">
            </dt>
            <dd>{{item.dissname}}</dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import swiperParent from "./swiperParent";
import axios from "axios";
export default {
  name: "Station",
  data() {
    return {
      banner: [
        {
          id: 1,
          url: "banner1.jpg"
        },
        {
          id: 2,
          url: "banner2.jpg"
        },
        {
          id: 3,
          url: "banner3.jpg"
        },
        {
          id: 4,
          url: "banner4.jpg"
        }
      ],
      stationList: []
    };
  },
  components: {
    swiperParent
  },
  mounted() {
    axios.get("/api/stationList").then(res => {
      this.stationList = res.data.list;
    });
  }
};
</script>
<style>
</style>
