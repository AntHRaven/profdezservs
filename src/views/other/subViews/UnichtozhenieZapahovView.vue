<template>
  <div>
    <main-view>
      <unichtozhenie-zapahov></unichtozhenie-zapahov>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieZapahov from "@/components/other/subComponents/unichtozhenieZapahov";
export default {
  name: "UnichtozhenieZapahovView",
  components: { UnichtozhenieZapahov, MainView },
};
</script>

<style scoped></style>
