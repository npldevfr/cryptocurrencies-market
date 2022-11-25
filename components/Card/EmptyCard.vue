<template>
  <div class="EmptyCard">
    Aucun favoris
    <div class="EmptyCardAdd" @click="$emit('openModal')">
      <Icon name="material-symbols:add" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "EmptyCard",
  props: {}
})
</script>

<style lang="scss" scoped>
.EmptyCard {

  background: #1E1E1E;
  border-bottom: 1px dashed #292929;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  height: 180px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #494949;
  font-size: 16px;
  font-weight: 500;


  &Add {

    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: #292929;
    padding: 10px;
    color: #D2D3E0;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: #494949;
    }
  }

}
</style>