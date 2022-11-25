<template>
  <div class="ModalNoResult">
    Aucun résultat correspondant à&nbsp;<strong>{{ searchQuery }}</strong>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalNoResult",
  props: {
    searchQuery: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.ModalNoResult {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #D2D3E0;
}
</style>