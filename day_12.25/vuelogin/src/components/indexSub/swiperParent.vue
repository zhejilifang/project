<template>
  <swiper v-if="banner.length>1" :options="swiperops">
    <swiper-slide v-for="val in banner" style="width:100%">
      <img :src="'../static/images/'+val.url" alt :style="{width:'100%',display:'block'}">
    </swiper-slide>
    <div class="page swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "swiperParent",
  props: ["banner"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperops: {
        autoplay: {
          delay: 2500
        },
        loop: true,
        pagination: {
          el: ".page"
        }
      }
    };
  }
};
</script>
<style>
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #bedcd2;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet-active {
  background: #353336;
}
</style>