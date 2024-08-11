import axios from "axios"
import { ChartApi, CoinsApi } from "../apis/apis"
 
export const GET_COINS = "GET_COINS"
export const GET_CHART = "GET_CHART"


export const getCoins = (coin) => {
    return {
        type: GET_COINS,
        payload: coin
    }
}
export const getChart = (coinData) => {
    return {
        type: GET_CHART,
        payload: coinData
    }
}


export const fetchCoins = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(CoinsApi());
            const coins = res.data.map(coin => ({
                name: coin.name,
                symbol: coin.symbol,
                image: coin.image,
                id: coin.id,
                price: coin.current_price,
                market_cap: coin.market_cap,
                perc_24h: coin.price_change_percentage_24h,
                rank: coin.market_cap_rank,
                total_supply: coin.total_supply,
                volume: coin.total_volume,
                heigh_24h: coin.high_24h,
                low_24h: coin.low_24h,
                circulating_supply: coin.circulating_supply
            }))
            dispatch(getCoins(coins))
        }
        catch (error) {
            console.error('Error fetch coins:', error)
        }
    }
} 



export const fetchChart = (coinName) => {
    return async (dispatch) => {                
        try {
            const res = await axios.get(ChartApi(coinName));          
            const coinData = res.data.prices
            // console.log(coinData);
                        
            dispatch(getChart(coinData))            
        }
        catch (error) {
            console.error('Error fetch chart-data: ', error)
        }
    }
}