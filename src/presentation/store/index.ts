import Vue from "vue";
import Vuex from "vuex";
import { cardController } from "./controller_card_state";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cardController: cardController,
  },
});
