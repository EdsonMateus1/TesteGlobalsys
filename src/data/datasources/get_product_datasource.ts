import { ProductModel } from "../model/product_model_impl";

export interface IGetProductDatasource {
  getProduct(): Promise<ProductModel[]>;
}
