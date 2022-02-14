<template>
  <header class="main-header">
      <h1>test main header</h1>
      <!-- Logo 
      <a href="#" @click="" class="logo">
        <span class="logo-mini"> </span>
        <span
          class="logo-lg"
          style="font-size: 14px"
          datahtmllocale="integrativecsssuniversity"
          >上海大学本硕博一体化选课系统</span
        >
      </a> -->

      <!-- Navbar -->
      <!-- 
      <nav class="navbar navbar-static-top">      
        <div class="navbar-custom-menu">
          <input
            id="h_language"
            name="h_language"
            type="hidden"
            value="zh_CN"
          />
          <ul class="nav navbar-nav">
            <a href="/Login/Logout"
              ><i class="fa fa-power-off"></i
              ><span class="nav-function-text"
                >&emsp;<span datahtmllocale="logout">安全退出</span></span
              ></a
            >
          </ul>
        </div>
      </nav> -->
    </header>
</template>

<script>
export default {
  name:"Header"
}
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
  overflow-y: auto;
  /*字体：白色 */
  color: white;
}

.main-header {
  top: 0;
  left: 0;
  right: 0;
  background-color: #08acee;
  position: relative;
  max-height: 100px;
  z-index: 3;
}
</style>
