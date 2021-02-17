import { ItemCard } from "../entities/item_card_model";
import { AddItemCardRepository } from "../repositories/add_item_card_repository";

export interface IAddItemCard {
  addItemCard(itemCard: ItemCard): Promise<ItemCard[]>;
}

export class AddItemCard implements IAddItemCard {
  private _repository: AddItemCardRepository;
  constructor(repository: AddItemCardRepository) {
    this._repository = repository;
  }
  async addItemCard(itemCard: ItemCard): Promise<ItemCard[]> {
    return await this._repository.addItemCard(itemCard);
  }
}
