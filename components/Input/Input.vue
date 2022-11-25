<template>
  <div class="Input">
    <input type="text" :maxlength="maxLength"
           :autocomplete="autocomplete"
           :placeholder="placeholder"
           :name="name"
           :ref="ref"
           :type="type"
           :value="modelValue"
           @keydown.enter="$emit('enter')"
           :autofocus="autofocus"
           @input="updateInput" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Input",
  props: {
    ref: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      required: false,
      default: 100
    },
    autocomplete: {
      type: String,
      required: false,
      default: "off"
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    name: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: "text"
    }
  },
  methods: {
    updateInput(event: any) {
      // if (this.maxLength > 0 && event.target.value.length > this.maxLength) {
      //   event.target.value = event.target.value.substring(0, this.maxLength);
      // }
      this.$emit("update:modelValue", event.target.value);
    },
    deleteInput() {
      this.$emit("update:modelValue", "");
    }
  }
})
</script>

<style lang="scss" scoped>
.Input {

  width: 100%;

  input {

    transition: all 0.2s ease-in-out;
    padding: 10px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #292929;
    color: #D2D3E0;

    &:focus {
      outline: none;
      border: 1px solid var(--primary);
    }
  }
}
</style>