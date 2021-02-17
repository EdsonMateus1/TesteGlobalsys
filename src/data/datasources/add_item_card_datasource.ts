import { ItemCard } from "@/domain/entities/item_card_model";

export interface AddItemCardDatasource {
  addItemCard(itemCard: ItemCard): void;
}
