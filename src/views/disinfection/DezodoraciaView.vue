<template>
  <div>
    <main-view>
      <dezodoracia></dezodoracia>

    </main-view>
  </div>
</template>

<script>
import Dezodoracia from "@/components/disinfection/dezodoracia";
import MainView from "@/views/MainView";
export default {
  name: "DezodoraciaView",
  components: {MainView, Dezodoracia}
}
</script>

<style scoped>

</style>
