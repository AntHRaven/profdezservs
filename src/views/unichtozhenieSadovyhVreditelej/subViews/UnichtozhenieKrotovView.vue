<template>
  <div>
    <main-view>
      <unichtozhenie-krotov></unichtozhenie-krotov>
    </main-view>
  </div>
</template>

<script>
import UnichtozhenieKrotov from "@/components/unichtozhenieSadovyhVreditelej/subComponents/unichtozhenieKrotov";
import MainView from "@/views/MainView";
export default {
  name: "UnichtozhenieKrotovView",
  components: { MainView, UnichtozhenieKrotov },
};
</script>

<style scoped></style>
