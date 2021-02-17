import { IAddItemCardDatasource } from "@/data/datasources/add_item_card_datasource";
import { ItemCard } from "@/domain/entities/item_card_model";

export class CardItemDatasource implements IAddItemCardDatasource {
  addItemCard(itemCard: ItemCard): Promise<any> {
    // logica para add card item
    throw new Error("Method not implemented.");
  }
}
