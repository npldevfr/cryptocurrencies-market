<template>
    <div class="Header">
      <div class="">AA</div>
      <div class="">
        Avatar
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    name: "Header",
    props: {}
})
</script>

<style lang="scss" scoped>
.Header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: #1E1E1E;
  border-bottom: 1px solid #292929;
}
</style>