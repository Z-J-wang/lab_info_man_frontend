<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ivu-btn,
.ivu-input,
.ivu-select-selection {
  box-shadow: none !important;
}

.logo-title .ivu-carousel-dots-inside {
  bottom: 95px !important;
}

.ivu-form .ivu-form-item-label {
  font-weight: 700 !important;
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>
