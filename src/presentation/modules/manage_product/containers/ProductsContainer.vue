<template>
  <div class="container-products">
    <Product v-for="product in pruducts" v-bind="product" :key="product.name" />
    {{ pruducts}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usecases/get_product";
import { ProductModel } from "@/data/model/product_model_impl";
import Product from "../components/Product/index.vue";
import { factoryGetProduct } from "../../../../main/factorys/index";

@Component({ components: { Product } })
export default class ProductsContainer extends Vue {
  private getProduct: IGetProduct = factoryGetProduct();
  private pruducts: Array<ProductModel> = [];
  private CardControllerModule = this.$store.state.CardControllerModule;
  async mounted() {
    this.pruducts = await this.getProduct.getProduct();
  }
}
</script>

<style scoped></style>
