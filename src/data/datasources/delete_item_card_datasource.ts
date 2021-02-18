
import { ItemCardModel } from "../model/item_card_model_impl";

export interface IDeleteItemCardDatasource {
  deleteItemCard(itemTitle: string): Promise<ItemCardModel[] | null>;
}
