<template>
  <div>
    <el-tree
      :data="newData"
      show-checkbox
      node-key="id"
      :expand-on-click-node="false"
      ref="tree"
      default-expand-all
      draggable
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.data.name }}</span>
        <span>
          <el-button
            type="text"
            v-permission="['staff']"
            size="mini"
            @click="() => append(node,data)"
          >Append</el-button>
          <el-button
            type="text"
            v-permission="['staff']"
            size="mini"
            @click="() => remove(node, data)"
          >Delete</el-button>
        </span>
      </span>
    </el-tree>
    <el-dialog :title="type=='add'?'添加职位':'删除职位'" :visible.sync="dialogVisible" width="30%">
      <el-input v-if="type=='add'" v-model="temp" placeholder="请输入你的职位"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 更改职位弹框开关
      dialogVisible: false,
      // 当前选中职位
      current: {},
      // 增加职位表单内容
      temp: "",
      // 弹框类型判断 add表示添加职位 sub表示移除职位
      type: "",
      // 格式化后的数据
      newData: [],
      // 初始职位数据
      organize: [
        {
          id: 1,
          name: "拳打南山敬老院事业部",
          parentid: ""
        },
        {
          id: 2,
          name: "脚踢北海幼儿园事业部",
          parentid: ""
        },
        {
          id: 3,
          name: "啥事都是你们干总经办",
          parentid: ""
        },
        {
          id: 4,
          name: "技术研发",
          parentid: 1
        },
        {
          id: 5,
          name: "产品研发",
          parentid: 1
        },
        {
          id: 6,
          name: "市场渠道",
          parentid: 1
        },
        {
          id: 7,
          name: "商业合作",
          parentid: 1
        },
        {
          id: 8,
          name: "前端开发",
          parentid: 4
        },
        {
          id: 9,
          name: "后端开发",
          parentid: 4
        },
        {
          id: 10,
          name: "ios开发",
          parentid: 4
        },
        {
          id: 11,
          name: "android开发",
          parentid: 4
        },
        {
          id: 12,
          name: "测试",
          parentid: 4
        },
        {
          id: 13,
          name: "运维",
          parentid: 4
        },
        {
          id: 14,
          name: "设计",
          parentid: 4
        },
        {
          id: 15,
          name: "产品",
          parentid: 5
        },
        {
          id: 16,
          name: "运营",
          parentid: 5
        },
        {
          id: 17,
          name: "产品总监",
          parentid: 15
        },
        {
          id: 18,
          name: "产品经理",
          parentid: 15
        },
        {
          id: 19,
          name: "资深前端开发",
          parentid: 8
        },
        {
          id: 20,
          name: "高级前端开发",
          parentid: 8
        },
        {
          id: 21,
          name: "初级前端开发",
          parentid: 8
        },
        {
          id: 22,
          name: "孙月",
          parentid: 20
        }
      ]
    };
  },
  created() {
    this.formatData(this.organize);
  },
  methods: {
    // 格式化数据
    formatData(arr) {
      let newArr = [];
      arr.forEach(item => {
        if (!item.parentid) {
          newArr.push(item);
        } else {
          this.findItem(newArr, item);
        }
      });
      this.newData = newArr;
    },
    // 递归查找父元素
    findItem(arr, item) {
      arr.forEach(value => {
        if (value.id == item.parentid) {
          if (value.children) {
            value.children.push(item);
          } else {
            value.children = [item];
          }
        } else if (value.children) {
          this.findItem(value.children, item);
        }
      });
    },
    // 点解添加职位按钮
    append(node, data) {
      this.type = "add";
      this.dialogVisible = true;
      this.current = {
        node,
        data
      };
      console.log("add_node...", node, "add_data...", data);
    },
    // 点击删除职位按钮

    remove(node, data) {
      this.type = "sub";
      this.dialogVisible = true;
      this.current = {
        node,
        data
      };
      console.log("sub_node...", node, "sub_data...", data);
    },
    // 点击弹框确定按钮
    handleSubmit() {
      if (this.type == "add") {
        if (this.temp) {
          let newItem = {
            id: this.organize[this.organize.length - 1].id + 1,
            name: this.temp,
            parentid: this.current.data.id
          };
          this.organize.push(newItem);
          this.$refs.tree.append(newItem, this.current.node);
          this.temp = "";
        }
      } else if (this.type == "sub") {
        this.$refs.tree.remove(this.current.node);
      }
      this.dialogVisible = false;
    }
  }
};
</script>
