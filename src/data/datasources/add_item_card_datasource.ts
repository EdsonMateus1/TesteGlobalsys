
import { ItemCardModel } from "../model/item_card_model_impl";

export interface IAddItemCardDatasource {
  addItemCard(itemCard: ItemCardModel): Promise<ItemCardModel[] | null>;
}
