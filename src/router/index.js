import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/disinsection",
    name: "disinsection",
    meta: {
      title: "Дезинсекция",
    },
    component: () => import("../views/viewRouter"),
    children: [
      {
        path: "",
        name: "disinsection",
        meta: {
          parent: "disinsection",
          title: "Дезинсекция",
        },
        component: () => import("../views/disinsection/DisinsectionView"),
      },
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
        // component: () => import(""),
      },
      {
        path: "unichtozhenie-os-i-shershnej",
        name: "unichtozhenie-os-i-shershnej",
        meta: {
          parent: "disinsection",
          title: "Уничтожение ос",
        },
        // component: () => import(""),
      },
      {
        path: "unichtozhenie-mux",
        name: "unichtozhenie-mux",
        meta: {
          parent: "disinsection",
          title: "Уничтожение мух",
        },
        // component: () => import(""),
      },
      {
        path: "unichtozhenie-moshek",
        name: "unichtozhenie-moshek",
        meta: {
          parent: "disinsection",
          title: "Уничтожение мошек",
        },
        // component: () => import(""),
      },
      {
        path: "unichtozhenie-koroeda",
        name: "unichtozhenie-koroeda",
        meta: {
          parent: "disinsection",
          title: "Уничтожение короеда",
        },
        // component: () => import(""),
      },
      {
        path: "unichtozhenie-mokric",
        name: "unichtozhenie-mokric",
        meta: {
          parent: "disinsection",
          title: "Уничтожение мокриц",
        },
        // component: () => import(""),
      },
      {
        path: "unichtozhenie-cheshujnic",
        name: "unichtozhenie-cheshujnic",
        meta: {
          parent: "disinsection",
          title: "Уничтожение чешуйниц",
        },
        // component: () => import(""),
      },
      {
        path: "gerbicidnaya-obrabotka",
        name: "unichtozhenie-obrabotka",
        meta: {
          parent: "disinsection",
          title: "Гербицидная обработка",
        },
        // component: () => import(""),
      },
    ],
  },

  {
    path: "/deratization",
    name: "deratization",
    meta: {
      title: "Дератизация",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
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
    path: "/disinfection",
    name: "disinfection",
    meta: {
      title: "Дезинфекция",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
    children: [
      {
        path: "",
        meta: {
          title: "",
        },
      },
    ],
  },

  {
    path: "/fumigation",
    name: "fumigation",
    meta: {
      title: "Фумигация",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
    children: [
      {
        path: "",
        meta: {
          title: "",
        },
      },
    ],
  },

  {
    path: "/demercurization",
    name: "demercurization",
    meta: {
      title: "Демеркуризация",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
    children: [
      {
        path: "",
        meta: {
          title: "",
        },
      },
    ],
  },

  {
    path: "/price",
    name: "price",
    meta: {
      title: "Цены",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
    children: [
      {
        path: "",
        meta: {
          title: "",
        },
      },
    ],
  },

  {
    path: "/about-us",
    name: "about-us",
    meta: {
      title: "О нас",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
    children: [
      {
        path: "",
        meta: {
          title: "",
        },
      },
    ],
  },

  {
    path: "/contacts",
    name: "contacts",
    meta: {
      title: "Контакты",
    },
    component: () => import("../views/disinsection/DisinsectionView"),
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
