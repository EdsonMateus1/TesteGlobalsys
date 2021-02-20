<template>
  <a href="#" class="link-menu-item"
    >{{ name }}
    <img src="../assets/svg/arrow-right-short.svg" alt="icone delete" />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: {} })
export default class ItemMenu extends Vue {
  @Prop({ required: true })
  name!: string;
}
</script>

<style scoped>
.link-menu-item {
  text-align: start;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  color: #bb116e;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
}
</style>
