import { ItemCard } from "@/domain/entities/item_card_model";

export interface IAddItemCardDatasource {
  addItemCard(itemCard: ItemCard): Promise<any>;
}
