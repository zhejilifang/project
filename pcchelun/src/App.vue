<template>
  <div class="wrap">
    <div class="header">
      <div class="head wraper">
        <img src="./assets/logo.png" alt>
        <ul>
          <li>产品</li>
          <li>关于我们</li>
          <li>大数据</li>
          <li>新闻</li>
          <li>招聘</li>
          <li>商城</li>
          <li>登录/注册</li>
        </ul>
        <i class="icon">
          <img src="./assets/列表.png" alt>
        </i>
      </div>
    </div>
    <div class="banner">
      <img src="./assets/banner.png" alt>
    </div>
    <div class="tap">
      <div class="taplist wraper">
        <ul>
          <li>分析评论</li>
          <li>趋势榜单</li>
          <li>研究报告</li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="con wraper">
        <div class="one">
          <h3>
            <i></i>
            <span>SUV</span>
            <em>TOP10</em>
          </h3>
          <div id="myChart" :style="{width: '500px', height: '400px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            "吉利博越",
            "冠道",
            "本田XR-V",
            "哈弗H6",
            "途观",
            "全新途胜",
            "本田CR-V",
            "缤智",
            "奔驰GLA级",
            "汉兰达"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Jan/18", "Mar/18", "May/18", "Jul/18", "Sep/18", "Nov/18"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "吉利博越",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230]
          },
          {
            name: "冠道",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: "本田XR-V",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330]
          },
          {
            name: "哈弗H6",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330]
          },
          {
            name: "全新途胜",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330]
          },
          {
            name: "本田CR-V",
            type: "line",
            stack: "总量",
            data: [200, 300, 400, 500, 600, 700]
          },
          {
            name: "缤智",
            type: "line",
            stack: "总量",
            data: [123, 444, 785, 456, 789, 700]
          },
          {
            name: "奔驰GLA级",
            type: "line",
            stack: "总量",
            data: [155, 489, 357, 753, 851, 951]
          },
          {
            name: "汉兰达",
            type: "line",
            stack: "总量",
            data: [555, 666, 888, 772, 687, 786]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.wraper {
  width: 1000px;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 111px;
  background: #577efe;
  line-height: 111px;
  .head {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 120px;
      height: 39px;
    }
    ul {
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        padding: 0 10px 0;
        height: 40px;
        line-height: 40px;
        color: #333;
        font-size: 20px;
      }
      li:last-child {
        font-size: 15px;
      }
    }
    .head.icon {
      display: none;
    }
  }
}
.banner {
  width: 100%;
  img {
    width: 100%;
  }
}
.tap {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
  line-height: 70px;
  .taplist {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      li {
        margin-right: 140px;
      }
      li:nth-child(2) {
        border-bottom: 3px solid skyblue;
      }
    }
  }
}
.section {
  width: 100%;
  .con {
    .one {
      h3 {
        color: #ccc;
        display: flex;
        align-items: center;
        padding: 30px 0;
        box-sizing: border-box;
        i {
          display: inline-block;
          width: 6px;
          height: 20px;
          background: skyblue;
          margin-right: 5px;
        }
        em {
          margin-left: 5px;
          font-style: normal;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .header {
    .head {
      width: 100%;
      display: flex;
      align-items: center;
      ul {
        display: none;
      }
      background: #577efe;
      .icon {
        display: block;
        width: 50px;
        height: 40px;
        line-height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      background: #fff;
    }
  }
}
@media screen and (min-width: 1000px) {
  .head {
    ul {
      display: block;
    }
    .icon {
      display: none;
    }
  }
}
</style>
