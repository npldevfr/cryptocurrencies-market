<template>
  <div class="SectionHeader">
    <h2>{{ title }}</h2>
    <div class="SectionHeaderBar"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.SectionHeader {

  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 20px;

  h2 {
    display: flex;
    white-space: nowrap;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }

  &Bar {
    width: 100%;
    height: 1px;
    background: #494949;
  }
}
</style>