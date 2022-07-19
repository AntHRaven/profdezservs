<template>
  <div>
    <h1>Сертификаты</h1>

    <v-row>
      <v-col
        v-for="item in certificates"
        :key="item"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          height="550"
          :src="item"
          :lazy-src="item"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "certificates",
  data() {
    return {
      certificates: [
        require("@/assets/certificates/2lg.jpg"),
        require("@/assets/certificates/3lg.jpg"),
        require("@/assets/certificates/4lg.jpg"),
        require("@/assets/certificates/6lg.jpg"),
        require("@/assets/certificates/7lg.jpg"),
        require("@/assets/certificates/9lg.jpg"),
        require("@/assets/certificates/10lg.jpg"),
        require("@/assets/certificates/aczetrin-super-svidetelstvo.jpg"),
      ],
    };
  },
};
</script>

<style scoped></style>
