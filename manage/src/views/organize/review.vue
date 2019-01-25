<template>
  <div class="app-container">
    <upload-excel-component :on-success="handleSuccess"/>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <template v-for="item of tableHeader">
        <el-table-column
          v-if="item!='avatar'"
          :prop="item"
          :label="item.toUpperCase()"
          :key="item"
        />
        <el-table-column v-else :prop="item" :label="item.toUpperCase()" :key="item" width="80">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="avatar">
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";

export default {
  name: "Review",
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  width: 60px;
}
</style>