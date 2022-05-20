<template>
  <div>
    <el-menu
      :router="true"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item style="padding-left: 60px" index="/">Главная</el-menu-item>
      <el-menu-item index="/">Дезинсекция</el-menu-item>
      <el-menu-item index="/">Дератизация</el-menu-item>
      <el-menu-item index="/">Дезинфекция</el-menu-item>
      <el-menu-item index="/">Фумигация</el-menu-item>
      <el-menu-item index="/">Демекуризация</el-menu-item>
      <el-menu-item index="/">Цены</el-menu-item>
      <el-menu-item index="/">Контакты</el-menu-item>
      <el-menu-item index="/">Галерея</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      activeIndex: "/",
    };
  },
};
</script>

<style scoped></style>
