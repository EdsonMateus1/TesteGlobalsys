import { ItemCard } from "../entities/item_card_model";


export interface IDeleteItemCardRepository {
  delete(itemTitle: string): Promise<ItemCard[] | null>;
}
