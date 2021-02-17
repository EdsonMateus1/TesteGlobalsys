<template>
  <div class="container-products">
    {{ pruducts }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usecases/get_product";
import { Product } from "@/domain/entities/product_model";

@Component({})
export default class ProductsContainer extends Vue {
  @Prop({ required: true })
  private getProduct!: IGetProduct;
  private pruducts: Array<Product | never> = [];

  async mounted() {
    this.pruducts = await this.getProduct.getProduct();
  }
}
</script>

<style scoped></style>
