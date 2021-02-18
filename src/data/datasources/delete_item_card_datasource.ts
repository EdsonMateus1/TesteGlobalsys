
import { ItemCardModel } from "../model/item_card_model_impl";

export interface IDeleteItemCardDatasource {
  delete(itemTitle: string): Promise<ItemCardModel[] | null>;
}
