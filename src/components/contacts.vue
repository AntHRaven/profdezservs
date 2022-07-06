<template>
  <div>
    <h1>Контакты</h1>
    <v-icon large color="green darken-2"> mdi-map-marker </v-icon>
    Москва
    <br>
    <v-icon large color="green darken-2"> mdi-phone </v-icon>
    8 (499) 380-73-29
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 400px"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template #default="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon
                src="_media/marker.png"
                :scale="0.4"
                :anchor="[0.5, 1]"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-feature>
        <vl-geom-point :coordinates="[30.332602, 59.93733]"></vl-geom-point>
      </vl-feature>
    </vl-map>

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
