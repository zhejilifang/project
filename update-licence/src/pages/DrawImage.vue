<template>
  <canvas id="draw-image" ref="canvas"></canvas>
</template>

<script>
// 引入背景图地址
import Bg from "@/assets/bg.jpg";
// 引入图片转换方法
import { imgToBase64, uploadBase64 } from "@/api/index";

export default {
  name: "DrawImage",
  computed: {
    canvas() {
      return this.$refs.canvas;
    },
    context() {
      return this.$refs.canvas.getContext("2d");
    }
  },
  methods: {
    // 封装图片加载
    loadImage(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject();
        };
      });
    }
  },
  async mounted() {
    let { canvas, context } = this;
    // 绘制背景
    let img = await this.loadImage(Bg);
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      img.width,
      img.height
    );
    // 绘制圆形头像
    let userUrl =
      "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK6CxGsHMP2ic1nkZGicMWmJHKic5AKZIzggULElrhuLhSz6AjvMiaMq37x1Yia2CR5ia8JNRViaR6s5DUwA/132";
    let response = await imgToBase64(userUrl);
    //console.log(response);
    let userImg = await this.loadImage(response.data.base64);
    context.save();
    context.arc(140, 792, 43, 0, 360);
    context.clip();
    context.drawImage(
      userImg,
      0,
      0,
      userImg.width,
      userImg.height,
      97,
      749,
      86,
      86
    );
    // 绘制圆形边框
    context.beginPath();
    context.lineWidth = 7;
    context.strokeStyle = "#8db287";
    context.arc(140, 792, 43, 0, 360, false);
    context.stroke();
    context.closePath();
    context.restore();
    // 绘制文字
    context.font = "26px 微软雅黑";
    context.fillStyle = "#1b540d";
    let text = context.measureText("我是李大爷");
    context.fillText("我是李大爷", 140 - text.width / 2, 860);
    // 图片分享
    let base64 = canvas.toDataURL("image/jpeg");
    const upload = await uploadBase64(base64);
    console.log("upload...", upload);
  }
};
</script>

<style lang="scss">
canvas {
  width: 100%;
}
</style>