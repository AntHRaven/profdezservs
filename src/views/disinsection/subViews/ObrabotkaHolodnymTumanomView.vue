<template>
  <div>
    <main-view>
      <obrabotka-holodnym-tumanom></obrabotka-holodnym-tumanom>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import ObrabotkaHolodnymTumanom from "@/components/disinsection/subComponents/obrabotkaHolodnymTumanom";
export default {
  name: "ObrabotkaHolodnymTumanomView",
  components: { ObrabotkaHolodnymTumanom, MainView },
};
</script>

<style scoped></style>
