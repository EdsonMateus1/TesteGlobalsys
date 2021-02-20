<template>
  <div class="home-container">
    <Header :onCloseCart="closeCart" :onMenu="closeMenu" />
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
      <transition name="menu">
        <div v-if="showMenu" class="menu-container-home">
          <MenuContainer :oncloseMenu="closeMenu" />
          <div @click.stop="closeMenu" class="black-modal"></div>
        </div>
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
  components: { ProductsContainer, CartContainer, Header, MenuContainer },
})
export default class Home extends Vue {
  private showCart = false;
  private showMenu = false;
  closeCart(): void {
    this.showCart = !this.showCart;
  }
  closeMenu() {
    this.showMenu = !this.showMenu;
  }
}
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 0.5s;
}
.card-enter,
.card-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.home-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
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
.menu-container-home {
  width: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.black-modal {
  width: calc(100% - 85%);
  position: absolute;
  right: 0px;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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

@media (min-width: 500px){
  .black-modal{
    width: calc(100% - 350px);
  }
}
</style>
