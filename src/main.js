import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import localeUI from "element-ui/lib/locale";
import defaultLang from "element-ui/lib/locale/lang/ru-RU";
import "element-ui/lib/theme-chalk/index.css";
import vuetify from "./plugins/vuetify";
import VueLayers from "vuelayers";
import "vuelayers/dist/vuelayers.css";
import { Map, TileLayer, OsmSource, Geoloc } from "vuelayers";
import "vuelayers/dist/vuelayers.css"; // needs css-loader

Vue.use(ElementUI);
Vue.use(VueLayers);
Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(Geoloc);
Vue.use(VueLayers, {
  dataProjection: "EPSG:4326",
});
localeUI.use(defaultLang);
document.title = "ПрофДезСервис";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
