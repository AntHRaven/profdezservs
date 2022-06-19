<template>
  <div>
    <main-view>
      <unichtozhenie-bloh></unichtozhenie-bloh>
    </main-view>
  </div>
</template>

<script>
import UnichtozhenieBloh from "@/components/disinsection/subComponents/unichtozhenieBloh";
import MainView from "@/views/MainView";
export default {
  name: "UnichtozhenieBlohView",
  components: {MainView, UnichtozhenieBloh}

}
</script>

<style scoped>

</style>
