import { ItemCardModel } from "@/data/model/item_card_model_impl";

import { IAddItemCard } from "@/domain/usercases/add_item_card";
import { IDeleteItemCard } from "@/domain/usercases/delete_item_card";
import { StoreOptions } from "vuex";
import {
  factoryAddCardItem,
  factoryDeleteCardItem,
} from "../../../main/factorys/index";
import { itemCardMoke } from "../../../main/mokes/item_card_moke";

interface State {
  cardItems: ItemCardModel[];
}

export const CardControllerModule: StoreOptions<State> = {
  state: {
    cardItems: [],
  },
  mutations: {
    setCardItem(state, itemCard: ItemCardModel) {
      state.cardItems = itemCard;
    },
  },
  actions: {
    async addItemCard(context, itemCard: ItemCardModel) {
      const addCardItem: IAddItemCard = factoryAddCardItem();
      try {
        const res = await addCardItem.add(itemCard);
        if (res != null) {
          context.commit("setCardItem", res);
        } else {
          return;
        }
      } catch (error) {
        throw Error(error);
      }
    },
    async deleteItemCard(context, itemTitle: string) {
      const deleteItemCard: IDeleteItemCard = factoryDeleteCardItem();
      try {
        const res = await deleteItemCard.delete(itemTitle);
        if (res != null) {
          context.commit("setCardItem", res);
        } else {
          return;
        }
      } catch (error) {
        throw Error(error);
      }
    },
  },
};
