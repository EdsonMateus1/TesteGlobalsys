import { ItemCard } from "@/domain/entities/item_card_model";

import { IDeleteItemCardRepository } from "@/domain/repositories/detele_item_card_repository";
import { IDeleteItemCardDatasource } from "../datasources/delete_item_card_datasource";
import { ItemCardModel } from "../model/item_card_model_impl";

export class DeleteCardItemRepositoryImpl implements IDeleteItemCardRepository {
  private _datasource: IDeleteItemCardDatasource;
  constructor(datasource: IDeleteItemCardDatasource) {
    this._datasource = datasource;
  }
  async deleteItemCard(
    itemTitle: string
  ): Promise<ItemCardModel[] | null> {
    return await this._datasource.deleteItemCard(itemTitle);
  }
}
