export default {
  namespaced: true,
  state: {
    carList: [
      {
        id: "001",
        name: "奔驰",
        color: "black",
      },
    ],
    desc: "汽车界的扛把子",
  },
  actions: {},
  mutations: {},
  getters: {
    addHeart(state) {
      return "♥" + state.desc + "♥";
    },
  },
};
