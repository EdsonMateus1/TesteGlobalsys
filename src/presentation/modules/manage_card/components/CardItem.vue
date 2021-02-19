<template>
  <div class="card-item">
    <div class="left-card">
      <img class="img-card" :src="image" alt="imagem vinho" />
    </div>
    <div class="right-card">
      <div class="flex container-title-delete">
        <span class="font-pruduct-title title-card-item">{{ title }}</span>
        <button @click.prevent="() => deleteItemCard(title)"> <img  src="../assets/svg/x-circle.svg" alt="icone delete"/> </button>
      </div>
      <div>
        <div class="select-quatity"></div>
        <span class="font-pruduct-price">R${{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CardItem extends Vue {
  @Prop({ required: true })
  title!: string;
  @Prop({ required: true })
  image!: string;
  @Prop({ required: true })
  price!: number;
  @Prop({ required: true })
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

<style scoped>
.card-item {
  display: flex;
  padding: 15px 25px 15px 5px;
}

.left-card {
  width: 96px;
  height: 132px;
}
.right-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 96px);
}

.container-title-delete{
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.title-card-item {
  width: 180px;
}
.img-card {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.flex {
  display: flex;
}
</style>
