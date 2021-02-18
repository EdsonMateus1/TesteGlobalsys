import { ItemCard } from "../entities/item_card_model";

export interface IEditQuantityCartItemRepository {
  editQuantityItemCard(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCard[] | null>;
}
