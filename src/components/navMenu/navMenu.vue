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
            @click="setTab(index, item.link)"
            v-for="(item, index) in items"
            :key="index"
          >
            {{ item.label }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item :key="index" v-for="(item, index) in items">
            <v-list-item-title @click="setTab(index, item.link)">
              {{ item.label }}
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
      items: [
        { label: "Дезинсекция", link: "disinsection" },
        { label: "Дератизация", link: "deratization" },
        { label: "Дезинфекция", link: "disinfection" },
        { label: "Фумигация", link: "fumigation" },
        { label: "Демеркуризация", link: "demercurization" },
        { label: "Цены", link: "price" },
        { label: "О нас", link: "about-us" },
        { label: "Контакты", link: "/contacts" },
      ],
    };
  },

  computed: {
    ...mapGetters({
      tab: "GETACTIVETAB",
    }),
  },

  methods: {
    setTab(index, link) {
      console.log("test");
      this.tab = index;
      this.$router.push("/" + link);
    },
  },
};
</script>

<style scoped></style>
