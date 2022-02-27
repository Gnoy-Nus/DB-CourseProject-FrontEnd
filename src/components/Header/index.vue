<template>
  <header class="main-header">
    <img class="logo" src="./img/logo-white.png" alt="" />
    <h1 class="title">导师学生双向选择系统</h1>
  </header>
</template>

<script>
export default {
  name:"Header"
}
</script>

<style scoped>

.main-header {
  top: 0;
  left: 0;
  right: 0;
  background-color: #3c8dbc;
  position: relative;
  max-height: 100px;
  z-index: 3;
}

.logo {
  padding-top: 0;
  left: -600px;
  position: relative;
}

.title {
  top: 25px;
  left:750px;
  position: fixed;
}
</style>
