<template>
  <div class="teacherdata" v-show="if_show">
    <el-page-header content="学生列表" @back="goBack" />
      <el-table :data="CLASSMEMEBERLIST" border style="width: 100%">
        <el-table-column prop="id" label="学号" width="95" align="center">
        
        </el-table-column>

        <el-table-column prop="name" label="姓名" width="100" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="65" align="center">
        </el-table-column>
       

        <el-table-column prop="birth" label="生日" width="100" align="center">
        </el-table-column>
        <el-table-column prop="college" label="学院"  align="center">
        </el-table-column>
 <el-table-column prop="major" label="专业" width="165" align="center">
        </el-table-column>
      
        

      </el-table>
  </div>
</template>



<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      if_show:true
    };
  },
  computed: {
    ...mapGetters(["CLASSMEMEBERLIST"]),
  },
  mounted() {

    this.$store.dispatch("reqClassMember", {
          id:this.$store.state.teacher.query_id
        });

  },
  methods: {
    goBack(){
       let toPath = "/teacher/CheckClass";
        this.$router.push(toPath);
    }
  },
};
</script>

<style scoped>
.teacherdata {
  position:relative;
  top: 0;
  min-height: 90%;
  left: 2.5%;
  right: 2.5%;
  padding-top: 50px;
  width: 95%;
  overflow: auto;
}
</style>

