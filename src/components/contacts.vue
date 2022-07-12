<template>
  <div>
    <h1>Контакты</h1>
    <v-icon large color="green darken-2"> mdi-map-marker </v-icon>
    Москва
    <br />
    <v-icon large color="green darken-2"> mdi-phone </v-icon>
    8 (499) 380-73-29
    <div style="padding: 20px"></div>
  </div>
</template>

<script>
export default {
  name: "contacts",
  data() {
    return {
      zoom: 13,
      center: [30.332602, 59.93733],
      rotation: 0,
      geolocPosition: undefined,
    };
  },

  computed: {
    myPosition: {
      get() {
        return this.geolocPosition;
      },
    },
  },
};
</script>

<style scoped></style>
