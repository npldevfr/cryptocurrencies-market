<template>
  <div class="DefaultLayout">
    <Header></Header>
    <div class="DefaultLayoutContainer">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DefaultLayout",
  props: {}
})
</script>

<style lang="scss" scoped>
.DefaultLayout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &Container {
    padding: 20px 0;
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 1200px) {
  .DefaultLayoutContainer {
    width: 100%;
    padding: 0 20px;
  }
}
</style>