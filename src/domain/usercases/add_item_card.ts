import { ItemCard } from "../entities/item_card_model";

import { IAddItemCardRepository } from "../repositories/add_item_card_repository";

export interface IAddItemCard {
  add(itemCard: ItemCard): Promise<ItemCard[] | null>;
}

export class AddItemCard implements IAddItemCard {
  private _repository: IAddItemCardRepository;
  constructor(repository: IAddItemCardRepository) {
    this._repository = repository;
  }
  async add(itemCard: ItemCard): Promise<ItemCard[] | null> {
    return await this._repository.addItemCard(itemCard);
  }
}
