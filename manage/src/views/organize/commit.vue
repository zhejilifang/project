<template>
  <div class="commit-editor-container">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <ve-line :data="chartData"></ve-line>
    </el-row>
  </div>
</template>
 
<script>
import VeLine from "v-charts/lib/line.common";
import { mapActions } from "vuex";

export default {
  components: { VeLine },
  mounted() {
    this.formatCommit();
  },
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    ...mapActions({
      getCommitData: "list/getCommitData"
    }),
    // 格式化数据
    formatCommit() {
      this.getCommitData().then(res => {
        let data = res[0].commit;
        data.forEach((item, index) => {
          let date = item.date;
          for (let i = 1; i <= 12; i++) {
            item[`${i}月`] =
              res[i - 1].commit[date - 1] && res[i - 1].commit[date - 1].commit;
          }
          delete item.commit;
        });
        this.chartData = {
          columns: [
            "date",
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          rows: data
        };
      });
    }
  }
};
</script> 
<style rel="stylesheet/scss" lang="scss" scoped>
.commit-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
}
</style>