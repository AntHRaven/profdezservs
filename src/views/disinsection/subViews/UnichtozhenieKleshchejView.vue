<template>
  <div>
    <main-view>
      <unichtozhenie-kleshchej></unichtozhenie-kleshchej>
    </main-view>
  </div>
</template>

<script>
import MainView from "@/views/MainView";
import UnichtozhenieKleshchej from "@/components/disinsection/subComponents/unichtozhenieKleshchej";
export default {
  name: "UnichtozhenieKleshchejView",
  components: { UnichtozhenieKleshchej, MainView },
};
</script>

<style scoped></style>
