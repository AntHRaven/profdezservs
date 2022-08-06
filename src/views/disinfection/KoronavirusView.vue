<template>
  <div>
    <main-view>
      <koronavirus></koronavirus>
    </main-view>
  </div>
</template>

<script>
import Koronavirus from "@/components/disinfection/koronavirus";
import MainView from "@/views/MainView";
export default {
  name: "KoronavirusView",
  components: { MainView, Koronavirus },
};
</script>

<style scoped></style>
