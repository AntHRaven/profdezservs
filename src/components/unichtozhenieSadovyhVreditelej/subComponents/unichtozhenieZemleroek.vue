<template>
  <div>
    <h1>Уничтожение землероек</h1>

    <ul>
      <li>Размещение по лункам специализированной отравы-приманки</li>
      <li>
        Выгон землероек химическим продувом под давлением с помощью мобильного
        распылителя
      </li>
      <li>Монтаж ловушек (требуются регулярные проверки)</li>
      <li>Размещение кислородных капсул в лунки с дальнейшей блокировкой</li>
    </ul>
    <prices :service="prices"></prices>

    <h3>Порядок действий</h3>

    <ul>
      <li>Вы оставляете заявку.</li>
      <li>В согласованное время к вам приезжает мастер.</li>
      <li>Проводится осмотр.</li>
      <li>Заключаем договор.</li>
      <li>Начинаем обработку.</li>
    </ul>

    <h3>Как выглядит землеройка</h3>

    <p>
      Землеройка — это маленький зверек с длинным носом и хвостом. Тело размеров
      30-50 мм. Окрас шкурки сверху темно-коричневого, а низ серого цвета с
      коротким ворсом. Нос напоминает хоботок, который очень подвижен. Уши
      практически не выступают из-за меха. Хорошо развитые лапки позволяют рыть
      ходы.
    </p>

    <h3>Откуда они появились</h3>

    <p>
      Этот зверек питается насекомыми, ящерками, червяками, паучками, но и не
      откажется от семян растений. Они любят увлажнённую, рыхлую почву, где
      можно найти себе пищу: огород, дача, сад, могут залезть в дачный домик.
      Это существо очень прожорливое и в поисках пищи оно роет новые ходы,
      повреждая корни растений. За день он съедает в 9 раз больше своего веса.
      Плодятся они 2-3 раза в год по 3-10 детенышей. Гнезда строят шаровидного
      вида из листьев и травы.
    </p>
  </div>
</template>

<script>
import Prices from "@/components/general/prices";
export default {
  name: "unichtozhenieZemleroek",
  components: { Prices },
  data() {
    return {
      prices: [
        {
          name: "до 10 соток",
          price: "280 руб/сотка",
        },
        {
          name: "до 15 соток",
          price: "250 руб/сотка",
        },
        {
          name: "до 30 соток",
          price: "220 руб/сотка",
        },
        {
          name: "до 50 соток",
          price: "170 руб/сотка",
        },
        {
          name: "до 80 соток",
          price: "120 руб/сотка",
        },
        {
          name: "до 100 соток",
          price: "110 руб/сотка",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
