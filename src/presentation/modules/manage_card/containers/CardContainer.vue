<template>
  <div class="container-modal">
    <div class="header-card">
      <button @click.prevent="onCloseCart" class="button-close-card">
        <img src="../assets/svg/arrow-left.svg" alt="" srcset="" />
      </button>
      <h2 class="title-card">WineBox ({{ totalItems }})</h2>
    </div>
    <div class="card-items">
      <CardItem
        v-for="cardItem in cardItems"
        :key="cardItem.title"
        v-bind="cardItem"
      />
    </div>
    <div class="footer-card">
      <div class="container-total">
        <span class="font-subtotal">subtotal</span>
        <span class="font-total"><strong>R$</strong>{{ priceTotal }}</span>
      </div>
      <button class="button-active font-button button-purchase">
        Finalizar pedido
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { Vue, Component, Prop } from "vue-property-decorator";
import CardItem from "../components/CardItem.vue";

@Component({
  components: { CardItem },
})
export default class CardContainer extends Vue {
  @Prop({ required: true })
  onCloseCart!: Function;

  get cardItems() {
    return this.$store.state.CardControllerModule.cardItems;
  }
  get priceTotal() {
    const carItems: ItemCardModel[] = this.cardItems;
    const priceTotal = carItems.reduce(
      (acc: number, carItem: ItemCardModel) =>
        acc + carItem.price * carItem.quantity,
      0
    );
    return priceTotal
      .toFixed(2)
      .toString()
      .replace(".", ",");
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

<style scope>
.header-card {
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
}
.button-close-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.title-card {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: -0.833333px;
}
.card-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px 15px;
  height: calc(100% - 180px);
  overflow-y: auto;
}
.footer-card {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.05);
  height: 120px;
  padding: 17px;
}
.container-total {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 26px;
}
.font-subtotal {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 12px;
  text-transform: uppercase;
}
.font-total {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 10px;
  color: #c81a78;
}
.font-total strong {
  font-size: 15px;
}

.button-purchase {
  background: #7fbc44;
  width: 100%;
  height: 50px;
}
.button-purchase:focus {
  background-color: rgba(127, 188, 68, 0.8);
}

</style>
