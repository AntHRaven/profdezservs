<template>
  <div>
    <main-view>
      <borba-s-parshoj></borba-s-parshoj>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import BorbaSParshoj from "@/components/unichtozhenieSadovyhVreditelej/subComponents/borbaSParshoj";
export default {
  name: "BorbaSParshojView",
  components: { BorbaSParshoj, MainView },
};
</script>

<style scoped></style>
