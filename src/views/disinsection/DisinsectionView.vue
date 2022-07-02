<template>
  <div>
    <main-view>
      <disinsection></disinsection>
    </main-view>
  </div>
</template>

<script>
import Disinsection from "@/components/disinsection/disinsection";
import MainView from "@/views/MainView";
export default {
  name: "DisinsectionView",
  components: { MainView, Disinsection },

  mounted() {
    console.log(name);
  },
};
</script>

<style scoped></style>
