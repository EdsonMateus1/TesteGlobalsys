import { ItemCard } from "../entities/item_card_model";
import { IDomainError } from "../errors/errors";
import { IAddItemCardRepository } from "../repositories/add_item_card_repository";

export interface IAddItemCard {
  addItemCard(itemCard: ItemCard): Promise<ItemCard[] | IDomainError>;
}

export class AddItemCard implements IAddItemCard {
  private _repository: IAddItemCardRepository;
  constructor(repository: IAddItemCardRepository) {
    this._repository = repository;
  }
  async addItemCard(itemCard: ItemCard): Promise<ItemCard[] | IDomainError> {
    return await this._repository.addItemCard(itemCard);
  }
}
