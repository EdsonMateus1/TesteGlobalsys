import { ItemCard } from "../entities/item_card_model";
import { IDomainError } from "../errors/errors";

export interface AddItemCardRepository {
  addItemCard(itemCard: ItemCard): Promise<ItemCard[] | IDomainError>;
}
