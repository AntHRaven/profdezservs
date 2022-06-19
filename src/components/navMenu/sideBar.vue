<template>
  <div>
    <!--Мобилка-->
    <v-list class="d-flex d-sm-none" width="100%">
      <v-list-group v-model="selectedItem" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="$route.meta.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(item, i) in getChildForCurrentPage.children"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title
              @click="setSubTab(item)"
              v-text="item.meta.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <!--ПК-->
    <v-list shaped class="d-none d-sm-flex">
      <v-subheader>{{ $route.meta.title }}</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in getChildForCurrentPage.children"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title
              @click="setSubTab(item)"
              v-text="item.meta.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sideBar",
  data() {
    return {
      selectedItem: null,
    };
  },

  computed: {
    ...mapGetters({
      routes: "GETROUTES",
    }),

    getChildForCurrentPage: {
      get() {
        return this.routes.find(
          (item) => item.name === this.$route.meta.parent
        );
      },
    },
  },

  methods: {
    setSubTab(item) {
      this.$router.push("/" + item.meta.parent + "/" + item.path);
    },
  },

  mounted() {
    console.log(this.getChildForCurrentPage);
    console.log(this.$route.meta);
  },
};
</script>

<style scoped></style>
