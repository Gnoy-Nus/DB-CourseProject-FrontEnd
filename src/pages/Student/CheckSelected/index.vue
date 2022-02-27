<template>
  <div class="teacherdata">
    <el-table :data="SelectedTeacherList" border style="width: 100%">
      <el-table-column prop="id" label="工号" width="65" align="center"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="65" align="center"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="70" align="center"> </el-table-column>
      <el-table-column prop="title" label="职称" width="65" align="center"> </el-table-column>
      <el-table-column prop="college" label="院系名称" align="center"> </el-table-column>
      <el-table-column prop="telephone" label="手机号" width="110" align="center"> </el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"> </el-table-column>
      <el-table-column prop="website" label="个人网站" align="center">
        <template slot-scope="scope1">
          <el-link :href="scope1.row.website" target="_blank">{{ scope1.row.website }}</el-link>
        </template></el-table-column
      >
      <el-table-column prop="field" label="科研方向" width="300" align="center"> </el-table-column>
      <el-table-column prop="status" label="状态" width="65" align="center"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150" align="center">
        <template slot-scope="scope" >
          <el-popconfirm 
            title="确定要撤销申请吗？"
            @confirm="cancelApply(scope.row.id)"
          >
            <el-button :disabled="scope.row.status!='申请中'" slot="reference" type="danger">撤销申请</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      pageIndex: 1,
    };
  },
  computed: {
    ...mapGetters(["SelectedTeacherList"]),
  },
  mounted() {
    console.log("start");
    this.$store.dispatch("getApplyTeacherList");
  },
  methods: {
    async cancelApply(id) {
      try {
        await this.$store.dispatch("cancelTutorApply", {
          id: id,
          type: "select",
        });
        alert("successs");
        this.$store.dispatch("getApplyTeacherList");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
.teacherdata {
  position: relative;
  top: 0;
  left: 250px;
  padding-top: 50px;
  min-height: 90%;
  width: 1500px;
  overflow: auto;
}
</style>

