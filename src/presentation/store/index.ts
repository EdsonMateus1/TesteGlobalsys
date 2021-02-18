import { ItemCardModel } from "@/data/model/item_card_model_impl";
import Vue from "vue";
import Vuex from "vuex";
import { CardControllerModule } from "./controller_card_state";

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    CardControllerModule: CardControllerModule,
  },
});
