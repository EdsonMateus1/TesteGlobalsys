import { IEditQuantityCartItemRepository } from "@/domain/repositories/edit_quatity_item_card_repository";
import { IEditQuantityCartItemDatasource } from "../datasources/edit_quatity_item_card_datasource";
import { ItemCardModel } from "../model/item_card_model_impl";

export class EditQuantityCartItemRepositoryImpl
  implements IEditQuantityCartItemRepository {
  private _datasource: IEditQuantityCartItemDatasource;
  constructor(datasource: IEditQuantityCartItemDatasource) {
    this._datasource = datasource;
  }
  async editQuantityItemCard(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCardModel[] | null> {
    return await this._datasource.editQuantityItemCard(itemTitle, newQuantity);
  }
}
