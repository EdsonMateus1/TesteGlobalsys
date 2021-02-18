import { ItemCard } from "@/domain/entities/item_card_model";
import { IEditQuantityCartItemRepository } from "@/domain/repositories/edit_quatity_item_card_repository";
import { IEditQuantityCartItemDatasource } from "../datasources/edit_quatity_item_card_datasource";

export class EditQuantityCartItemRepositoryImpl
  implements IEditQuantityCartItemRepository {
  private _datasource: IEditQuantityCartItemDatasource;
  constructor(datasource: IEditQuantityCartItemDatasource) {
    this._datasource = datasource;
  }
  async editQuantityItemCard(
    itemTitle: string,
    newQuantity: number
  ): Promise<ItemCard[] | null> {
    return await this._datasource.editQuantityItemCard(itemTitle, newQuantity);
  }
}
