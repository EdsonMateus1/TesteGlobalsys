import { ItemCard } from "../entities/item_card_model";

export interface AddItemCardRepository {
  addItemCard(itemCard: ItemCard): Promise<any>;
}
