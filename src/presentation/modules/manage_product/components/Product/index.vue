<template>
  <div class="product">
    <div class="image-container_pruduct"><img :src="image" /></div>
    <div class="container-left_product">
      <span class="font-pruduct-title">{{ name }}</span>
      <template v-if="available">
        <div class="price-container">
          <span class="font-price-promotional"
            >${{ pricePromotional.toString().replace(".", ",") }}</span
          >
          <span class="font-ispartner">sócio wine</span>
          <span class="font-pruduct-price"
            >${{ priceMember.toString().replace(".", ",") }}</span
          >
        </div>
        <button
          class="button-active button_product font-button"
          @click.prevent="addItemCard"
        >
          Adicionar
        </button>
      </template>

      <button class="button-disable font-button" v-else>
        Esgotado
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class Product extends Vue {
  @Prop({ required: true })
  available!: boolean;
  @Prop({ required: true })
  image!: String;
  @Prop({ required: true })
  name!: String;
  @Prop({ required: true })
  priceMember!: number;
  @Prop({ required: true })
  pricePromotional!: number;
  @Prop({ required: true })
  priceStock!: number;
  async addItemCard(): Promise<void> {
    const itemCard = new ItemCardModel(
      this.name as string,
      this.image as string,
      this.priceStock,
      1
    );
    await this.$store.dispatch("addItemCard", itemCard);
  }

  async deleteItemCard(itemTitle: string): Promise<void> {
    await this.$store.dispatch("deleteItemCard", itemTitle);
  }
  
  async editQuantityItemCard(
    itemTitle: string,
    newQuantity: number
  ): Promise<void> {
    await this.$store.dispatch("editQuantityItemCard", {
      itemTitle: itemTitle,
      newQuantity: newQuantity,
    });
  }
}
</script>

<style scoped>
.product {
  width: 380px;
  height: 210px;
  display: flex;
  align-items: center;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
}

.image-container_pruduct {
  width: 50%;
}
.container-left_product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 50%;
  height: 210px;
}

.price-container {
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
}

.font-ispartner {
  text-transform: uppercase;
  color: #1d1d1b;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 10px;
  margin-bottom: 5px;
}

.font-price-promotional {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: #888888;
  margin-bottom: 8px;
}

.button_product {
  background: #b6116e;
  height: 40px;
  width: 156px;
}

.button-disable {
  background: #a0a0a0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  height: 40px;
  width: 156px;
}
.button-disable:hover {
  cursor: default;
}
</style>
