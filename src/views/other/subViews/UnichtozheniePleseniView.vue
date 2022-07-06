<template>
  <div>
    <main-view>
      <unichtozhenie-pleseni></unichtozhenie-pleseni>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozheniePleseni from "@/components/other/subComponents/unichtozheniePleseni";
export default {
  name: "UnichtozheniePleseniView",
  components: { UnichtozheniePleseni, MainView },
};
</script>

<style scoped></style>
