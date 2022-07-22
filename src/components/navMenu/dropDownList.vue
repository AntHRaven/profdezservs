<template>
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
        {{ title }}
        <v-icon right> mdi-menu-down </v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="item in items" :key="item" @click="setTab(item)">
        <v-list-item-title>
          {{ item.meta.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["title", "items"],
  name: "dropDownList",

  methods: {
    setTab(item) {
      this.$router.push(
        item.meta.parent
          ? "/" + item.meta.parent + "/" + item.path
          : "" + item.path
      );
    },
  },

  computed: {
    ...mapGetters({
      routes: "GETROUTES",
    }),
  },

  mounted() {
    console.log(this.items);
  },
};
</script>

<style scoped></style>
