import { IDomainError } from "@/domain/errors/errors";
import { ItemCardModel } from "../model/item_card_model_impl";

export interface IAddItemCardDatasource {
  addItemCard(itemCard: ItemCardModel): Promise<ItemCardModel[] | IDomainError>;
}
