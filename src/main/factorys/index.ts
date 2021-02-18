import { AddCardItemRepositoryImpl } from "@/data/repositories/add_item_card_repository_impl";
import { DeleteCardItemRepositoryImpl } from "@/data/repositories/delete_item_card_repository_impl";
import { GetRepositoryImpl } from "@/data/repositories/get_product_repository_impl";

import { AddItemCard } from "@/domain/usercases/add_item_card";
import { DeleteItemCard } from "@/domain/usercases/delete_item_card";
import { GetProduct } from "@/domain/usercases/get_product";
import { AddCardItemDatasource } from "@/external/add_item_card_datasource_impl";
import { DeleteCardItemDatasource } from "@/external/delete_item_card_datasource_impl";
import { GetProductDatasource } from "@/external/get_product_datasource_impl";

export function factoryGetProduct() {
  const getProduct = new GetProduct(
    new GetRepositoryImpl(new GetProductDatasource())
  );
  return getProduct;
}

export function factoryAddCardItem() {
  const addCardItem = new AddItemCard(
    new AddCardItemRepositoryImpl(new AddCardItemDatasource())
  );
  return addCardItem;
}

export function factoryDeleteCardItem() {
  const deleteCardItem = new DeleteItemCard(
    new DeleteCardItemRepositoryImpl(new DeleteCardItemDatasource())
  );
  return deleteCardItem;
}

