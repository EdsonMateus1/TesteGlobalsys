import { IDeleteItemCardDatasource } from "@/data/datasources/delete_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";

import { itemCardMoke } from "@/main/mokes/item_card_moke";

export class DeleteCardItemDatasource implements IDeleteItemCardDatasource {
  private itemCard: ItemCardModel[] = itemCardMoke;
  private itemCardFilter: ItemCardModel[] = [];
  async delete(itemTitle: string): Promise<ItemCardModel[] | null> {
    try {
      // chamada api

      return this.itemCardFilter;
    } catch (error) {
      throw new Error("error: DeleteCardItemDatasource");
    }
  }
}
