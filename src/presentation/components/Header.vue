<template>
  <header class="header">
    <div class="container-header">
      <div class="container-title-links">
        <h1 class="title-header">
          w<span>in</span>e
        </h1>
        <nav class="container-links">
          <a href="#" class="link">Clube</a>
          <a href="#" class="link"> Loja</a>
          <a href="#" class="link">Ofertas</a>
          <a href="#" class="link">Eventos</a>
        </nav>
      </div>
      <button @click.prevent="onCloseCard" class="container-icone-acess-card">
        <img src="../assets/img/Bitmap.png" alt="" srcset="" />
        <div class="container-total-items">
          <span class="item-quatity">{{ totalItems }}</span>
        </div>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {
  @Prop({ required: true })
  onCloseCard!: Function;

  get cardItems() {
    return this.$store.state.CardControllerModule.cardItems;
  }
  get totalItems() {
    const carItems: ItemCardModel[] = this.cardItems;
    const quantityTotal = carItems.reduce(
      (acc: number, carItem: ItemCardModel) => acc + carItem.quantity,
      0
    );
    return quantityTotal;
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
.container-header {
  display: flex;
  width: 1120px;
  justify-content: space-between;
}

.title-header {
  color: #1D1D1B;
  text-transform: uppercase;
  font-weight: 900;
  font-family: "Sacramento", cursive;
  letter-spacing: 2px;
}

.title-header span {
  font-family: "Lato", sans-serif;
  font-weight: 350;
  font-style: italic;
  opacity: 0.8;
}

.container-icone-acess-card {
  position: relative;
  background: #f6b554;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.container-icone-acess-card img {
  position: relative;
  top: 1px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.container-total-items {
  position: absolute;
  right: 5px;
  top: 35px;
  width: 20px;
  height: 20px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-quatity {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #5cb79f;
}

.container-title-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
}
.container-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.link {
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #666666;
  text-decoration: none;
}
</style>
