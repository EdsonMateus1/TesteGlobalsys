import { IDeleteItemCardDatasource } from "@/data/datasources/delete_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";

import { itemCardMoke } from "@/main/mokes/item_card_moke";

export class DeleteCardItemDatasource implements IDeleteItemCardDatasource {
  private itemCard: ItemCardModel[] = itemCardMoke;

  async deleteItemCard(itemTitle: string): Promise<ItemCardModel[] | null> {
    try {
      // chamada api
      const indexItem = this.itemCard.findIndex(
        (item) => item.title == itemTitle
      );
      this.itemCard.splice(indexItem, 1);
      return this.itemCard;
    } catch (error) {
      throw new Error("error: DeleteCardItemDatasource");
    }
  }
}
