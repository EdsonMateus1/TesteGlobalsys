import { ItemCardModel } from "@/data/model/item_card_model_impl";

import { IAddItemCard } from "@/domain/usercases/add_item_card";
import { IDeleteItemCard } from "@/domain/usercases/delete_item_card";
import { IEditQuantityCartItem } from "@/domain/usercases/edit_quatity_item_card";
import { StoreOptions } from "vuex";
import {
  factoryAddCardItem,
  factoryDeleteCardItem,
  factoryEditQuantityCardItem,
} from "../../../main/factorys/index";

interface State {
  cardItems: ItemCardModel[];
}

export const CardControllerModule: StoreOptions<State> = {
  state: {
    cardItems: [],
  },
  mutations: {
    setCardItem(state, itemCard: ItemCardModel[]) {
      state.cardItems = itemCard;
    },
  },
  actions: {
    async addItemCard(context, itemCard: ItemCardModel) {
      const addCardItem: IAddItemCard = factoryAddCardItem();
      try {
        const res = await addCardItem.add(itemCard);
        console.log(res);
        
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
    async editQuantityItemCard(context, payload: any) {
      const editQuantityCartItem: IEditQuantityCartItem = factoryEditQuantityCardItem();
      try {
        const res = await editQuantityCartItem.editQuantity(
          payload.itemTitle,
          payload.newQuantity
        );
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
