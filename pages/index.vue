<template>
  <div class="Home">
    <input type="text" v-model="search" placeholder="Search for a coin"/>
    <div v-for="coin in getLimitedCoinsSearch" :key="coin.id">
      {{ coin.name }}
    </div>
    <div v-if="addLoadMore">
      <button @click="limitResults += 10">Charger plus  ({{ getNonShowedCount }})</button>
    </div>
  </div>
</template>

<script lang="ts">


import {mapState} from "pinia";
import {useCoinsStore} from "~/stores/coinsStore";

export default {
  name: "Home",
  data() {
    return {
      search: '',
      limitResults: 10,
    }
  },
  computed: {
    ...mapState(useCoinsStore, ["getCoins"]),
    getFilteredCoinsBySearch() {
      return this.getCoins.filter(coin => {
        if (this.search.length > 3) {
          return coin.name.toLowerCase().includes(this.search.toLowerCase()) || coin.symbol.toLowerCase().includes(this.search.toLowerCase()) || coin.id.toLowerCase().includes(this.search.toLowerCase())
        } else {
          return coin.name.toLowerCase().includes(this.search.toLowerCase()) || coin.symbol.toLowerCase().includes(this.search.toLowerCase())
        }
      })

    },
    getLimitedCoinsSearch() {
      return this.getFilteredCoinsBySearch.slice(0, this.limitResults);
    },
    getNonShowedCount() {
      return this.getFilteredCoinsBySearch.length - this.limitResults;
    },
    addLoadMore() {
      return this.getNonShowedCount > 0;
    }
  },
}
</script>

<style lang="scss" scoped>
.highlight {
  background: red;
}
</style>