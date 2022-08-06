<template>
  <div>
    <main-view>
      <plesen></plesen>
    </main-view>
  </div>
</template>

<script>
import Plesen from "@/components/disinfection/plesen";
import MainView from "@/views/MainView";
export default {
  name: "PlesenView",
  components: { MainView, Plesen },
};
</script>

<style scoped></style>
