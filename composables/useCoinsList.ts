import {Coin} from "~/types/Coin";
import {useFetch} from "#app";
import {defineComponent} from "#build/imports";

// return a useFetch hook then return the data
export function useCoinsList() {
    const {data} = useFetch<Coin[]>("https://api.coingecko.com/api/v3/coins/list");
    return data;
}
