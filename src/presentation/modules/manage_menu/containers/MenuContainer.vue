<template>
  <div class="container-modal container-menu">
    <div class="header-menu">
      <button @click.stop="oncloseMenu" class="icone-close-container">
        <img class="icone-close" src="../assets/svg/x.svg" alt="icone delete" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: {} })
export default class MenuContainer extends Vue {
  @Prop({ required: true })
  private oncloseMenu!: Function;
}
</script>

<style scoped>
.container-menu {
  width: 85%;
  left: 0px;
  padding: 5px;
}
.header-menu {
}
.icone-close-container {
  display: flex;
  justify-content: end;
  width: 100%;
}
.icone-close {
  width: 40px;
  height: 40px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .container-menu {
    width: 350px;
  }
}

</style>
