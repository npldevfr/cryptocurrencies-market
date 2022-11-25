<template>
  <button class="Button" :class="[getButtonType, isLocked]">
    <slot name="left" v-if="!isLocked"/>
    {{ label }}
    <slot name="right" v-if="isLocked"/>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    locked: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String as () => "Primary" | "Secondary" | "Danger",
      default: "Primary",
      validator: (value: string) => {
        return ["Primary", "Secondary", "Danger"].includes(value);
      },
    }
  },
  computed: {
    getButtonType() {
      return `ButtonType${this.type}`;
    },
    isLocked() {
      return this.locked ? "ButtonLocked" : "";
    }
  }
})
</script>

<style lang="scss" scoped>
.Button {
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 20px;
  gap: 10px;
  height: 40px;
  border-radius: 4px;
  border: none;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  line-height: 17px;

  :focus {
    outline: none;
  }

  &Locked {
    cursor: not-allowed;
    background: #D0D5DD !important;
    color: var(--primary) !important;
  }

  &Type {
    &Primary {
      color: white;
      background-color: var(--primary);

      &:hover {
        background-color: #1b67d9;
      }
    }

    &Secondary {
      color: #D2D3E0;
      background-color: #F7F7F7;

      &:hover {
        background-color: #E5E5E5;
      }
    }

    &Danger {
      color: white;
      background-color: #FF4D4F;

      &:hover {
        background-color: #9b0404;
      }
    }
  }

}
</style>