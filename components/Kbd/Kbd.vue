<template>
  <div class="KeyboardKey">{{ label }}<slot v-if="$slots.default"/> </div>
</template>

<script lang="ts">

export default {
  name: 'KeyboardKey',
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.KeyboardKey {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  width: fit-content;
  padding: 2px 7px;
  gap: 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  user-select: none;
  color: #A0A3A6;
  fill: #A0A3A6;
  background: #171717;
  border: 1px solid #292929;
  border-radius: 4px;
}

@media screen and (max-width: 800px) {
  .KeyboardKey {
    display: none;
  }
}
</style>