<template>
  <div>
    <main-view>
      <unichtozhenie-moli></unichtozhenie-moli>
    </main-view>
  </div>
</template>

<script>
import UnichtozhenieMoli from "@/components/disinsection/subComponents/unichtozhenieMoli";
import MainView from "@/views/MainView";
export default {
  name: "UnichtozhenieMoliView",
  components: { MainView, UnichtozhenieMoli },
};
</script>

<style scoped></style>
