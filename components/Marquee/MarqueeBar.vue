<template>
  <div class="MarqueeContainer">
      <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MarqueeBar",
  props: {}
})
</script>

<style lang="scss" scoped>

.MarqueeContainer {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>