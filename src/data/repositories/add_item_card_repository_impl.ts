import { ItemCard } from "@/domain/entities/item_card_model";
import { IDomainError } from "@/domain/errors/errors";
import { AddItemCardRepository } from "@/domain/repositories/add_item_card_repository";
import { IAddItemCardDatasource } from "../datasources/add_item_card_datasource";

export class AddCardItemRepositoryImpl implements AddItemCardRepository {
  private _datasource: IAddItemCardDatasource;
  constructor(datasource: IAddItemCardDatasource) {
    this._datasource = datasource;
  }
  async addItemCard(itemCard: ItemCard): Promise<ItemCard[] | IDomainError> {
    return await this._datasource.addItemCard(itemCard);
  }
}
