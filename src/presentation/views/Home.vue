<template>
  <div class="home">
    <ProductsContainer :getProduct="getProduct" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProductsContainer from "../modules/manage_product/containers/ProductsContainer.vue";
import { factoryGetProduct } from "../../main/factory";
@Component({
  components: { ProductsContainer },
})
export default class Home extends Vue {
  private getProduct = factoryGetProduct();
}
</script>
