<template>
  <div class="ModalLink">
    {{ label }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalLink",
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.ModalLink {
  user-select: none;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  letter-spacing: -0.10px;
  color: #777777;

  &:hover {
    color: white;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>