<template>
  <div class="home">
    <ProductsContainer />
    <CardContainer/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProductsContainer from "../modules/manage_product/containers/ProductsContainer.vue";
import CardContainer from "../modules/manage_card/containers/CardContainer.vue";
import { factoryGetProduct } from "../../main/factorys";
@Component({
  components: { ProductsContainer,CardContainer },
})
export default class Home extends Vue {}
</script>
