import { IAddItemCardDatasource } from "@/data/datasources/add_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";

import { itemCardMoke } from "../main/mokes/item_card_moke";

export class AddCardItemDatasource implements IAddItemCardDatasource {
  private itemCard: ItemCardModel[] = itemCardMoke;
  private existsItemCard: any;
  async addItemCard(
    itemCard: ItemCardModel
  ): Promise<ItemCardModel[] | null> {
    this.existsItemCard = this.itemCard.find((e) => {
      return e.title == itemCard.title;
    });
    try {
      if (!this.existsItemCard) {
        await this.itemCard.push(itemCard); // chamada api
        return this.itemCard;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Error addItemCard CardItemDatasource");
    }
  }
}
