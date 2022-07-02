<template>
  <div>
    <main-view>
      <unichtozhenie-komarov></unichtozhenie-komarov>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieKomarov from "@/components/disinsection/subComponents/unichtozhenieKomarov";
export default {
  name: "UnichtozhenieKomarovView",
  components: { UnichtozhenieKomarov, MainView },
};
</script>

<style scoped></style>
