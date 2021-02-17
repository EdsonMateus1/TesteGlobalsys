<template>
  <div class="container-products">
    {{ this.pruducts[0] }}
    {{ cardController}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usecases/get_product";
import { ProductModel } from "@/data/model/product_model_impl";

@Component({})
export default class ProductsContainer extends Vue {
  @Prop({ required: true })
  readonly getProduct!: IGetProduct;
  private pruducts: Array<ProductModel | never> = [];
  private cardController = this.$store.state.CardController;

  async mounted() {
    this.pruducts = await this.getProduct.getProduct();
  }
}
</script>

<style scoped></style>
