import { IProduct } from "../entities/product_model";
import { IGetProductRepository } from "../repositories/get_product_repository";

export interface IGetProduct {
  get(): Promise<IProduct[]>;
}

export class GetProduct implements IGetProduct {
  private _repository: IGetProductRepository;
  constructor(repository: IGetProductRepository) {
    this._repository = repository;
  }
  async get(): Promise<IProduct[]> {
    return await this._repository.getProduct();
  }
}
