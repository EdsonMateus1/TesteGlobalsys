<template>
  <div class="home">
    <Products :getProduct="getProduct"/>
  </div>
</template>

<script lang="ts">
import { Vue , Component } from "vue-property-decorator";
import Products from "@/modules/manage_product/containers/ProductsContainer.vue";
import {GetProduct} from "@/modules/manage_product/repository/get_product_repository";

@Component({
  components: {Products}
})
export default class Home extends Vue {
  private getProduct = new GetProduct()
}
</script>
