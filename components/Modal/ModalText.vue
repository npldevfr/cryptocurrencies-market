<template>
  <div class="ModalText">
    {{ label }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalText",
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.ModalText {
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  letter-spacing: -0.10px;
  color: #777777;
}
</style>