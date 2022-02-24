<template>
  <div class="teacherdata">

    <el-table ref="multipleTable" :data="TeacherList" border tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="工号" width="180"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="title" label="职称"> </el-table-column>
      <el-table-column prop="college_id" label="院系名称"> </el-table-column>
      <el-table-column prop="telephone" label="手机号"> </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column prop="email" label="个人网站"> </el-table-column>
      <el-table-column prop="tid" label="科研方向" width="180"> </el-table-column>
      <el-table-column prop="tid" label="已选择人数" width="180"> </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button>申请</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["TeacherList"]),
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
  box-shadow: 10px 10px 5px #888888;
  overflow: auto;
}
</style>

