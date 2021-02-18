import { ItemCardModel } from "../model/item_card_model_impl";

export interface IEditQuantityCartItemDatasource {
  editQuantityItemCard(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCardModel[] | null>;
}
