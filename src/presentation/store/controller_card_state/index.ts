import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { AddItemCard } from "@/domain/usercases/add_item_card";
import { factoryAddCardItem } from "../../../main/factorys/index";

@Module({ namespaced: true, name: "card" })
export class CardController extends VuexModule {
  private addCardItem = factoryAddCardItem();
  public cardItems: ItemCardModel[] = [];
  @Mutation
  public setCardItem(itemCard: ItemCardModel): void {
    this.cardItems.push(itemCard);
  }
  @Action
  public async addItemCard(itemCard: ItemCardModel) {
    const res = await this.addCardItem.addItemCard(itemCard);
    this.context.commit("setCardItem", res);
  }
}
