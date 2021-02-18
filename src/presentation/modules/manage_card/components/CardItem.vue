<template>
  <div class="card-item">
    {{title}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CardItem extends Vue {
  @Prop({required: true})
  title!: string;
  @Prop({required: true})
  image!: string;
  @Prop({required: true})
  price!: number;
  @Prop({required: true})
  quantity!: number;

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
