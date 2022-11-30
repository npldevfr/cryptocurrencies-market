<template>
  <div class="Tag">
<!--    <img :src="coin.image" alt="coin image" class="CardImage" width="10" height="10" style="margin-right: 10px">-->
    {{ coin.name }}
    <div class="TagPrice">{{ coin.current_price.toFixed(2) }} €</div>
    <template v-if="showCurrencies">
      <div class="TagCurrency">
        <template v-if="coin.price_change_percentage_24h > 0">
          <Icon name="ic:baseline-trending-up" class="TagPriceUp"/>&nbsp;
          <small class="TagPriceUp">{{ coin.price_change_percentage_24h.toFixed(2) }}%</small>
        </template>
        <template v-else>
          <Icon name="ic:baseline-trending-down" class="TagPriceDown"/>&nbsp;
          <small class="TagPriceDown">{{ coin.price_change_percentage_24h.toFixed(2) }}%</small>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Coin} from "~/types/Coin";

export default defineComponent({
  name: "Tag",
  props: {
    coin: {
      type: Object as () => Coin,
      required: true,
      default: ''
    },
    showCurrencies: {
      type: Boolean,
      required: true,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.Tag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #1f1f1f;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;

  &Currency {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }

  &PriceDown {
    color:#FF4D4F;
  }
  &PriceUp {
    color: #00C48C;
  }



  &Price {
    margin-left: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #b7b7b7;

  }

  &:hover {
    background: #2f2f2f;
    color: #fff;

    > .TagPrice {
      color: #fff;
    }
  }
}
</style>