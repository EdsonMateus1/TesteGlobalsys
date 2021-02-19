<template>
  <div class="home">
    <ProductsContainer />
    <transition name="card">
      <CardContainer v-if="showCard" :onCloseCard="closeCard" />
    </transition>
    <button @click="closeCard">card</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProductsContainer from "../modules/manage_product/containers/ProductsContainer.vue";
import CardContainer from "../modules/manage_card/containers/CardContainer.vue";

@Component({
  components: { ProductsContainer, CardContainer },
})
export default class Home extends Vue {
  private showCard = true;
  closeCard(): void {
    this.showCard = !this.showCard;
  }
}
</script>

<style scoped>
.card-enter-active, .card-leave-active {
  transition: all 0.8s;
}
.card-enter, .card-leave-to{
  opacity: 0;
  transform: translateX(100%);
}

</style>
