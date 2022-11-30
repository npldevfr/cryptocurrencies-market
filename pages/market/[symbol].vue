<template>
  <DefaultLayout>
    <div class="Market">
      {{ $route.params.symbol }}
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DefaultLayout from "~/layouts/default.vue";

export default defineComponent({
  name: "Market",
  components: {DefaultLayout},
  props: {}
})
</script>

<style lang="scss" scoped>
.Market {

}
</style>