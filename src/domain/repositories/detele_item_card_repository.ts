import { ItemCard } from "../entities/item_card_model";


export interface IDeleteItemCardRepository {
  deleteItemCard(itemTitle: string): Promise<ItemCard[] | null>;
}
