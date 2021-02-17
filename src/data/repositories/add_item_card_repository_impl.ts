import { ItemCard } from "@/domain/entities/item_card_model";
import { AddItemCardRepository } from "@/domain/repositories/add_item_card_repository";
import { AddItemCardDatasource } from "../datasources/add_item_card_datasource";

export class GetRepositoryImpl implements AddItemCardRepository {
  private _datasource: AddItemCardDatasource;
  constructor(datasource: AddItemCardDatasource) {
    this._datasource = datasource;
  }
  addItemCard(itemCard: ItemCard): void {
    this._datasource.addItemCard(itemCard);
  }
}
