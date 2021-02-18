import { IEditQuantityCartItemDatasource } from "@/data/datasources/edit_quatity_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { itemCardMoke } from "@/main/mokes/item_card_moke";

export class EditCardItemDatasource implements IEditQuantityCartItemDatasource {
  private itemCard: ItemCardModel[] = itemCardMoke;
  async editQuantityItemCard(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCardModel[] | null> {
    try {
      // chamada api
      const indexItem = this.itemCard.findIndex(
        (item) => item.title == itemTitle
      );
      if (indexItem != -1) {
        this.itemCard[indexItem].quantity = newQuantity;
        return this.itemCard;
      } else {
        return null;
      }
    } catch (error) {
      throw Error("error: EditCardItemDatasource");
    }
  }
}
