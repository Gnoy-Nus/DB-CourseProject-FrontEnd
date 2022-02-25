<template>
  <div class="teacherdata">
    <el-form :inline="true" :model="formInline" class="formselect">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="研究方向">
        <el-input v-model="formInline.field" placeholder="研究方向"></el-input>
      </el-form-item>
      <el-form-item label="职称">
        <el-select v-model="formInline.title" placeholder="职称">
          <el-option label="教授" value="教授"></el-option>
          <el-option label="副教授" value="副教授"></el-option>
          <el-option label="讲师" value="讲师"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="院系名称">
        <el-select v-model="formInline.college" placeholder="院系名称">
          <el-option
            label="计算机工程与科学学院"
            value="计算机工程与科学学院"
          ></el-option>
          <el-option label="理学院" value="理学院"></el-option>
          <el-option label="钱伟长学院" value="钱伟长学院"></el-option>
          <el-option
            label="材料科学与工程学院"
            value="材料科学与工程学院"
          ></el-option>
          <el-option
            label="通信与信息工程学院"
            value="通信与信息工程学院"
          ></el-option>
          <el-option label="经济学院" value="经济学院"></el-option>
          <el-option label="管理学院" value="管理学院"></el-option>
          <el-option label="文学院" value="文学院"></el-option>
          <el-option label="法学院" value="法学院"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="conditionQuery">查询</el-button>
        <el-button type="primary" @click="prevPage" v-show="pageIndex != 1"
          >上一页</el-button
        >
        <el-button type="primary" @click="nextPage">下一页</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="TeacherList" border style="width: 100%" >
      <el-table-column prop="id" label="工号" width="80"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="80"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="title" label="职称" width="100"> </el-table-column>
      <el-table-column prop="college" label="院系名称" width="150">
      </el-table-column>

      <el-table-column prop="telephone" label="手机号" width="140">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="140"> </el-table-column>
      <el-table-column prop="website" label="个人网站" width="140">
      </el-table-column>
      <el-table-column prop="field" label="科研方向" width="140">
      </el-table-column>
      <el-table-column prop="apply_num" label="申请人数" width="80">
      </el-table-column>
      <el-table-column prop="accept_num" label="已有学生" width="80">
      </el-table-column>
      <el-table-column prop="max_num" label="上限人数" width="80">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template>
          <el-popconfirm title="确定要申请吗？" @onConfirm="submitApply(id)">
            <el-button slot="reference">申请</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>
  </div>
</template>




<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      pageIndex: 1,
      formInline: {
        name: "",
        field: "",
        title: "",
        college: "",
      },
    };
  },
  computed: {
    ...mapGetters(["TeacherList"]),
  },
  mounted() {
    console.log("start");
    this.$store.dispatch("getTeacherList", {
      type: "search",
      keyword: { college: null },
      page: 1,
      size: 50,
    });
  },
  methods: {
    conditionQuery() {
      this.pageIndex = 1;
      this.$store.dispatch("getTeacherList", {
        type: "search",
        keyword: {
          name: this.formInline.name || null,
          college: this.formInline.college || null,
          title: this.formInline.title || null,
        },
        page: 1,
        size: 50,
      });
      console.log("query!");
    },
    prevPage() {
      this.pageIndex -= 1;
    },
    nextPage() {
      this.pageIndex += 1;
     
    },
    submitApply(id){
      //  this.$store.dispatch("submitTutorApply", {
      //   id: id,
      //   type:"select"
      // });
      console.log(id);
    }
  },
};
</script>

<style scoped>
.teacherdata {
  position: relative;
  top: 0;
  left: 250px;
  padding-top: 100px;
  min-height: 90%;
  width: 1500px;
}
</style>

