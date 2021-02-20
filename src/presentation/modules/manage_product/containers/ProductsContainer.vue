<template>
  <div class="container-products carousel">
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
.container-products {
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 20px;
}
.container-products::-webkit-scrollbar-track {
  background-color: #f4f4f4;
}
.container-products::-webkit-scrollbar {
  width: 1px;
  height: 5px;
  background: #f4f4f4;
}

.container-products::-webkit-scrollbar-thumb {
  background: #dad7d7;
}

@media (max-width: 1180px) {
  .container-products {
    margin-bottom: 50px;
    padding: 0px 10px 30px 10px;
    gap: 15px;
  }
}
</style>
