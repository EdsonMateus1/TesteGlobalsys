import { ItemCard } from "../entities/item_card_model";

import { IDeleteItemCardRepository } from "../repositories/detele_item_card_repository";

export interface IDeleteItemCard {
  delete(itemTitle: string): Promise<ItemCard[] | null>;
}

export class DeleteItemCard implements IDeleteItemCard {
  private _repository: IDeleteItemCardRepository;
  constructor(repository: IDeleteItemCardRepository) {
    this._repository = repository;
  }
  async delete(itemTitle: string): Promise<ItemCard[] | null> {
    return await this._repository.deleteItemCard(itemTitle);
  }
}
