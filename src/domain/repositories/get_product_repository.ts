import { IProduct } from "@/domain/entities/product_model";

export interface IGetProductRepository {
  getProduct(): Promise<IProduct[]>;
}
