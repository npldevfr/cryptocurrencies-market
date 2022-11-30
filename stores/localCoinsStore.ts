import {defineStore} from "pinia";

const LOCAL_STORAGE_KEY = 'coins-store';

export const useLocalCoinsStore = defineStore('local-coins-store', {
    state: () => ({
        coins: [] as string[],
    }),
    getters: {
        getCoins: (state) => state.coins,
    },
    actions: {
        REFRESH_COINS() {
            this.coins = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        },
        SET_COINS(coins: string[]) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(coins));
            this.coins = coins;
        },
        ADD_COIN(coin: string) {
            const coins = this.coins;
            if (coins.length < 5) {
                if (!coins.includes(coin)) {
                    coins.push(coin);
                    this.SET_COINS(coins);
                }
            }
        },
        REMOVE_COIN(coin: string) {
            const coins = this.coins;
            const index = coins.findIndex((c: string) => c === coin);
            coins.splice(index, 1);
            this.SET_COINS(coins);
        }
    }
})
