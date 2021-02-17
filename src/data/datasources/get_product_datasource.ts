import { Product } from "@/domain/entities/product_model";

export interface IGetProductDatasource {
  getProduct(): Promise<Product[]>;
}
