<template>
  <div class="Card">
    <div class="CardHeader">
      <div class="CardTitle">
        <img :src="coin.image" alt="coin image" class="CardImage">
        {{ coin.name }}
      </div>
      <div class="CardPercentage"
           :class="{'CardPercentagePositive': coin.price_change_percentage_24h > 0, 'CardPercentageNegative': coin.price_change_percentage_24h < 0}">
        <span class="CardPercentageValue">{{ coin.price_change_percentage_24h.toFixed(2) }}%</span>
        <span class="CardPercentageIcon">
          <Icon
              :name="coin.price_change_percentage_24h > 0 ? 'material-symbols:arrow-upward' : 'material-symbols:arrow-downward'"/>
        </span>
      </div>
    </div>

    <div class="CardChart">
      <div class="CardChartContainer">
        <div v-if="marketCap.length >= 1">
          <LazyCardChart :market-cap="marketCap" :card-color="getColor"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Coin} from "~/types/Coin";

export default defineComponent({
  name: "Card",
  props: {
    coin: {
      type: Object as () => Coin,
      required: true,
    }
  },
  data() {
    return {
      marketCap: [],
    }
  },
  mounted() {
    fetch(`https://api.coingecko.com/api/v3/coins/${this.coin.id}/market_chart?vs_currency=eur&days=1`)
        .then(r => r.json()).then((coins) => {
      const cs = coins.prices.map((coin) => {
        return [coin[0], coin[1]]
      })
      this.marketCap = Object.values(cs)
    })

    setInterval(() => {
      fetch(`https://api.coingecko.com/api/v3/coins/${this.coin.id}/market_chart?vs_currency=eur&days=1`)
          .then(r => r.json()).then((coins) => {
        const cs = coins.prices.map((coin) => {
          return [coin[0], coin[1]]
        })
        this.marketCap = Object.values(cs)
      })
    }, 25000)
  },
  computed: {
    getColor() {
      return this.coin.price_change_percentage_24h > 0 ? '#00C48C' : '#FF4D4F';
    }
  }
})
</script>

<style lang="scss" scoped>
.Card {
  background: #1E1E1E;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  height: 180px;

  &Header {
    display: flex;
    padding: 15px 10px 0;
    justify-content: space-between;
  }

  &Title {
    display: flex;
    align-items: center;
    color: #D2D3E0;
    font-size: 16px;
    font-weight: 500;
  }

  &Image {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &Percentage {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D2D3E0;
    font-size: 16px;
    font-weight: 500;

    &Positive {
      color: #00C48C;
    }

    &Negative {
      color: #FF4D4F;
    }
  }

  &ChartContainer {
    max-height: 60px;
  }


}
</style>