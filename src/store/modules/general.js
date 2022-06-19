import router from "@/router/index";

const state = {
  routes: router.options.routes,
};
const actions = {};
const mutations = {};
const getters = {
  GETROUTES: (state) => state.routes,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
