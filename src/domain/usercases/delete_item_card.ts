import { ItemCard } from "../entities/item_card_model";
import { IDomainError } from "../errors/errors";
import { IDeleteItemCardRepository } from "../repositories/detele_item_card_repository";

export interface IDeleteItemCard {
  delete(itemCard: ItemCard): Promise<ItemCard[] | IDomainError>;
}

export class DeleteItemCard implements IDeleteItemCard {
  private _repository: IDeleteItemCardRepository;
  constructor(repository: IDeleteItemCardRepository) {
    this._repository = repository;
  }
  async delete(itemCard: ItemCard): Promise<ItemCard[] | IDomainError> {
    return await this._repository.delete(itemCard);
  }
}
