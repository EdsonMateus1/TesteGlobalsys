<template>
  <div class="container-products">
    {{ this.pruducts[0]}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usecases/get_product";
import { ProductModel } from "@/data/model/product_model_impl";

@Component({})
export default class ProductsContainer extends Vue {
  @Prop({ required: true })
  private getProduct!: IGetProduct;
  private pruducts: Array<ProductModel | never> = [];

  async mounted() {
    this.pruducts = await this.getProduct.getProduct();
    console.log(this.pruducts[0].priceMember);
    
  }
}
</script>

<style scoped></style>
