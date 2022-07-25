<template>
  <div>
    <main-view>
      <demercurization></demercurization>

    </main-view>
  </div>
</template>

<script>
import Demercurization from "@/components/disinfection/demercurization";
import MainView from "@/views/MainView";
export default {
  name: "DemercurizationView",
  components: {MainView, Demercurization },
};
</script>

<style scoped></style>
