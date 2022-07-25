<template>
  <div>
    <main-view>
      <fumigation></fumigation>
    </main-view>
  </div>
</template>

<script>
import Fumigation from "@/components/fumigation/fumigation";
import MainView from "@/views/MainView";
export default {
  name: "FumigationView",
  components: {MainView, Fumigation}
}
</script>

<style scoped>

</style>
