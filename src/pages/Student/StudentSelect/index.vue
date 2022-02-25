<template>
  <div class="teacherdata">


    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="TeacherList" border style="width: 100%">
      <el-table-column prop="id" label="工号" width="180"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="title" label="职称"> </el-table-column>
      <el-table-column prop="college" label="院系名称"> </el-table-column>
      <el-table-column prop="telephone" label="手机号"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="website" label="个人网站" width="180"> </el-table-column>
      <el-table-column prop="field" label="科研方向" width="180"> </el-table-column>
      <el-table-column prop="num" label="已选择人数" width="180"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
      <template>
        <el-button type="text" size="small">申请</el-button>
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
      formInline: {
        user: '',
        region: ''
        }
    };
  },
  computed: {
    ...mapGetters(["TeacherList"]),
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
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

