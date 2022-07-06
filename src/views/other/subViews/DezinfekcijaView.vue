<template>
  <div>
    <main-view>
      <dezinfekcija></dezinfekcija>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import Dezinfekcija from "@/components/other/subComponents/dezinfekcija";
export default {
  name: "DezinfekcijaView",
  components: {Dezinfekcija, MainView}
}
</script>

<style scoped>

</style>
