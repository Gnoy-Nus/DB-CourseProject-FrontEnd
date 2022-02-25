<template>
  <div class="teacherdata">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="工号"
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
        prop="title"
        label="职称">
      </el-table-column>
            <el-table-column
        prop="college"
        label="院系名称">
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
        prop="field"
        label="科研方向">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template>
        <el-popconfirm
          title="确定要撤销申请吗？"
        >
          <el-button slot="reference">撤销申请</el-button>
        </el-popconfirm>
      </template>
      </el-table-column>
    </el-table>
  </div> 
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            id: '1001',
            tid:'10001',
            gender:'男',
            name: '王小虎',
            title:'教授',
            college_id:'01',
            telephone:'12345678912',
            addr: '上海市普陀区金沙江路 1518 弄',
            email:'111@qq.com'
          }, {
            id: '1002',
            tid:'10002',
            gender:'女',
            name: '王大虎',
            title:'讲师',
            college_id:'02',
            telephone:'12345678998',
            addr: '上海市普陀区金沙江路 1517 弄',
            email:'dahuwang@shu.edu.cn'
          }]
        }
      }
    }
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

