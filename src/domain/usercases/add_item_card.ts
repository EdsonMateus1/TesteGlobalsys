import { ItemCard } from "../entities/item_card_model";

export interface AddItemCard {
  addItemCard(itemCard: ItemCard): void;
}
