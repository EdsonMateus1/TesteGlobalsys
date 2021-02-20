<template>
  <div class="container-item-menu">
    <ItemMenu name="Clube"/>
    <hr class="divider divider-item" />
    <ItemMenu name="Loja"/>
    <hr class="divider divider-item" />
    <ItemMenu name="Produtores"/>
    <hr class="divider divider-item" />
    <ItemMenu name="Ofertas"/>
    <hr class="divider divider-item" />
    <ItemMenu name="Eventos"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ItemMenu from "./ItemMenu.vue";

@Component({ components: { ItemMenu } })
export default class ContainerItemMenu extends Vue {}
</script>

<style scoped>
.container-item-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 30px;
}

.divider-item {
  margin: 10px 0px;
}
</style>
