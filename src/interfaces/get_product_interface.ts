import { ProductModel } from "@/modules/manage_product/model/product_model";

export interface IGetProduct {
  getProduct(): Promise<ProductModel[]>;
}
