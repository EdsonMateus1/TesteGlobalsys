<template>
  <div class="container-item-menu">
    <button class="button-menu-item">Clube 
      <img src="../assets/svg/chevron-down.svg" alt="icone" >
    </button>
    <hr class="divider divider-item" />
    <button class="button-menu-item">Loja
      <img src="../assets/svg/chevron-down.svg" alt="icone" >
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: {} })
export default class ItemMenu extends Vue {}
</script>

<style scoped>
.container-item-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 30px;
}

.button-menu-item {
  text-align: start;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  color: #bb116e;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.divider-item{
  margin: 10px 0px;
  
}
</style>
