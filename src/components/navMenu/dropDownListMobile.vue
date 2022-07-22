<template>
  <v-list-group>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item @click="setTab(item)" v-for="(item, i) in items" :key="i" link>
      <v-list-item-title v-text="item.meta.title"></v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: "dropDownListMobile",
  props: ["items", "title"],

  methods: {
    setTab(item) {
      this.$router.push(
        item.meta.parent
          ? "/" + item.meta.parent + "/" + item.path
          : "" + item.path
      );
    },

    toSubService(service) {
      this.$router.push("/" + service.meta.parent + "/" + service.path);
    },
  },
};
</script>

<style scoped></style>
