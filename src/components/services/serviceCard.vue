<template>
  <div>
    <v-card max-width="365px" outlined class="mr-2 mb-2">
      <v-img
        :src="service.meta.image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>{{ service.meta.title }}</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn text @click="service.meta.show = !service.meta.show">
          Список услуг
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="service.meta.show = !service.meta.show">
          <v-icon>{{
            service.meta.show ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="service.meta.show">
          <v-divider></v-divider>

          <v-card-text>
            <div :key="subService.path" v-for="subService in service.children">
              <v-btn @click="toSubService(subService)" text>
                {{ subService.meta.title }}
              </v-btn>
              <br />
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "serviceCard",
  props: ["service"],
  methods: {
    toSubService(service) {
      this.$router.push("/" + service.meta.parent + "/" + service.path);
    },
  },
};
</script>

<style scoped></style>
