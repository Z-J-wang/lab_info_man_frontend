<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="layout-ceiling-main">
        <router-link :to="{ name: 'login' }">登录</router-link> |
        <a href="http://103.39.212.167:8000/user/login">管理员登录</a>
      </div>
    </div>
    <div class="layout-header">
      <div class="layout-logo flex items-center justify-center">logo</div>
    </div>
    <div>
      <router-view />
    </div>
    <div class="layout-copy">
      2023 &copy; Laboratory Information Management
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
};
</script>

<style lang="less" scoped>
.layout {
  position: relative;
  overflow: hidden;
  border: 1px solid #d7dde4;
  border-radius: 4px;
  background: #f5f7f9;
}

.layout-logo {
  position: relative;
  top: 5px;
  left: 20px;
  float: left;
  border-radius: 3px;
  width: 200px;
  height: 50px;
  background: #5b6270;
}

.layout-header {
  height: 60px;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-copy {
  padding: 10px 0 20px;
  text-align: center;
  color: #9ea7b4;
}

.layout-ceiling {
  overflow: hidden;
  padding: 10px 0;
  background: #464c5b;
}

.layout-ceiling-main {
  float: right;
  margin-right: 15px;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}
</style>
