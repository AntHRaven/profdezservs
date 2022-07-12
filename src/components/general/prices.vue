<template>
  <div>
    <h2>{{ title }}</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Помещение</th>
            <th class="text-left">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in service" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "prices",
  props: {
    service: {
      type: Array,
    },
    title: {
      type: String,
      default: "Цены на обработку",
    },
  },
};
</script>

<style scoped></style>
