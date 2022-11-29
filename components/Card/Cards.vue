<template>
  <div class="Cards">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Cards",
  props: {}
})
</script>

<style lang="scss" scoped>
.Cards {
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;

}

@media screen and (max-width: 1200px) {
  .Cards {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>