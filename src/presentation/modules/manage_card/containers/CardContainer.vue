<template>
  <div class="container-card">
    <div class="header-card"></div>
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
        <span class="font-total">{{ priceTotal }}</span>
      </div>
      <button class="button-active font-button button-purchase">
        Finalizar pedido
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { Vue, Component } from "vue-property-decorator";
import CardItem from "../components/CardItem.vue";

@Component({
  components: { CardItem },
})
export default class CardContainer extends Vue {
  get cardItems() {
    return this.$store.state.CardControllerModule.cardItems;
  }
  get priceTotal() {
    const carItems: ItemCardModel[] = this.cardItems;
    const priceTotal = carItems.reduce(
      (acc: number, carItem: ItemCardModel) => acc + carItem.price,
      0
    );
    return priceTotal;
  }
}
</script>

<style scope>
.container-card {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 350px;
  height: 100%;
  background: #f5f5f5;
}
.header-card {
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 60px;
}
.card-items {
  height: calc(100% - 180px);
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
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
}
.font-total {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #c81a78;
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
