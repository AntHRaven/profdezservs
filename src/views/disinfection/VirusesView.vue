<template>
  <div>
    <main-view>
      <viruses></viruses>
    </main-view>
  </div>
</template>

<script>
import Viruses from "@/components/disinfection/viruses";
import MainView from "@/views/MainView";
export default {
  name: "VirusesView",
  components: { MainView, Viruses },
};
</script>

<style scoped></style>
