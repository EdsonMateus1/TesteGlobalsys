import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { IAddItemCard } from "@/domain/usercases/add_item_card";
import { StoreOptions } from "vuex";
import { factoryAddCardItem } from "../../../main/factorys/index";
import { itemCardMoke } from "../../../main/mokes/item_card_moke";

interface State {
  cardItems: ItemCardModel[];
}

export const CardControllerModule: StoreOptions<State> = {
  state: {
    cardItems: itemCardMoke,
  },
  mutations: {
    setCardItem(state, itemCard: ItemCardModel) {
      state.cardItems = [...state.cardItems, itemCard];
    },
  },
  actions: {
    async addItemCard(context, itemCard: ItemCardModel) {
      const addCardItem: IAddItemCard = factoryAddCardItem();
      const res = await addCardItem.addItemCard(itemCard);
      context.commit("setCardItem", res);
    },
  },
};
