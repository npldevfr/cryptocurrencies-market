import {defineStore} from "pinia";
import {Coin} from "~/types/Coin";

export const useCoinsStore = defineStore('coins-store', {
    state: () => ({
        coins: [] as Coin[],
    }),
    getters: {
        getCoins: (state) => state.coins,
        getSelectedCoins: (state) => (coinsSymbols: string[]) => {
            return state.coins.filter(coin => coinsSymbols.includes(coin.symbol))
        }
    },
    actions: {
        SET_COINS(coins: Coin[]) {
            this.coins = coins;
        },
        FETCH_COINS() {
            fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
                .then(r => r.json()).then((coins: Coin[]) => {
                this.SET_COINS(coins);
            });
            setInterval(() => {
                fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
                    .then(r => r.json()).then((coins: Coin[]) => {
                    this.SET_COINS(coins);
                });
            }, 10000);

        }
    }
})
