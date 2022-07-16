<template>
  <div>
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
              style="text-decoration: none; color: #212121"
              to="/"
            >
              ПРОФДЕЗСЕРВИС
            </router-link>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="d-none d-sm-flex" style="font-size: 24px">
        Дезинсекция, дезинфекция, дератизация Москва и Московская обл
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <p>8 (495)003-21-32</p>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          fixed-tabs
          slider-color="white"
          class="d-none d-sm-flex justify-center"
        >
          <drop-down-list title="О компании" :items="aboutUs"></drop-down-list>
          <drop-down-list title="Дезенсекция" :items="disinsection"></drop-down-list>
          <drop-down-list title="Дератизация" :items="deratization"></drop-down-list>
          <drop-down-list title="Дезенфекция" :items="otherServices"></drop-down-list>
          <drop-down-list title="Фумигация" :items="aboutUs"></drop-down-list>

          <v-tab
            v-for="(item, index) in visibleRoots"
            :key="index"
            :to="item.path"
          >
            {{ item.meta.title }}
          </v-tab>
        </v-tabs>
        <!--        <v-tabs-->
        <!--          v-model="tab"-->
        <!--          align-with-title-->
        <!--          class="d-none d-sm-flex justify-center"-->
        <!--        >-->
        <!--          <v-tabs-slider></v-tabs-slider>-->

        <!--          <v-tab-->
        <!--            @click="setTab(index, item.path)"-->
        <!--            v-for="(item, index) in visibleRoots"-->
        <!--            :key="index"-->
        <!--          >-->
        <!--            {{ item.meta.title }}-->
        <!--          </v-tab>-->
        <!--        </v-tabs>-->
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

        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>Услуги</v-list-item-title>
          </template>

          <v-list-group
            v-for="service in servicesMenu"
            :key="service"
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ service.meta.title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subService in service.children"
              @click="toSubService(subService)"
              :key="subService"
              link
            >
              <v-list-item-title
                v-text="subService.meta.title"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    asd
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DropDownList from "@/components/navMenu/dropDownList";

export default {
  name: "navMenu",
  components: {DropDownList},
  data() {
    return {
      tab: "about-us",
      drawer: false,
    };
  },

  computed: {
    ...mapGetters({
      // tab: "GETACTIVETAB",
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
        return this.routes.filter((item) => item.name === "disinsection");
      },
    },

    deratization: {
      get() {
        return this.routes.filter((item) => item.name === "deratization");
      },
    },

    otherServices: {
      get() {
        return this.routes.filter((item) => item.name === "unichtozhenie-zapahov");
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
    console.log("ROUTE", this.$route);
    console.log(
      this.visibleRoots.findIndex((item) => {
        console.log("ITEM", item.path);
        console.log("ROUTE", this.$route.path);
        return item.path === this.$route.path;
      })
    );
  },
};
</script>

<style scoped></style>
