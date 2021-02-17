import { IAddItemCardDatasource } from "@/data/datasources/add_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { ItemCard } from "@/domain/entities/item_card_model";

export class CardItemDatasource implements IAddItemCardDatasource {
  private itemCard: ItemCardModel[] = [];
  private existsItemCard: any;
  async addItemCard(itemCard: ItemCardModel): Promise<ItemCardModel[]> {
    this.existsItemCard = this.itemCard.find((e) => {
      return e.title == itemCard.title;
    });
    try {
      if (!this.existsItemCard) {
        this.itemCard.push(itemCard); // chamada api
        return await this.itemCard;
      } else {
        throw new Error("item ja esta no carrinho");
      }
    } catch (error) {
      throw new Error("Error addItemCard CardItemDatasource");
    }
  }
}
