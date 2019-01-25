<template>
  <div class="recommendPage">
    <div class="foundSwiper">
      <div class="banner">
        <swiper-parent :banner="banner"></swiper-parent>
      </div>
    </div>
    <nav class="nav">
      <a href="#">
        <i class="icon iconfont icon-qiaquan"></i>
        <span>私人FM</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-qianbao"></i>
        <span>每日推荐</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-weichat"></i>
        <span>歌单</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-Qzone"></i>
        <span>排行榜</span>
      </a>
    </nav>
    <div class="recommendCont">
      <div class="recommendTitle">
        <strong>推荐歌单</strong>
        <span>&gt;</span>
      </div>
      <ul class="recommendList">
        <li v-for="(item,index) in recommendList" :key="index">
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
  name: "Recommend",
  data() {
    return {
      banner: [
        {
          id: 1,
          url: "banner5.jpg"
        },
        {
          id: 2,
          url: "banner6.jpg"
        },
        {
          id: 3,
          url: "banner7.jpg"
        },
        {
          id: 4,
          url: "banner8.jpg"
        }
      ],
      recommendList: []
    };
  },
  components: {
    swiperParent
  },
  mounted() {
    axios.get("/api/recommendList").then(res => {
      this.recommendList = res.data.list;
    });
  }
};
</script>
<style>
</style>