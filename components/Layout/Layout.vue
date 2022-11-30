<template>
  <div class="Layout">
    <div class="LayoutLeft">
      <slot name="left"/>
    </div>
    <div class="LayoutRight">
      <slot name="right"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Layout",
  props: {}
})
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  &Left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  &Right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
}
</style>