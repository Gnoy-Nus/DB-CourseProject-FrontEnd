<template>
  <div class="header">
    <img class="logo" src="./img/logo-white.png" alt="" />
    <h1 class="title">导师学生双向选择系统</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 80px;
  background-color: #3c8dbc;
}

.title {
  position: fixed;
  color: white;
  top: 18px;
  left: 43%;
}

.logo {
  position: fixed;
  left: 3%;
  width: 180px;
  height: 78px;
}
</style>
