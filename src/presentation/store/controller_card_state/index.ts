import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { IDomainError } from "@/domain/errors/errors";
import { IAddItemCard } from "@/domain/usercases/add_item_card";
import { StoreOptions } from "vuex";
import {
  factoryAddCardItem,
  factoryDomainError,
} from "../../../main/factorys/index";
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
      try {
        const res = await addCardItem.addItemCard(itemCard);
        const error: IDomainError = factoryDomainError(
          "error:store addItemCard",
          "error:addItemCard store"
        );
        if (res != error) {
          return;
        } else {
          context.commit("setCardItem", res);
        }
      } catch (error) {
        throw Error(error);
      }
    },
  },
};
