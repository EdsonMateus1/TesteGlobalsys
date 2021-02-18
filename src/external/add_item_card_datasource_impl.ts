import { IAddItemCardDatasource } from "@/data/datasources/add_item_card_datasource";
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { DomainError, IDomainError } from "@/domain/errors/errors";
import { itemCardMoke } from "../main/mokes/item_card_moke";

export class CardItemDatasource implements IAddItemCardDatasource {
  private itemCard: ItemCardModel[] = itemCardMoke;
  private existsItemCard: any;
  async addItemCard(
    itemCard: ItemCardModel
  ): Promise<ItemCardModel[] | IDomainError> {
    this.existsItemCard = this.itemCard.find((e) => {
      return e.title == itemCard.title;
    });
    try {
      if (!this.existsItemCard) {
        this.itemCard.push(itemCard); // chamada api
        return await this.itemCard;
      } else {
        return new DomainError("item ja esta no carrinho","erro: CardItemDatasource");
      }
    } catch (error) {
      throw new Error("Error addItemCard CardItemDatasource");
    }
  }
}
