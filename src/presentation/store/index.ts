import Vue from "vue";
import Vuex from "vuex";
import  CardController  from "./controller_card_state";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
   CardController,
  },
});
