<template>
  <DefaultLayout>

    <MarqueeBar>
    <Vue3Marquee :duration="140" style="overflow: hidden">
      <Tag v-for="coin in getCoins" :key="coin.symbol" :coin="coin" show-currencies
           @click="$router.push({name: 'market-symbol', params: { symbol: coin.symbol}})"/>

    </Vue3Marquee>
    </MarqueeBar>

      <SectionGroup>
        <SectionHeader title="Vos favoris"/>
        <Cards>
          <Card v-for="coin in getChartsCoins()" :key="coin.id" :coin="coin"/>
          <EmptyCard @open-modal="modalState = true" v-if="getChartsCoins().length !== 5"
                     v-for="i in 5 - getChartsCoins().length" :key="i"/>
        </Cards>
      </SectionGroup>

      <SectionGroup>
        <SectionHeader title="Toutes les cryptomonnaies"/>
        <Layout>
          <template v-slot:left>
            <Input v-model:model-value="searchCoin" placeholder="Chercher par nom"/>
            <br/>
            <ModalText :label="`Résultats : ${getSearchedCoins.length}`"/>
          </template>
        </Layout>
        <Tags>
          <Tag v-for="coin in getSearchedCoins" :key="coin.id" :coin="coin"
               @click="$router.push({name: 'market-symbol', params: { symbol: coin.symbol}})"/>
          <template v-if="getSearchedCoins.length === 0">
            Aucun résultat
          </template>
        </Tags>
      </SectionGroup>


      <div class="Home">
        <Modal @close="modalState = false"
               :show="modalState"
               title="Ajouter une crypto à votre wallet">
          <template v-slot:header>
            <Input autofocus ref="input" v-model:model-value="searchCryptoValue"
                   placeholder="Chercher par crypto, référence"/>
          </template>

          <template v-slot:body>

            <template v-if="getFilteredCoinsBySearch.length > 0">
              <ModalActions padding>
                <template v-slot:left>
                  <ModalText :label="`${getLimitedCoinsSearch.length} résultats`"/>
                </template>
                <template v-slot:right>
                  <ModalLink v-if="addLoadMore" @click="limitResults += 10"
                             :label="`Charger plus de résultats (${getNonShowedCount})`"/>
                </template>
              </ModalActions>

              <ModalItemGroup>
                <ModalItem v-for="coin in getLimitedCoinsSearch" :key="coin.id" :coin="coin"/>
              </ModalItemGroup>
            </template>
            <template v-else>
              <ModalNoResult :search-query="searchCryptoValue" v-if="!!searchCryptoValue"/>
            </template>
          </template>

          <template v-slot:footer>
            <ModalActions>
              <template v-slot:left>
                <KbdGroup @click="modalState = false">
                  <Kbd label="ESC"/>
                  Quitter
                </KbdGroup>
              </template>
            </ModalActions>
          </template>
        </Modal>


      </div>
  </DefaultLayout>
</template>

<script lang="ts">


import {mapState} from "pinia";
import {useCoinsStore} from "~/stores/coinsStore";
import Modal from "~/components/Modal/Modal.vue";
import {computed, defineComponent, watch} from "vue";
import DefaultLayout from "~/layouts/default.vue";
import Cards from "~/components/Card/Cards.vue";
import EmptyCard from "~/components/Card/EmptyCard.vue";
import {useStorage} from "@vueuse/core";
import {useLocalCoinsStore} from "~/stores/localCoinsStore";
import Tag from "~/components/Tags/Tag.vue";


export default defineComponent({
  name: "Home",
  components: {Tag, EmptyCard, Cards, DefaultLayout, Modal},
  data() {
    return {
      /* Modal */
      modalState: false,

      /* inputValues */
      searchCryptoValue: '',
      searchCoin: '',


      limitResults: 10,
    }
  },
  computed: {
    ...mapState(useCoinsStore, ["getCoins", "getSelectedCoins"]),
    getFilteredCoinsBySearch() {
      return this.getCoins.filter(coin => {
        if (this.searchCryptoValue.length > 3) {
          return coin.name.toLowerCase().includes(this.searchCryptoValue.toLowerCase()) || coin.symbol.toLowerCase().includes(this.searchCryptoValue.toLowerCase()) || coin.id.toLowerCase().includes(this.searchCryptoValue.toLowerCase())
        } else {
          return coin.name.toLowerCase().includes(this.searchCryptoValue.toLowerCase()) || coin.symbol.toLowerCase().includes(this.searchCryptoValue.toLowerCase())
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
    },
    getSearchedCoins() {
      return this.getCoins.filter(coin => {
        return coin.name.toLowerCase().includes(this.searchCoin.toLowerCase()) || coin.symbol.toLowerCase().includes(this.searchCoin.toLowerCase())
      })
    },
  },
  mounted() {
    // if ctrl + k is pressed, focus on the input
    document.addEventListener('keydown', (e) => this.handleKeyCtrlK(e));
  },
  beforeUnmount() {
    document.removeEventListener('keydown', (e) => this.handleKeyCtrlK(e));
  },
  methods: {
    handleKeyCtrlK(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        this.modalState = !this.modalState;
      }
    },
  },
  setup() {
    const localCoins = useLocalCoinsStore();
    const coinsStore = useCoinsStore();

    const getChartsCoins = () => {
      return coinsStore.getHeadCoinsStorage(localCoins.getCoins)
    }

    return {
      getChartsCoins
    }
  }
})
</script>

<style lang="scss" scoped>
.highlight {
  background: red;
}
</style>