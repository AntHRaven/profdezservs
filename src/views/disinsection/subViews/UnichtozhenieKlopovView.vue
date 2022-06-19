<template>
  <div>
    <main-view>
      <unichtozhenie-klopov></unichtozhenie-klopov>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieKlopov from "@/components/disinsection/subComponents/unichtozhenieKlopov";
export default {
  name: "UnichtozhenieKlopovView",
  components: {UnichtozhenieKlopov, MainView}
}
</script>

<style scoped>

</style>
