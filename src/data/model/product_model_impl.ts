import { IProduct } from "@/domain/entities/product_model";

export class ProductModel implements IProduct {
  available: boolean;
  image: String;
  name: String;
  priceMember: number;
  pricePromotional: number;
  priceStock: number;
  constructor(
    available: boolean,
    image: String,
    name: String,
    priceMember: number,
    pricePromotional: number,
    priceStock: number
  ) {
    this.available = available;
    this.image = image;
    this.name = name;
    this.priceMember = priceMember;
    this.pricePromotional = pricePromotional;
    this.priceStock = priceStock;
  }
  get priceMemberFormat() {
    return this.priceMember.toString().replace(".", ",");
  }
  get pricePromotionalFormat() {
    return this.pricePromotional.toString().replace(".", ",");
  }
  get priceStockFormat() {
    return this.priceStock.toString().replace(".", ",");
  }
}
