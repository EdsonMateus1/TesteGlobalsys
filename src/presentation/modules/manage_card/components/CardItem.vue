<template>
  <div>
    <div class="card-item">
      <div class="left-card">
        <img class="img-card" :src="image" alt="imagem vinho" />
      </div>
      <div class="right-card">
        <div class="flex container-title-delete">
          <span class="font-pruduct-title title-card-item">{{ title }}</span>
          <button @click.prevent="() => deleteItemCard(title)">
            <img src="../assets/svg/cart-x-fill.svg" alt="icone delete" />
          </button>
        </div>
        <div class="flex container-select-quatity">
          <div class="select-quatity">
            <button @click.prevent="subQuantity" class="icone-add-quatity">
              <img src="../assets/svg/dash.svg" alt="icone sub item" />
            </button>
            <span>{{ stateQuantity }}</span>
            <button @click.prevent="addQuantity" class="icone-add-quatity">
              <img src="../assets/svg/plus.svg" alt="icone add item" />
            </button>
          </div>
          <span class="font-pruduct-price">R${{ price }}</span>
        </div>
      </div>
    </div>
    <hr class="divider" />
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
  private stateQuantity = this.quantity;

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
  addQuantity() {
    this.stateQuantity++;
    this.editQuantityItemCard(this.title, this.stateQuantity);
  }
  subQuantity() {
    if (this.stateQuantity == 1) {
      return;
    } else {
      this.stateQuantity--;
      this.editQuantityItemCard(this.title, this.stateQuantity);
    }
  }
}
</script>

<style scoped>
.card-item {
  display: flex;
}
.divider {
  border: 0.5px solid #d5d5d5;
  height: 1px;
  margin: 30px 0px;
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

.container-title-delete {
  width: 100%;
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
  justify-content: space-between;
  align-items: center;
}
.select-quatity {
  height: 38px;
  width: 76px;
  padding: 15px;
  border: 0.5px solid #888888;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
.icone-add-quatity {
  font-size: 20px;
}
</style>
