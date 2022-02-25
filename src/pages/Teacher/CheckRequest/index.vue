<template>
  <div class="studentdata">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="college"
        label="院系">
      </el-table-column>
      <el-table-column
        prop="major"
        label="专业">
      </el-table-column>
      <el-table-column
        prop="telephone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="website"
        label="个人网站">
      </el-table-column>
      <el-table-column
        prop="info"
        label="个人介绍">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template>
        <el-popconfirm
          title="确定要接收吗？"
        >
          <el-button slot="reference">接收</el-button>
        </el-popconfirm>
      </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div> 
</template>

<script>
export default {};
</script>

<style scoped>
.studentdata {
  position: relative;
  top: 0;
  left: 250px;
  padding-top: 50px;
  min-height: 90%;
  width: 1500px;
  overflow: auto;
}
</style>

