import { ItemCard } from "@/domain/entities/item_card_model";
import { ItemCardModel } from "../model/item_card_model_impl";

export interface IAddItemCardDatasource {
  addItemCard(itemCard: ItemCard): Promise<ItemCardModel[]>;
}
