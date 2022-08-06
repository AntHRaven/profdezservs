<template>
  <div>
    <main-view>
      <unichtozhenie-muh></unichtozhenie-muh>
    </main-view>
  </div>
</template>

<script>
import UnichtozhenieMuh from "@/components/disinsection/subComponents/unichtozhenieMuh";
import MainView from "@/views/MainView";
export default {
  name: "UnichtozhenieMuhView",
  components: { MainView, UnichtozhenieMuh },
};
</script>

<style scoped></style>
