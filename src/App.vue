<template>
  <v-app>
    <nav-menu></nav-menu>
    <v-main class="d-flex justify-center">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer style="color: white" color="grey darken-4" padless>
      <v-row
        style="max-width: 80vw; margin: 0 auto"
        justify="center"
        no-gutters
      >
        <div>
          <p>График работ:</p>
          <p>Пн.-Вс.: 9:00 – 20:00</p>
        </div>
        <v-spacer></v-spacer>
        <div style="height: 48px">
          <p style="top: 50%">ПрофДезСервис ©2022</p>
          <p></p>
        </div>
        <v-spacer></v-spacer>

        <div>
          <p>profdez.servis@yandex.ru</p>
          <p>8 (495)003-21-32</p>
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavMenu from "@/components/navMenu/navMenu";
export default {
  name: "App",
  components: { NavMenu },

  mounted() {
    console.log(
      document.getElementsByClassName(
        "v-icon notranslate mdi mdi-menu theme--dark"
      )[0].className
    );
    document.getElementsByClassName(
      "v-icon notranslate mdi mdi-menu theme--dark"
    )[0].className = "v-icon notranslate mdi mdi-menu theme--light";
  },
};
</script>

<style>
.mdi-menu {
  background-color: #212121;
  border-radius: 4px;
  padding: 5px 8px;
}

.v-toolbar__content {
  background-color: white !important;
  color: #212121;
}

.navigation {
  width: 20vw;
}

p {
  text-align: justify;
}

.notice {
  background: #f3f6f7;
  position: relative;
  margin: 40px 0;
  min-height: 114px;
  font-weight: 600;
  border-radius: 0 6px 6px 0;
  border-left: 2px solid #00c3cc;
  padding: 20px 30px 20px 50px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

body {
  color: #1f365f !important;
}

h3 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

ul {
  padding-left: 40px !important;
}
</style>
