import { GetRepositoryImpl } from "@/data/repositories/get_product_repository_impl";
import { GetProduct } from "@/domain/usercases/get_product";
import { GetProductDatasource } from "@/external/get_product_datasource_impl";

export function factoryGetProduct() {
  const getProduct = new GetProduct(
    new GetRepositoryImpl(new GetProductDatasource())
  );
  return getProduct;
}
