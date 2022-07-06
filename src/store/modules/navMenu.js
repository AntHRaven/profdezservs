const state = {
  activeTab: null,
};

const actions = {
  setActiveTab(context, data) {
    console.log(data)
    context.commit("setActiveTab", data);
  },
};

const mutations = {
  setActiveTab(state, data) {
    state.activeTab = data;
  },
};

const getters = {
  GETACTIVETAB: (state) => state.activeTab,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
