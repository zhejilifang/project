 <template>
  <div>
    <el-button
      :loading="downloadLoading"
      style="margin: 20px;"
      type="primary"
      icon="document"
      @click="handleDownload"
    >{{ $t('excel.export') }} Excel</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column label="头像" width="80">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt style="width: 100%">
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.create_time | formatDate}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="profile" label="简介" width="150"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="150"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="我的角色" width="150">
        <template slot-scope="scope">
          <el-tag :key="tag" v-for="tag in scope.row.rolers" style="margin:3px;">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="我的权限" width="150">
        <template slot-scope="scope">
          <el-tag :key="tag" v-for="tag in scope.row.access" style="margin:3px;">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button
            size="mini"
            style="margin:5px 0"
            @click="handleRoler(scope.$index, scope.row)"
          >修改角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      align="center"
      :current-page="current"
      :pager-count="13"
      background
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="300"
    ></el-pagination>
    <el-dialog :title="type=='edit'?'编辑用户信息':'修改用户角色'" :visible.sync="dialogFormVisible" center>
      <el-form :model="currentUser" :rules="editRules" ref="editForm">
        <el-form-item v-if="type=='edit'" label="姓名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="currentUser.username"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="头像" :label-width="formLabelWidth">
          <el-upload
            prop="avatar"
            class="avatar-uploader"
            action="http://123.206.55.50:11000/upload"
            :on-success="uploadSuccess"
            :show-file-list="false"
          >
            <img v-if="currentUser.avatar" :src="currentUser.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="简介" :label-width="formLabelWidth" prop="profile">
          <el-input v-model="currentUser.profile"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="currentUser.email"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="currentUser.address"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="currentUser.phone"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='roler'" label="我的角色" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in currentRoler"
            closable
            @close="deleteRoler(tag)"
            style="margin:3px;"
          >{{tag}}</el-tag>
        </el-form-item>
        <el-form-item v-if="type=='roler'" label="全部角色" :label-width="formLabelWidth">
          <el-tag :key="tag" v-for="tag in rolers" style="margin:3px;">
            <span @click="addRoler(tag)">{{tag}}</span>
          </el-tag>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogDeleteVisible" width="30%" center>
      <span>你确定要删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    // 更改简介验证
    const validatorProfile = (rule, value, callback) => {
      if (!value || value.length < 10) {
        callback(new Error("个人简介不能低于10个字"));
      } else {
        callback();
      }
    };
    // 更改手机号验证
    const validatorPhone = (rule, value, callback) => {
      if (
        !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    // 更改邮箱验证
    const validatorEmail = (rule, value, callback) => {
      if (
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    return {
      // 选中页
      current: 1,
      // 选中ID
      currentId: null,
      // 编辑表单弹框开关
      dialogFormVisible: false,
      // 删除用户弹框开关
      dialogDeleteVisible: false,
      // 当前选中用户信息
      currentUser: {},
      // 当前选中用户角色
      currentRoler: [],
      // 所有用户角色
      rolers: ["boss", "developer", "producter", "operator", "designer"],
      // 编辑表单宽度
      formLabelWidth: "120px",
      // 编辑表单验证
      editRules: {
        username: [{ trigger: "blur", required: true, message: "用户名必填" }],
        profile: [
          { trigger: "blur", required: true, validator: validatorProfile }
        ],
        avatar: [
          { trigger: "blur", required: true, message: "请上传您的头像" }
        ],
        address: [{ trigger: "blur", required: true, message: "地址必填" }],
        phone: [{ trigger: "blur", required: true, validator: validatorPhone }],
        email: [{ trigger: "blur", required: true, validator: validatorEmail }]
      },
      // 弹框类型  edit表示编辑用户  roler表示修改角色
      type: "",
      // 表单导出动画
      downloadLoading: false
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.list.userList
    })
  },
  created() {
    // 初始化获取用户列表
    this.getUserList({ page: this.current });
  },
  methods: {
    ...mapActions({
      getUserList: "list/getUserList",
      updateUserInfo: "list/updateUserInfo",
      deleteUserInfo: "list/deleteUserInfo",
      modifyRoler: "list/modifyRoler"
    }),
    // 点击编辑表单按钮
    handleEdit(index, row) {
      console.log("index...", index, row);
      this.currentUser = JSON.parse(JSON.stringify(row));
      this.type = "edit";
      this.dialogFormVisible = true;
    },
    // 图片上传成功
    uploadSuccess(res, file, fileList) {
      console.log("upload_res...", res);
      if (res.code == 1) {
        this.$message({
          message: res.msg,
          center: true,
          type: "success"
        });
        this.currentUser.avatar = res.data[0].path;
      } else {
        this.$message({
          message: res.msg,
          center: true,
          type: "error"
        });
      }
    },
    // 点击删除表单按钮
    handleDelete(index, row) {
      console.log("delete...", row.id);
      this.currentId = row.id;
      // this.deleteUserInfo(row.id)
      //   .then(res => {
      //     this.$message({
      //       message: res,
      //       center: true,
      //       type: "success"
      //     });
      //     this.getUserList({ page: this.current });
      //   })
      //   .catch(err => {
      //     this.$message({
      //       message: err,
      //       center: true,
      //       type: "error"
      //     });
      //   });
      this.dialogDeleteVisible = true;
    },
    // 点击删除弹框确定按钮
    sureDelete() {
      this.deleteUserInfo({ uid: this.currentId })
        .then(res => {
          this.$message({
            message: res,
            center: true,
            type: "success"
          });
          this.getUserList({ page: this.current });
        })
        .catch(err => {
          this.$message({
            message: err,
            center: true,
            type: "error"
          });
        });
      this.dialogDeleteVisible = false;
    },
    // 点击修改角色按钮
    handleRoler(index, row) {
      this.type = "roler";
      this.currentUser = { ...row };
      this.currentRoler = [...row.rolers];
      this.dialogFormVisible = true;
    },
    // 点击删除角色
    deleteRoler(tag) {
      let index = this.currentRoler.findIndex(item => item == tag);
      this.currentRoler.splice(index, 1);
    },
    // 点击添加角色
    addRoler(tag) {
      this.currentRoler.push(tag);
      this.currentRoler = [...new Set(this.currentRoler)];
    },
    // 点击分页器
    handleChange(page) {
      console.log("page...", page);
      this.current = page;
      this.getUserList({ page });
    },
    // 点击表单弹框确定按钮
    submitEdit() {
      console.log("type...", this.type);
      if (this.type == "edit") {
        this.$refs.editForm.validate(valid => {
          if (valid) {
            let {
              id,
              username,
              profile,
              avatar,
              email,
              address,
              phone
            } = this.currentUser;
            this.updateUserInfo({
              id,
              username,
              profile,
              avatar,
              email,
              address,
              phone
            })
              .then(res => {
                this.$message({
                  message: res,
                  center: true,
                  type: "success"
                });
                this.getUserList({ page: this.current });
              })
              .catch(err => {
                this.$message({
                  message: err,
                  center: true,
                  type: "error"
                });
              });
          }
        });
      } else if (this.type == "roler") {
        let rolersId = this.currentRoler.map(item => {
          return this.rolers.findIndex(itm => itm == item) + 1;
        });
        this.modifyRoler({ uid: this.currentUser.id, rolersId })
          .then(res => {
            this.$message({
              message: res,
              center: true,
              type: "success"
            });
            this.getUserList({ page: this.current });
          })
          .catch(err => {
            this.$message({
              message: err,
              center: true,
              type: "error"
            });
          });
      }
      this.dialogFormVisible = false;
    },
    // 导出用户列表
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = Object.keys(this.tableData[0]);
        const data = this.tableData.map(item => {
          return Object.values(item);
        });
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "用户信息",
          autoWidth: true,
          bookType: "xlsx"
        });
        this.downloadLoading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  width: 40px;
  height: 40px;
  display: block;
}
</style>
