<template>
  <div class="container-modal">
    <div class="confime-delete">
      <span class="text"
        >OPS , tem certeza que deseja excluir esse item do seu carrinho?</span
      >
      <div class="container-buttons">
        <button
          @click.stop="closeModal"
          class="button-decline font-button size-button"
        >
          Cancelar
        </button>
        <button
          @click.stop="() => deleteItemCard(title)"
          class="button-confirme font-button size-button"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ConfirmDelete extends Vue {
  @Prop({ required: true })
  title!: string;
  private show = false;
  closeModal(event: any) {
    this.$emit("closeModal", this.show);
  }
  async deleteItemCard(itemTitle: string): Promise<void> {
    await this.$store.dispatch("deleteItemCard", itemTitle);
  }
}
</script>

<style scoped>
.container-modal {
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0vh;
  right: 0vw;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.confime-delete {
  width: 500px;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text {
  letter-spacing: 0.4px;
  color: #8f8a9b;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}
.container-buttons {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
}

.size-button {
  width: 122px;
  height: 40px;
}

.button-decline {
  background: #c81a78;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
}
.button-confirme {
  background: #fff;
  border-radius: 5px;
  text-align: center;
  color: #c81a78;
  border: 0.8px solid #c81a78;
}

@media (max-width: 1180px) {
  .confime-delete {
    width: 90%;
  }
}
</style>
