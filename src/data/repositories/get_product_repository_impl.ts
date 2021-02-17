import { Product } from "@/domain/entities/product_model";
import { IGetProductRepository } from "@/domain/repositories/get_product_repository";
import { IGetProductDatasource } from "../datasources/get_product_datasource";

export class GetRepositoryImpl implements IGetProductRepository {
  private _datasource: IGetProductDatasource;
  constructor(datasource: IGetProductDatasource) {
    this._datasource = datasource;
  }
  async getProduct(): Promise<Product[]>  {
    return await this._datasource.getProduct();
  }
}
