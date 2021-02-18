import { ItemCard } from "@/domain/entities/item_card_model";

export class ItemCardModel implements ItemCard {
  title: string;
  image: string;
  price: number;
  quantity: number;
  constructor(title: string, image: string, price: number, quantity: number) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
  get priceFormat() {
    return this.price.toString().replace(".", ",");
  }
}
