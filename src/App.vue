<template>
  <v-app>
    <nav-menu></nav-menu>
    <v-main class="d-flex justify-center">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from "@/components/navMenu/navMenu";
export default {
  name: "App",
  components: { NavMenu },

  mounted() {
  }
};
</script>

<style>
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
