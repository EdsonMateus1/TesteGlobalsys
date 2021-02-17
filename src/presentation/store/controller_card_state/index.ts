import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { IAddItemCard } from "@/domain/usercases/add_item_card";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { factoryAddCardItem } from "../../../main/factorys/index";

@Module({ namespaced: true, name: "card" })
export class CardController extends VuexModule {
  private addCardItem: IAddItemCard = factoryAddCardItem();
  public cardItems: ItemCardModel[] = [];
  @Mutation
  public setCardItem(itemCard: ItemCardModel): void {
    this.cardItems.push(itemCard);
  }
  @Action
  public async addItemCard(itemCard: ItemCardModel) {
    //const res = await this.addCardItem.addItemCard(itemCard);
    this.context.commit("setCardItem", itemCard);
  }
}
