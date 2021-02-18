<template>
  <div class="home">
    <ProductsContainer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProductsContainer from "../modules/manage_product/containers/ProductsContainer.vue";
import { factoryGetProduct } from "../../main/factorys";
@Component({
  components: { ProductsContainer },
})
export default class Home extends Vue {}
</script>
