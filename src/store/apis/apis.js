export const CoinsApi = () => 
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

export const ChartApi = (coinid, coinDays=365) =>
    `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=${coinDays}`;