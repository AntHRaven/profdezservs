<template>
  <div>
    <main-view>
      <unichtozhenie-myshej></unichtozhenie-myshej>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieMyshej from "@/components/deratization/subComponents/unichtozhenieMyshej";
export default {
  name: "UnichtozhenieMyshejView",
  components: { UnichtozhenieMyshej, MainView },
};
</script>

<style scoped></style>
