<template>
  <div class="home">
    <Products/>
  </div>
</template>

<script lang="ts">
import { Vue , Component } from "vue-property-decorator";
import Products from "@/modules/manage_product/containers/Products_container.vue";

@Component({
  components: {Products}
})

export default class Home extends Vue {}
</script>
