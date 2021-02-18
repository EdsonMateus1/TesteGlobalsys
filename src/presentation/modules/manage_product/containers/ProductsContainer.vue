<template>
  <div class="container-products">
    <Product v-for="product in pruducts" v-bind="product" :key="product.name" />
    {{ CardControllerModuleGet}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usercases/get_product";
import { ProductModel } from "@/data/model/product_model_impl";
import Product from "../components/Product/index.vue";
import { factoryGetProduct } from "../../../../main/factorys/index";

@Component({ components: { Product } })
export default class ProductsContainer extends Vue {
  private getProduct: IGetProduct = factoryGetProduct();
  private pruducts: ProductModel[] = [];
  private CardControllerModule = this.$store.state.CardControllerModule;
  get CardControllerModuleGet(){
    return this.CardControllerModule.cardItems
  }
  async mounted() {
    this.pruducts = await this.getProduct.get() as ProductModel[];
  }
}
</script>

<style scoped></style>
