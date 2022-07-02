<template>
  <div>
    <main-view>
      <unichtozhenie-os-shershnej></unichtozhenie-os-shershnej>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieOsShershnej from "@/components/disinsection/subComponents/unichtozhenieOsShershnej";
export default {
  name: "UnichtozhenieOsShershnejView",
  components: { UnichtozhenieOsShershnej, MainView },
};
</script>

<style scoped></style>
