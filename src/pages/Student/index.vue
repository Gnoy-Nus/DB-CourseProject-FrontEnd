<template>
  <div class="wrapper">
    <Header></Header>
    <aside class="main-sidebar">
      <h1>test sidebar</h1>
      <section class="sidebar">
        <ul class="sidebar-menu" data-widget="tree">
          <div
            id="divstuinfo"
            class="ui-accordion-header ui-helper-reset ui-state-default"
            style="padding: 1px 0px 0px 2px"
          >
            <span style="font-weight: bold"> 学生信息</span>
            <div style="line-height: 23px">学号：{{ StuInfo.id }}</div>
            <div style="line-height: 23px">姓名：{{ StuInfo.name }}</div>
            <div style="line-height: 23px">学院：{{ StuInfo.college }}</div>
            <div style="line-height: 23px">专业：{{ StuInfo.major }}</div>
            <div style="color: Red; font-weight: bold; line-height: 23px">
              完成操作后请点击&nbsp;<a
                href="#/login"
                style="color: Red"
                @click="logOut"
                >[安全退出]</a
              >
            </div>
          </div>

          <li name="menuapptype" id="menuapptype0" class="treeview">
            <ul class="treeview-menu">
              <li name="menuapp" id="CourseSelectionStudentFuzzyQuery" class="">
                <router-link to="/student/StudentSelect">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">选择导师</span>
                </router-link>
              </li>

              <li name="menuapp" id="CourseReturnStudentCourseReturn" class="">
                <router-link to="/student/StudentCheck">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">查看已申请的导师</span>
                </router-link>
              </li>

              <li name="menuapp" id="StudentModifyPersonalInformation" class="">
                <router-link to="/student/StudentModify">
                  <i class="fa fa-circle-o"></i
                  ><span style="color: Red">查看/修改个人信息</span>
                </router-link>
              </li>

              <li name="menuapp" id="StudentAccountManagement" class="">
                <router-link to="/student/StudentAccount">
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
      this.$store.dispatch("getStuInfo");
      this.$store.dispatch("getTeacherList",{keyword:{college:this.StuInfo.college}});
    },
    logOut() {
      this.$store.dispatch("userLogout");
    },
  },

  computed: {
    ...mapGetters(["StuInfo"]),
    ...mapGetters(["TeacherList"]),
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
  background-color: rgb(245, 240, 255);
  height: 95%;
  overflow:auto;
  z-index: 1;
  overflow: auto;
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

