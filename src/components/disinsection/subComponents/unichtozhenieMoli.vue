<template>
  <div>
    <h1>Уничтожение моли в доме или квартире</h1>

    <p>
      Появление в квартире или в доме насекомых-вредителей – неприятное событие.
      Моль способна нанести существенный ущерб гардеробу, коврам и мебели, но не
      всегда удается заранее предпринять действенные профилактические меры. Тем
      не менее, существует способ, который поможет уничтожить моль дома и
      избавиться от этого насекомого раз и навсегда. Уничтожение моли происходит
      безопасными препаратами, вещи и предметы интерьера останутся в целости и
      сохранности. Препарат без запаха и цвета.
    </p>

    <prices :service="prices"></prices>

    <v-img
      style="float: right; margin: 10px"
      max-width="300px"
      max-height="200px"
      :src="require('@/assets/servicePicrtutes/mol.jpeg')"
    ></v-img>
    <h3>Чем опасна моль?</h3>

    <p>
      Основной ущерб наносит не взрослая, летающая, а ее ненасытные
      личинки-гусеницы. Они способны жить в вещах довольно долго, не превращаясь
      в бабочку, и постепенно приводя вещь в негодность. Взрослая моль, при
      этом, способна отложить до нескольких сотен яиц.
    </p>
  </div>
</template>

<script>
import Prices from "@/components/general/prices";
export default {
  name: "unichtozhenieMoli",
  components: {Prices},
  data() {
    return {
      prices: [
        {
          name: "1-комнатная квартира",
          price: "от 1700 руб",
        },
        {
          name: "2-комнатная квартира",
          price: "от 2400 руб",
        },
        {
          name: "3-комнатная квартира",
          price: "от 2800 руб",
        },
        {
          name: "4-комнатная квартира",
          price: "от 4500 руб",
        },
        {
          name: "5-комнатная квартира",
          price: "от 3900+400 послед. руб",
        },
        {
          name: "Вагончик-бытовка",
          price: "от 1500 руб",
        },
      ],

    }
  }
};
</script>

<style scoped></style>
