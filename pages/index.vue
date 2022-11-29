<template>
  <DefaultLayout>

    <SectionGroup>
      <SectionHeader title="Vos favoris"/>
      <Cards>
        <Card v-for="coin in getHeadCoinsStorage()" :key="coin.id" :coin="coin"/>
        <EmptyCard @open-modal="modalState = true"/>
      </Cards>
    </SectionGroup>


    <SectionGroup>
      <SectionHeader title="Toutes les cryptomonnaies"/>
    </SectionGroup>


    <div class="Home">
      <Modal @close="modalState = false"
             :show="modalState"
             title="Ajouter une crypto à votre wallet">
        <template v-slot:header>
          <Input autofocus ref="input" v-model:model-value="searchCryptoValue"
                 placeholder="Chercher par nom, référence"/>
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
import {defineComponent} from "vue";
import DefaultLayout from "~/layouts/default.vue";
import Cards from "~/components/Card/Cards.vue";
import EmptyCard from "~/components/Card/EmptyCard.vue";
import {useStorage} from "@vueuse/core";


export default defineComponent({
  name: "Home",
  components: {EmptyCard, Cards, DefaultLayout, Modal},
  data() {
    return {
      /* Modal */
      modalState: false,

      /* inputValues */
      searchCryptoValue: '',


      limitResults: 10,
    }
  },
  setup() {
    const storage = useStorage('coins', [])
    const coinsStore = useCoinsStore()

    //when storage.value change, update getHeadCoinsStorage

    const getHeadCoinsStorage = () => {
      return coinsStore.getHeadCoinsStorage(storage.value)
    }

    return {
      getHeadCoinsStorage
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
    }
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
  }
})
</script>

<style lang="scss" scoped>
.highlight {
  background: red;
}
</style>