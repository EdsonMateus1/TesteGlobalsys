import { ItemCard } from "../entities/item_card_model";
import { IEditQuantityCartItemRepository } from "../repositories/edit_quatity_item_card_repository";

export interface IEditQuantityCartItem {
  editQuantity(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCard[] | null>;
}

export class EditQuantityCartItem implements IEditQuantityCartItem {
  private _repository: IEditQuantityCartItemRepository;

  constructor(repository: IEditQuantityCartItemRepository) {
    this._repository = repository;
  }
  async editQuantity(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCard[] | null> {
    return await this._repository.editQuantityItemCard(itemTitle, newQuantity);
  }
}
