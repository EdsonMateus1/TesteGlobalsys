import { IDeleteItemCardDatasource } from "@/data/datasources/delete_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";

import { itemCardMoke } from "@/main/mokes/item_card_moke";

export class DeleteCardItemDatasource implements IDeleteItemCardDatasource {
  private itemCard: ItemCardModel[] = itemCardMoke;
  async delete(
    itemTitle: string
  ): Promise<ItemCardModel[] | null> {
    try {
      // chamada api
      const res = await this.itemCard.filter(
        (item) => item.title != itemTitle
      );
      console.log(res);
      if (!res) {
        return null;
      }
      this.itemCard = res
      return res;
    } catch (error) {
      throw new Error("error: DeleteCardItemDatasource")
    }
  }
}
