<template>
  <div id="app">
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.el-header {
  padding: 0 !important;
}

.el-main {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 0 !important;
}
</style>
<script>
import NavMenu from "@/components/navMenu/navMenu";
export default {
  components: { NavMenu },
};
</script>
