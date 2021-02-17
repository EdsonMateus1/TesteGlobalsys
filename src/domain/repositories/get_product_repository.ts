import { Product } from "@/domain/entities/product_model";

export interface IGetProductRepository {
  getProduct(): Promise<Product[]>;
}
