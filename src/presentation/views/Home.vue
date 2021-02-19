<template>
  <div class="home-container">
    <div class="home">
      <img
        class="banner-home"
        src="../assets/img/Banner.png"
        alt=""
        srcset=""
      />
      <main class="main">
        <ProductsContainer />
      </main>
      <transition name="card">
        <CardContainer v-if="showCard" :onCloseCard="closeCard" />
      </transition>
      <button @click="closeCard">card</button>
    </div>
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
.card-enter-active,
.card-leave-active {
  transition: all 0.8s;
}
.card-enter,
.card-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.home-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.home {
  width: 1180px;
}
.banner-home {
  margin: 50px 0px;
}

@media (max-width: 1180px) {
  .home{
    width: 100%;
  }
}
</style>
