import { IAddItemCardDatasource } from "@/data/datasources/add_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { ItemCard } from "@/domain/entities/item_card_model";

export class CardItemDatasource implements IAddItemCardDatasource {
  private itemCard: ItemCardModel[] = []
  async addItemCard(itemCard: ItemCardModel): Promise<any> {
    return await [this.itemCard];
  }
}
