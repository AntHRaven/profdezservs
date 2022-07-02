<template>
  <div>
    <h2>Список предоставляемых услуг</h2>
    <br />
    <div class="d-flex flex-wrap">
      <div
        style="margin: 0 auto"
        v-for="service in services"
        :key="service.path"
      >
        <service-card
          class="d-sm-none d-md-flex"
          :service="service"
        ></service-card>
        <service-card
          class="d-none d-sm-flex d-md-none"
          :service="service"
        ></service-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ServiceCard from "@/components/services/serviceCard";

export default {
  name: "listServices",
  components: { ServiceCard },
  data() {
    return {
      image: require("@/assets/firstImage.jpg"),
    };
  },

  computed: {
    ...mapGetters({
      routes: "GETROUTES",
    }),

    services: {
      get() {
        return this.routes.filter((item) => item.meta.service);
      },
    },
  },
};
</script>

<style scoped></style>
