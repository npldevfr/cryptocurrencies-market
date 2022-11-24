import {defineStore} from "pinia";
import {Coin} from "~/types/Coin";

export const useCoinsStore = defineStore('coins-store', {
    state: () => ({
        coins: [] as Coin[],
    }),
    getters: {
        getCoins: (state) => state.coins,
    },
    actions: {
        SET_COINS(coins: Coin[]) {
            this.coins = coins;
        },
        FETCH_COINS() {
            fetch("https://api.coingecko.com/api/v3/coins/list")
                .then(r => r.json()).then((coins: Coin[]) => { this.SET_COINS(coins); });
        }
    }
})
