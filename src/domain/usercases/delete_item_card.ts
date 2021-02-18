import { ItemCard } from "../entities/item_card_model";
import { IDomainError } from "../errors/errors";

export interface IDeleteItemCard {
  delete(itemCard: ItemCard): Promise<ItemCard[] | IDomainError>;
}
