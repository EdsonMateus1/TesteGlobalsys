import { IProduct } from "@/domain/entities/product_model";
import { ProductModel } from "../model/product_model_impl";

export interface IGetProductDatasource {
  getProduct(): Promise<ProductModel[]>;
}
