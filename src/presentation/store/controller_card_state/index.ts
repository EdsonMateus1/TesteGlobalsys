import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { IAddItemCard } from "@/domain/usercases/add_item_card";
import { factoryAddCardItem } from "../../../main/factorys/index";

export default {
  state: {
    cardItems: [],
  },
  mutations: {
    setCardItem(state: any, itemCard: ItemCardModel) {
      state.cardItems = itemCard;
    },
  },
  actions: {
    async addItemCard(context: any, itemCard: ItemCardModel) {
      const addCardItem: IAddItemCard = factoryAddCardItem();
      const res = await addCardItem.addItemCard(itemCard);
      context.commit("setCardItem", res);
    },
  },
};
