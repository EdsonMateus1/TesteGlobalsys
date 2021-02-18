import { IDomainError } from "@/domain/errors/errors";
import { ItemCardModel } from "../model/item_card_model_impl";

export interface IDeleteItemCardDatasource {
  delete(itemCard: ItemCardModel): Promise<ItemCardModel[] | IDomainError>;
}
