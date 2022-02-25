<template>
  <div class="wrapper">
    <Header></Header>
    <aside class="main-sidebar">
      <section class="sidebar">
        <ul class="sidebar-menu" data-widget="tree">
          <div
            id="divstuinfo"
            class="ui-accordion-header ui-helper-reset ui-state-default"
            style="padding: 1px 0px 0px 2px"
          >
            <span style="font-weight: bold"> 教师信息</span>
            <div style="line-height: 23px">工号：{{ TeaInfo.id }}</div>
            <div style="line-height: 23px">姓名：{{ TeaInfo.name }}</div>
            <div style="line-height: 23px">学院：{{ TeaInfo.college }}</div>
            <div style="color: Red; font-weight: bold; line-height: 23px">
              完成操作后请点击&nbsp;<a href="#/login" style="color: Red" @click="logOut"
                >[安全退出]</a
              >
            </div>
          </div>

          <li name="menuapptype" id="menuapptype0" class="treeview">
            <ul class="treeview-menu">
              <li name="menuapp" id="CourseSelectionStudentFuzzyQuery" class="">
                <router-link to="/teacher/ManageStudent">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">管理学生</span>
                </router-link>
              </li>

              <li name="menuapp" id="CourseReturnStudentCourseReturn" class="">
                <router-link to="/teacher/CheckStudentRequests">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">查看申请中的学生</span>
                </router-link>
              </li>

              <li name="menuapp" id="TeacherModifyPersonalInformation" class="">
                <router-link to="/teacher/TeacherModify">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">查看/修改个人信息</span>
                </router-link>
              </li>

              <li name="menuapp" id="TeacherAccountManagement" class="">
                <router-link to="/teacher/TeacherAccount">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">账号管理</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>

    <!-- content路由出口 -->
    <div class="wrapper">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
       
    };
  },
  beforeMount() {
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getTeaInfo");
    },
    logOut() {
      this.$store.dispatch("userLogout");
    },
  },

  computed: {
    ...mapGetters(["TeaInfo"]),
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  /* 100%窗口高度 */
  height: 100vh;
  /* 渐变背景 */
  /*background: linear-gradient(200deg, #f3e8e7, #ebffe3);*/
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  /*字体：白色 */
  color: white;
}

.main-sidebar {
  background-color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 50px;
  min-height: 100%;
  width: 230px;
  z-index: 2;
  -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
}
.content-wrapper {
  color: black;
  background-color: rgb(240, 241, 255);
  overflow:auto;
  height: 95%;
  z-index: 1;
}

.sidebar {
  display: block;
  padding-bottom: 10px;
}
.sidebar-menu,
.sidebar-menu > li.header {
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

