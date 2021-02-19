<template>
  <div class="container-products">
    <Product v-for="product in pruducts" v-bind="product" :key="product.name" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/domain/usercases/get_product";
import { ProductModel } from "@/data/model/product_model_impl";
import Product from "../components/Pruduct.vue";
import { factoryGetProduct } from "../../../../main/factorys/index";

@Component({ components: { Product } })
export default class ProductsContainer extends Vue {
  private getProduct: IGetProduct = factoryGetProduct();
  private pruducts: ProductModel[] = [];
  async mounted() {
    const res = await this.getProduct.get();
    this.pruducts = res as ProductModel[];
  }
}
</script>

<style scoped>
.tns-item {
  font-size: 3rem;
  font-family: Arial;
  text-align: center;
  padding: 2em;
  background: #fafafb;
}
.tns-item:nth-child(odd) {
  background: #c8e1ff;
}

.container-products {
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 20px;
}
@media (max-width: 1180px) {
  .container-products {
    margin-bottom: 50px;
    padding: 0px 10px 30px 10px;
    gap: 15px;
  }
}
</style>
