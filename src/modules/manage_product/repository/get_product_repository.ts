import axios from "@/services/axios_config";
import { ProductModel } from "../model/product_model";
import { IGetProduct } from "@/interfaces/get_product_interface";

export class GetProduct implements IGetProduct {
  async getProduct(): Promise<ProductModel[]> {
    try {
      const res = await axios.get("/908ec5b5-1e5a-4602-9008-47719f7c6759");
      if (res.status == 200) {
        return res.data;
      } else {
        throw new Error("error get product");
      }
    } catch (error) {
      throw new Error(`error getProduct ${error}`);
    }
  }
}
