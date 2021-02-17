<template>
  <div class="container-products">
    {{ }}
    {{ cardController.cardItems }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usecases/get_product";
import { ProductModel } from "@/data/model/product_model_impl";
import { ItemCardModel } from "@/data/model/item_card_model_impl";

@Component({})
export default class ProductsContainer extends Vue {
  @Prop({ required: true })
  readonly getProduct!: IGetProduct;
  private pruducts: Array<ProductModel | never> = [];
  private cardController = this.$store.state.CardController;

  async mounted() {
    this.pruducts = await this.getProduct.getProduct();
    const cardItem = new ItemCardModel("teste", "teste", 1, 1);
    this.$store.dispatch("addItemCard",cardItem);
  }
}
</script>

<style scoped></style>
