<template>
  <div>
    <h1>Уничтожение запахов</h1>

    <prices :service="prices"></prices>

    <h3>Наши преимущества</h3>

    <v-row align="start" no-gutters>
      <v-col style="margin-right: 10px">
        <v-img
          style="margin: 0 auto"
          max-width="100"
          :src="require('@/assets/servicePicrtutes/sertificat.png')"
        >
        </v-img>
        <p style="text-align: center">Сертифицированные препараты</p>
      </v-col>

      <v-col style="margin-right: 10px">
        <v-img
          style="margin: 0 auto"
          max-width="100"
          :src="require('@/assets/servicePicrtutes/tri-vida-obr.png')"
        >
        </v-img>
        <p style="text-align: center">3 вида обработки</p>
      </v-col>

      <v-col style="margin-right: 10px">
        <v-img
          style="margin: 0 auto"
          max-width="100"
          :src="require('@/assets/servicePicrtutes/dogovor.png')"
        >
        </v-img>
        <p style="text-align: center">Предоставляем договор</p>
      </v-col>

      <v-col style="margin-right: 10px">
        <v-img
          style="margin: 0 auto"
          max-width="100"
          :src="require('@/assets/servicePicrtutes/besopas.png')"
        >
        </v-img>
        <p style="text-align: center">Безопасные для людей и животных</p>
      </v-col>

      <v-col style="margin-right: 10px">
        <v-img
          style="margin: 0 auto"
          max-width="100"
          :src="require('@/assets/servicePicrtutes/garantia3.png')"
        >
        </v-img>
        <p style="text-align: center">Гарантия 3 года</p>
      </v-col>

      <v-col style="margin-right: 10px">
        <v-img
          style="margin: 0 auto"
          max-width="100"
          :src="require('@/assets/servicePicrtutes/prof-icon.png')"
        >
        </v-img>
        <p style="text-align: center">Профессиональный подход</p>
      </v-col>
    </v-row>

    <h3>Виды обработки:</h3>
    <ul>
      <li>Механическая</li>
      <li>Холодный туман по UVL технологии</li>
      <li>Сухой туман по Американским технологиям Гарвард</li>
    </ul>

    <v-row>
      <v-col>
        <v-img
          style="margin: 0 auto"
          max-width="300"
          :src="require('@/assets/servicePicrtutes/vidi-obrabotki-01.jpg')"
        >
        </v-img>
      </v-col>
      <v-col>
        <v-img
          style="margin: 0 auto"
          max-width="300"
          :src="require('@/assets/servicePicrtutes/vidi-obrabotki-02.jpg')"
        >
        </v-img>
      </v-col>
    </v-row>

    <h3>Уничтожаем все виды запахов:</h3>

    <ul>
      <li>Запах мочи, экскрементов, рвотных масс</li>
      <li>
        Трупный запах, в том числе после выделения органической субстанции
      </li>
      <li>Запах после смерти животного, в том числе крысы или мыши</li>
      <li>Запах плесени, сырости</li>
      <li>Запах химии, краски, лаков, различных газов</li>
      <li>Запах бензина, керосина, уксуса, различных растворителей</li>
      <li>Запах ковролина, линолеума, обойного клея</li>
      <li>Запах после дезинсекции и дезинфекции</li>
      <li>Запах после наркоманов, алкоголиков, бездомных</li>
      <li>Старческий запах, запахи долго не проветривавшегося помещения</li>
      <li>
        Запахи после различных асоциальных личностей – больных с синдромом
        Плюшкина, затворников
      </li>
      <li>Запах гари и сгоревшей еды, перегоревшей проводки</li>
      <li>Запах после прорыва канализации</li>
      <li>Запах сгнивших и протухших продуктов</li>
      <li>Запахи пропавших овощей и фруктов, несвежего мяса</li>
      <li>Запахи рыбы и морепродуктов</li>
      <li>Запах плесневелой или отсыревшей бакалеи</li>
      <li>Запахи после хранения специй</li>
      <li>Запахи медикаментов</li>
      <li>Специфические запахи на различных предприятиях</li>
      <li>Запахи табака и алкоголя, в том числе в автомобилях</li>
      <li>Дезодорация перед продажей квартиры</li>
    </ul>

    <h3>Мы обрабатываем:</h3>

    <v-row>
      <v-col cols="3">
        <v-img
          max-width="250"
          :src="require('@/assets/servicePicrtutes/zapahi_01.jpg')"
        >
        </v-img>
      </v-col>
      <v-col>
        <h4>Жилые помещения</h4>

        <ul>
          <li>Квартиры, апартаменты, частные дома</li>
          <li>Гостиницы, отели, хостелы</li>
          <li>Бытовки, помещения консьержей, охранные будки, гаражи</li>
          <li>Подвалы и чердаки жилых домов</li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-img
          max-width="250"
          :src="require('@/assets/servicePicrtutes/zapahi_02.jpg')"
        >
        </v-img>
      </v-col>
      <v-col>
        <h4>Коммерческие помещения</h4>

        <ul>
          <li>Цеха, склады, хранилища</li>
          <li>Рестораны, кафе, пиццерии, столовые, офисы</li>
          <li>Магазины, подсобные помещения магазинов и супермаркетов</li>
          <li>Фитнес-клубы, бани и сауны</li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-img
          max-width="250"
          :src="require('@/assets/servicePicrtutes/zapahi_03.jpg')"
        >
        </v-img>
      </v-col>
      <v-col>
        <h4>Транспорт и коммуникации</h4>

        <ul>
          <li>Автомобили (в том числе легковые), автобусы</li>
          <li>Вентиляция, системы охлаждения и кондиционирования</li>
          <li>Фургоны, рефрижераторы</li>
          <li>Холодильники, духовки</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Prices from "@/components/general/prices";
export default {
  name: "unichtozhenieZapahov",
  components: { Prices },
  data() {
    return {
      prices: [
        {
          name: "Комната",
          price: "от 1000 руб",
        },
        {
          name: "1-комнатная квартира",
          price: "от 1200 руб",
        },
        {
          name: "2-комнатная квартира",
          price: "от 1500 руб",
        },
        {
          name: "3-комнатная квартира",
          price: "от 2000 руб",
        },
        {
          name: "4-комнатная квартира",
          price: "от 3000 руб",
        },
        {
          name: "5-комнатная квартира",
          price: "от 4000 руб",
        },
        {
          name: "Вагончик-бытовка",
          price: "от 800 руб",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
