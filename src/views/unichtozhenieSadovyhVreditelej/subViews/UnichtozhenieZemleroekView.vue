<template>
  <div>
    <main-view>
      <unichtozhenie-zemleroek></unichtozhenie-zemleroek>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieZemleroek from "@/components/unichtozhenieSadovyhVreditelej/subComponents/unichtozhenieZemleroek";
export default {
  name: "UnichtozhenieZemleroekView",
  components: { UnichtozhenieZemleroek, MainView },
};
</script>

<style scoped></style>
