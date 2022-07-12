<template>
  <div>
    <v-app-bar color="indigo darken-3" dark app>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <!--      <v-spacer class="d-none d-sm-flex"></v-spacer>-->
      <v-toolbar-title style="font-size: 32px"> ПРОФДЕЗСЕРВИС </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="d-none d-sm-flex" style="font-size: 32px">
        Городской центр санитарной дезенсекции
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
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                О компании
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="item in aboutUs"
                :key="item"
                @click="setTab(item.path)"
              >
                <v-list-item-title>
                  {{ item.meta.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-tab
            v-for="(item, index) in visibleRoots"
            :key="index"
            :to="item.path"
          >
            {{ item.meta.title }}
          </v-tab>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                Услуги
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="service in servicesMenu" :key="service">
                <v-menu offset-x open-on-hover>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      class="align-self-center mr-4"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ service.meta.title }}
                      <v-icon right> mdi-menu-down </v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item
                      @click="toSubService(subService)"
                      v-for="subService in service.children"
                      :key="subService"
                    >
                      <v-list-item-title>
                        {{ subService.meta.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
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

export default {
  name: "navMenu",
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
