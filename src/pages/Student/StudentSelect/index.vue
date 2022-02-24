<template>
  <div class="teacherdata">
    <el-table :data="TeacherList" style="width: 100%">
      <el-table-column prop="id" label="工号" width="180"> </el-table-column>
      <el-table-column prop="tid" label="教师号" width="180"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="title" label="职称"> </el-table-column>
      <el-table-column prop="college_id" label="院系号"> </el-table-column>
      <el-table-column prop="telephone" label="手机号"> </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
    </el-table>
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
  position: absolute;
  top: 0;
  left: 250px;
  padding-top: 50px;
  min-height: 90%;
  width: 1500px;
}
</style>

