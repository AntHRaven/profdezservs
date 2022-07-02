<template>
  <div>
    <main-view>
      <unichtozhenie-mokric></unichtozhenie-mokric>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieMokric from "@/components/disinsection/subComponents/unichtozhenieMokric";
export default {
  name: "UnichtozhenieMokricView",
  components: { UnichtozhenieMokric, MainView },
};
</script>

<style scoped></style>
