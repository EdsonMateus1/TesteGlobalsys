import { ItemCard } from "@/domain/entities/item_card_model";
import { IAddItemCardRepository } from "@/domain/repositories/add_item_card_repository";
import { IAddItemCardDatasource } from "../datasources/add_item_card_datasource";
import { ItemCardModel } from "../model/item_card_model_impl";

export class AddCardItemRepositoryImpl implements IAddItemCardRepository {
  private _datasource: IAddItemCardDatasource;
  constructor(datasource: IAddItemCardDatasource) {
    this._datasource = datasource;
  }
  async addItemCard(itemCard: ItemCardModel): Promise<ItemCard[] | null> {
    return await this._datasource.addItemCard(itemCard);
  }
}
