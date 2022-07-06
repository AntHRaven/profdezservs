import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/disinsection",
    name: "disinsection",
    meta: {
      service: true,
      image: require("@/assets/firstImage.jpg"),
      show: false,
      title: "Уничтожение насекомых",
    },
    hidden: true,
    component: () => import("../views/viewRouter"),
    children: [
      // {
      //   path: "",
      //   name: "disinsection",
      //   meta: {
      //     parent: "disinsection",
      //     title: "Дезинсекция",
      //   },
      //   component: () => import("../views/disinsection/DisinsectionView"),
      // },
      {
        path: "unichtozhenie-kleshchej",
        name: "unichtozhenie-kleshchej",
        meta: {
          parent: "disinsection",
          title: "Уничтожение клещей",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieKleshchejView"),
      },
      {
        path: "unichtozhenie-komarov",
        name: "unichtozhenie-komarov",
        meta: {
          parent: "disinsection",
          title: "Уничтожение комаров",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieKomarovView"),
      },
      {
        path: "unichtozhenie-klopov",
        name: "unichtozhenie-klopov",
        meta: {
          parent: "disinsection",
          title: "Уничтожение клопов",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieKlopovView"),
      },
      {
        path: "unichtozhenie-tarakanov",
        name: "unichtozhenie-tarakanov",
        meta: {
          parent: "disinsection",
          title: "Уничтожение тараканов",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieTarakanovView"),
      },
      {
        path: "unichtozhenie-bloh",
        name: "unichtozhenie-bloh",
        meta: {
          parent: "disinsection",
          title: "Уничтожение блох",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieBlohView"),
      },
      {
        path: "unichtozhenie-muravev",
        name: "unichtozhenie-muravev",
        meta: {
          parent: "disinsection",
          title: "Уничтожение муравьев",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieMuravjovView"),
      },
      {
        path: "unichtozhenie-mokric",
        name: "unichtozhenie-mokric",
        meta: {
          parent: "disinsection",
          title: "Уничтожение мокриц",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieMokricView"),
      },
      {
        path: "unichtozhenie-os-i-shershnej",
        name: "unichtozhenie-os-i-shershnej",
        meta: {
          parent: "disinsection",
          title: "Уничтожение ос и шершней",
        },
        component: () =>
          import("../views/disinsection/subViews/UnichtozhenieOsShershnejView"),
      },

      {
        path: "barery-ot-nasekomyh",
        name: "barery-ot-nasekomyh",
        meta: {
          parent: "disinsection",
          title: "Барьеры от насекомых",
        },
        component: () =>
          import("../views/disinsection/subViews/BareryOtNasekomyhView"),
      },
      {
        name: "obrabotka-holodnym-tumanom",
        path: "obrabotka-holodnym-tumanom",
        meta: {
          parent: "disinsection",
          title: "Обработка холодным туманом",
        },
        component: () =>
          import("../views/disinsection/subViews/ObrabotkaHolodnymTumanomView"),
      },
    ],
  },

  {
    path: "/deratization",
    name: "deratization",
    meta: {
      title: "Уничтожение грызунов",
      service: true,
      show: false,
      image: require("@/assets/firstImage.jpg"),
    },
    hidden: true,
    component: () => import("../views/viewRouter"),
    children: [
      {
        path: "unichtozhenie-myshej",
        name: "unichtozhenie-myshej",
        meta: {
          parent: "deratization",
          title: "Уничтожение мышей",
        },
        component: () =>
          import("../views/deratization/subViews/UnichtozhenieMyshejView"),
      },

      {
        path: "unichtozhenie-krys",
        name: "unichtozhenie-krys",
        meta: {
          parent: "deratization",
          title: "Уничтожение крыс",
        },
        component: () =>
          import("../views/deratization/subViews/UnichtozhenieKrysView"),
      },
    ],
  },

  {
    path: "/unichtozhenie-sadovyh-vreditelej",
    name: "unichtozhenie-sadovyh-vreditelej",
    meta: {
      service: true,
      image: require("@/assets/firstImage.jpg"),
      show: false,
      title: "Уничтожение садовых вредителей",
    },
    hidden: true,
    component: () => import("../views/viewRouter"),
    children: [
      {
        path: "unichtozhenie-krotov",
        name: "unichtozhenie-krotov",
        meta: {
          parent: "unichtozhenie-sadovyh-vreditelej",
          title: "Уничтожение кротов",
        },
        component: () =>
          import(
            "../views/unichtozhenieSadovyhVreditelej/subViews/UnichtozhenieKrotovView"
          ),
      },

      {
        path: "unichtozhenie-zemleroek",
        name: "unichtozhenie-zemleroek",
        meta: {
          parent: "unichtozhenie-sadovyh-vreditelej",
          title: "Уничтожение землероек",
        },
        component: () =>
          import(
            "../views/unichtozhenieSadovyhVreditelej/subViews/UnichtozhenieZemleroekView"
          ),
      },
    ],
  },

  {
    path: "/other-services",
    name: "other-services",
    meta: {
      service: true,
      image: require("@/assets/firstImage.jpg"),
      show: false,
      title: "Другие услуги",
    },
    hidden: true,
    component: () => import("../views/viewRouter"),
    children: [
      {
        path: "dezinfekcija",
        name: "dezinfekcija",
        meta: {
          parent: "other-services",
          title: "Дезинфекция",
        },
        component: () => import("../views/other/subViews/DezinfekcijaView"),
      },

      {
        path: "unichtozhenie-zapahov",
        name: "unichtozhenie-zapahov",
        meta: {
          parent: "other-services",
          title: "Уничтожение запахов",
        },
        component: () =>
          import("../views/other/subViews/UnichtozhenieZapahovView"),
      },

      {
        path: "unichtozhenie-pleseni",
        name: "unichtozhenie-pleseni",
        meta: {
          parent: "other-services",
          title: "Уничтожение плесени",
        },
        component: () =>
          import("../views/other/subViews/UnichtozheniePleseniView"),
      },
    ],
  },

  {
    path: "/price",
    name: "price",
    meta: {
      title: "Цены",
    },
    component: () => import("../views/PricesView"),
  },

  {
    path: "/about-us",
    name: "about-us",
    meta: {
      title: "О компании",
    },
    component: () => import("../views/aboutUsView"),
  },

  {
    path: "/",
    name: "home",
    hidden: true,
    meta: {
      title: "О компании",
    },
    component: () => import("../views/aboutUsView"),
  },

  {
    path: "/contacts",
    name: "contacts",
    meta: {
      title: "Контакты",
    },
    component: () => import("../views/ContactsView"),
    children: [
      {
        path: "",
        meta: {
          title: "",
        },
        // component: () => import(""),
      },
    ],
  },

  {
    path: "/services",
    name: "services",
    meta: {
      title: "Услуги",
    },
    component: () => import("../views/services/ListServicesView"),
  },
  {
    path: "/stock",
    name: "stock",
    meta: {
      title: "Акции",
    },
    component: () => import("../views/stockView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
