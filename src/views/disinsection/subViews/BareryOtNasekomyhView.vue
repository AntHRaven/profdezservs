<template>
  <div>
    <main-view>
      <barery-ot-nasekomyh></barery-ot-nasekomyh>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import BareryOtNasekomyh from "@/components/disinsection/subComponents/bareryOtNasekomyh";
export default {
  name: "BareryOtNasekomyhView",
  components: { BareryOtNasekomyh, MainView },
};
</script>

<style scoped></style>
