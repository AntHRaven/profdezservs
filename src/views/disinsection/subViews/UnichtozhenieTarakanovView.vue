<template>
  <div>
    <main-view>
      <unichtozhenie-tarakanov></unichtozhenie-tarakanov>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieTarakanov from "@/components/disinsection/subComponents/unichtozhenieTarakanov";
export default {
  name: "UnichtozhenieTarakanovView",
  components: {UnichtozhenieTarakanov, MainView}
}
</script>

<style scoped>

</style>
