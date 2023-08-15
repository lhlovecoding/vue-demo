import Vue from "vue";
import Vuex from "vuex";
import Car from "./Car";
import User from "./User";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Car,
    User,
  },
});
