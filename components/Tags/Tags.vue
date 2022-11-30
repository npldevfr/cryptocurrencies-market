<template>
  <div class="Tags">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Tags",
  props: {}
})
</script>

<style lang="scss" scoped>
.Tags {

  //make grid of tags
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3px;
  width: 100%;
  flex-wrap: wrap;

  > .Tag {
    flex: 1 1 160px;
  }

}
</style>