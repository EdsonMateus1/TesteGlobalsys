<template>
  <div class="product"></div>
</template>

<script lang="ts">
import { ItemCardModel } from "@/data/model/item_card_model_impl";
import { Vue, Prop } from "vue-property-decorator";

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
      this.pricePromotional,
      0
    );
    await this.$store.dispatch("addItemCard", itemCard);
  }
}
</script>

<style scoped></style>
