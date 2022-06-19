import Vue from "vue";
import Vuex from "vuex";
import navMenu from "@/store/modules/navMenu";
import general from "@/store/modules/general";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    navMenu,
    general,
  },
});
