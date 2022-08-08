<template>
  <div>
    Клопы+ Тараканы+ Блохи+ Муравьи+ Мокрицы+ Моль- Мухи- Клещи+ Осы+- Барьерная
    защита+
    <v-app-bar color="grey darken-4" dark app>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <!--      <v-spacer class="d-none d-sm-flex"></v-spacer>-->
      <v-toolbar-title style="font-size: 32px">
        <v-row>
          <v-col>
            <router-link style="text-decoration: none" to="/">
              <v-img max-width="45" :src="require('@/assets/logo.png')"></v-img>
            </router-link>
          </v-col>
          <v-col>
            <router-link
              class="d-none d-sm-flex"
              style="
                text-decoration: none;
                color: #212121;
                text-shadow: 2px 2px #a8a8a8;
              "
              to="/"
            >
              ПРОФДЕЗСЕРВИС
            </router-link>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="d-none d-sm-flex d-md-none d-lg-flex"
        style="font-size: 24px"
      >
        Дезинсекция, дезинфекция, дератизация Москва и Московская обл
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <p class="d-none d-sm-flex">profdez.servis@yandex.ru</p>
      <v-spacer></v-spacer>
      <p>8 (495)003-21-32</p>
      <template v-slot:extension>
        <h4
          style="color: white; text-shadow: 2px 2px #4c4c4c"
          class="d-flex d-sm-none"
        >
          ПРОФДЕЗСЕРВИС
        </h4>
        <v-tabs
          v-model="tab"
          fixed-tabs
          slider-color="white"
          class="d-none d-sm-flex justify-center"
        >
          <drop-down-list title="О компании" :items="aboutUs"></drop-down-list>
          <drop-down-list
            title="Дезенсекция"
            :items="disinsection"
          ></drop-down-list>
          <drop-down-list
            title="Дератизация"
            :items="deratization"
          ></drop-down-list>
          <drop-down-list
            title="Дезинфекция"
            :items="disinfection"
          ></drop-down-list>
          <drop-down-list
            title="Фумигация"
            :items="fumigation"
          ></drop-down-list>

          <v-tab
            v-for="(item, index) in visibleRoots"
            :key="index"
            :to="item.path"
          >
            {{ item.meta.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" width="85vw" absolute temporary>
      <v-list>
        <v-list-item :key="index" v-for="(item, index) in visibleRoots">
          <v-list-item-title @click="setTab(item.path)">{{
            item.meta.title
          }}</v-list-item-title>
        </v-list-item>

        <drop-down-list-mobile
          title="О компании"
          :items="aboutUs"
        ></drop-down-list-mobile>
        <drop-down-list-mobile
          title="Дезенсекция"
          :items="disinsection"
        ></drop-down-list-mobile>
        <drop-down-list-mobile
          title="Дератизация"
          :items="deratization"
        ></drop-down-list-mobile>
        <drop-down-list-mobile
          title="Дезинфекция"
          :items="disinfection"
        ></drop-down-list-mobile>
        <drop-down-list-mobile
          title="Фумигация"
          :items="fumigation"
        ></drop-down-list-mobile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DropDownList from "@/components/navMenu/dropDownList";
import DropDownListMobile from "@/components/navMenu/dropDownListMobile";

export default {
  name: "navMenu",
  components: { DropDownListMobile, DropDownList },
  data() {
    return {
      tab: "about-us",
      drawer: false,
    };
  },

  computed: {
    ...mapGetters({
      routes: "GETROUTES",
    }),

    visibleRoots: {
      get() {
        return this.routes.filter(
          (item) => !item.hidden && item.name !== "services"
        );
      },
    },

    servicesMenu: {
      get() {
        return this.routes.filter((item) => item.meta.service);
      },
    },

    aboutUs: {
      get() {
        return this.routes.filter((item) => item.meta.aboutUs);
      },
    },

    disinsection: {
      get() {
        return this.routes.filter((item) => item.name === "disinsection")[0]
          .children;
      },
    },

    deratization: {
      get() {
        return this.routes.filter((item) => item.name === "deratization")[0]
          .children;
      },
    },

    disinfection: {
      get() {
        return this.routes.filter((item) => item.name === "disinfection")[0]
          .children;
      },
    },

    fumigation: {
      get() {
        return this.routes.filter((item) => item.name === "fumigation")[0]
          .children;
      },
    },

    otherServices: {
      get() {
        return this.routes.filter(
          (item) => item.name === "unichtozhenie-zapahov"
        );
      },
    },

    // tab: {
    //   set(value) {
    //     this.$store.dispatch("setActiveTab", value);
    //   },
    // },
  },

  methods: {
    setTab(link) {
      this.$router.push("" + link);
    },

    toSubService(service) {
      this.$router.push("/" + service.meta.parent + "/" + service.path);
    },
  },

  mounted() {
    console.log("ROUTE", this.servicesMenu);
  },
};
</script>

<style scoped></style>
