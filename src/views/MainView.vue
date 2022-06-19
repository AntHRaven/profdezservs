<template>
  <div>
    <div>
      <side-bar class="d-flex d-sm-none"></side-bar>
      <div class="d-flex d-sm-none">
        <slot></slot>
      </div>

      <div class="d-none d-sm-flex">
        <div class="d-flex flex-row">
          <div class="flex-column">
            <slot></slot>
          </div>
          <div class="flex-column">
            <side-bar></side-bar>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SideBar from "@/components/navMenu/sideBar";
export default {
  name: "mainView",
  components: { SideBar },
};
</script>

<style scoped></style>
