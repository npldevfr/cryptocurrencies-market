<template>
  <div class="ModalItem" @mouseover="isMouseOver = true" @mouseleave="isMouseOver = false">
    <div class="ModalItemTitle">
      <img :src="coin.image" width="20" :alt="coin.name"/>
      {{ coin.name }}
      <span class="ModalItemSymbol">{{ coin.symbol }}</span>
    </div>
    <div>
      <Transition name="bounce">
        <div v-if="isMouseOver">
          <div class="ModalItemAction">
            <Icon name="material-symbols:add-box" @click="addItem(coin.id)" v-if="!isCoinInList"/>
            <Icon name="ic:round-remove-circle" @click="removeItem(coin.id)" v-else/>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Coin} from "~/types/Coin";
import useCoinsList from "~/composables/useCoinsList";

export default defineComponent({
  name: "ModalItem",
  props: {
    coin: {
      type: Object as () => Coin,
      required: true
    }
  },
  data() {
    return {
      isMouseOver: false
    }
  },
  computed: {
    isCoinInList() {
      return useCoinsList().isCoinInList(this.coin.id);
    }
  },
  methods: {
    addItem(id: string) {
      useCoinsList().addLocalCoin(id);
    },
    removeItem(id: string) {
      useCoinsList().removeLocalCoin(id);
    }
  }
})
</script>

<style lang="scss" scoped>
.ModalItem {
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  transition: all 0.2s ease-in-out;
  background: #292929;
  border: 1px solid #292929;
  color: #D2D3E0;
  border-radius: 4px;
  padding: 12px 10px;
  width: 100%;

  &Symbol {
    margin-left: 5px;
    text-transform: uppercase;
    color: #626264;
  }

  &Title {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.10px;
    color: #D2D3E0;

    img {
      margin-right: 10px;
    }
  }

  &Action {

    font-size: 18px;
    color: var(--primary);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  &:hover {
    background: #1E1E1E;
    cursor: pointer;
    border: 1px solid var(--primary);
  }
}
</style>