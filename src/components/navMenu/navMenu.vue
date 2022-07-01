<template>
  <div>
    <v-app-bar color="cyan" dark app>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size: 30px">Профдезсервис</v-toolbar-title>
      <v-spacer></v-spacer>
      <p>Номер телефона</p>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
          class="d-none d-sm-flex justify-center"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            @click="setTab(index, item.path)"
            v-for="(item, index) in visibleRoots"
            :key="index"
          >
            {{ item.meta.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item :key="index" v-for="(item, index) in visibleRoots">
            <v-list-item-title @click="setTab(index, item.path)">
              {{ item.meta.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "navMenu",
  data() {
    return {
      drawer: false,
    };
  },

  computed: {
    ...mapGetters({
      tab: "GETACTIVETAB",
      routes: "GETROUTES",
    }),

    visibleRoots: {
      get() {
        return this.routes.filter((item) => !item.hidden);
      },
    },

    tab: {
      set(value) {
        this.$store.dispatch("setActiveTab", value);
      },
    },
  },

  methods: {
    setTab(index, link) {
      this.$router.push("" + link);
    },
  },
};
</script>

<style scoped></style>
