<template>
  <div>
    <main-view>
      <unichtozhenie-krys></unichtozhenie-krys>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieKrys from "@/components/deratization/subComponents/unichtozhenieKrys";
export default {
  name: "UnichtozhenieKrysView",
  components: { UnichtozhenieKrys, MainView },
};
</script>

<style scoped></style>
