import axios from "@/external/services/axios_config";
import { IGetProductRepository } from "@/domain/repositories/get_product_repository";
import { ProductModel } from "@/data/model/product_model_impl";

export class GetProductDatasource implements IGetProductRepository {
  async getProduct(): Promise<ProductModel[]> {
    try {
      const res = await axios.get<ProductModel[]>(
        "/908ec5b5-1e5a-4602-9008-47719f7c6759"
      );
      if (res.status == 200) {
        const products = res.data.map((product) => {
          return new ProductModel(
            product.available,
            product.image,
            product.name,
            product.priceMember,
            product.pricePromotional,
            product.priceStock
          );
        });
        return products;
      } else {
        throw new Error("error get product");
      }
    } catch (error) {
      throw new Error(`error getProduct ${error}`);
    }
  }
}
