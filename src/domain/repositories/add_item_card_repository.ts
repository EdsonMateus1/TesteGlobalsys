import { ItemCard } from "../entities/item_card_model";


export interface IAddItemCardRepository {
  addItemCard(itemCard: ItemCard): Promise<ItemCard[] | null>;
}
