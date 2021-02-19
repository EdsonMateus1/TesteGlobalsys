<template>
  <div class="home-container">
    <Header :onCloseCart="closeCart" />
    <div class="home">
      <div class="container-banner">
        <div class="banner-home" />
      </div>
      <main class="main">
        <ProductsContainer />
      </main>
      <transition name="card">
        <CartContainer v-if="showCart" :onCloseCart="closeCart" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProductsContainer from "../modules/manage_product/containers/ProductsContainer.vue";
import CartContainer from "../modules/manage_card/containers/CardContainer.vue";
import MenuContainer from "../modules/manage_menu/containers/MenuContainer.vue";
import Header from "../components/Header.vue";

@Component({
  components: { ProductsContainer, CartContainer, Header , },
})
export default class Home extends Vue {
  private showCart = false;
  closeCart(): void {
    this.showCart = !this.showCart;
  }
}
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 0.7s;
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
  width: 1180px;
  height: 331px;
  background: url("../assets/img/Banner.png");
}

@media (max-width: 1180px) {
  .home {
    width: 100%;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
  .banner-home {
    margin: 30px 0px;
    width: 90%;
    height: 375px;
    background: url("../assets/img/Banner-mobile.png");
    background-size: contain;
    background-repeat: repeat;
  }
  .container-banner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .banner-home {
    background-repeat: repeat;
    background-size: contain;
  }
}
</style>
