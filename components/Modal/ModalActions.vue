<template>
  <div class="ModalActions" :class="{'ModalActionsPadding': padding}">
    <div class="ModalActionsList">
      <slot name="left"/>
    </div>
    <div CLASS="ModalActionsList">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalActions",
  props: {
    padding: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.ModalActions {
  width: 100%;
  background: #1E1E1E;
  position: sticky;
  top: 0;
  display: flex;
  z-index: 60;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  &Padding {
    padding: 15px;
  }

  &List {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
</style>