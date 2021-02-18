import { ItemCard } from "../entities/item_card_model";
import { IDomainError } from "../errors/errors";

export interface IAddItemCardRepository {
  addItemCard(itemCard: ItemCard): Promise<ItemCard[] | IDomainError>;
}
