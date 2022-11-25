<template>
  <div class="ModalItemGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalItemGroup",
  props: {}
})
</script>

<style lang="scss" scoped>
.ModalItemGroup {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scroll-behavior: smooth;
}
</style>