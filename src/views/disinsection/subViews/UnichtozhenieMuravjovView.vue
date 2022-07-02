<template>
  <div>
    <main-view>
      <unichtozhenie-muravjov></unichtozhenie-muravjov>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieMuravjov from "@/components/disinsection/subComponents/unichtozhenieMuravjov";
export default {
  name: "UnichtozhenieMuravjovView",
  components: { UnichtozhenieMuravjov, MainView },
};
</script>

<style scoped></style>
