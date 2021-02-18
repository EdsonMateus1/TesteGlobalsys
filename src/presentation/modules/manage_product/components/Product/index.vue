<template>
  <div class="product">
    <button @click.prevent="addItemCard">add</button>
    <button @click.prevent="() => deleteItemCard(name)">delete</button>
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
}
</script>

<style scoped></style>
