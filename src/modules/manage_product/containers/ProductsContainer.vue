<template>
  <div class="container-products"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IGetProduct } from "@/interfaces/get_product_interface";

@Component({})
export default class ProductsContainer extends Vue {
  @Prop({ required: true })
  private getProduct!: IGetProduct;
  async mounted() {
    const res = await this.getProduct.getProduct();
    console.log(res);
  }
}
</script>

<style scoped></style>
