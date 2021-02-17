import { Product } from "../entities/product_model";
import { IGetProductRepository } from "../repositories/get_product_repository";

export interface IGetProduct {
  getProduct(): Promise<Product[]>;
}

export class GetProduct implements IGetProduct {
  private _repository: IGetProductRepository;
  constructor(repository: IGetProductRepository) {
    this._repository = repository;
  }
  async getProduct(): Promise<Product[]> {
    return await this._repository.getProduct();
  }
}
