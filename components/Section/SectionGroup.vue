<template>
  <div class="SectionGroup">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SectionGroup",
  props: {}
})
</script>

<style lang="scss" scoped>
.SectionGroup {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.SectionGroup + .SectionGroup {
  margin-top: 20px;
}
</style>