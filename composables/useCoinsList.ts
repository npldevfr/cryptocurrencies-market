const useCoinsList = () => {

    const getLocalCoins = (): string[] => {
        const localCoins = localStorage.getItem('coins')
        return localCoins ? JSON.parse(localCoins) : []
    }

    const addLocalCoin = (coin: string) => {
        const localCoins = getLocalCoins()
        if (localCoins.length < 5) {
            if (!localCoins.includes(coin)) {
                localCoins.push(coin)
                return localStorage.setItem('coins', JSON.stringify(localCoins))
            }
        }
        return console.log('You can not add more than 5 coins')

    }

    const isCoinInList = (coin: string) => {
        const localCoins = getLocalCoins()
        return localCoins.includes(coin)
    }

    const removeLocalCoin = (coin: string) => {
        const localCoins = getLocalCoins()
        const index = localCoins.findIndex((c: string) => c === coin)
        localCoins.splice(index, 1)
        localStorage.setItem('coins', JSON.stringify(localCoins))
    }

    const isLocalCoin = (coin: string) => {
        const localCoins = getLocalCoins()
        return localCoins.some((c: string) => c === coin)
    }

    return {
        getLocalCoins,
        addLocalCoin,
        removeLocalCoin,
        isLocalCoin,
        isCoinInList
    }
}

export default useCoinsList