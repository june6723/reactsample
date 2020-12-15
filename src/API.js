import axios from "axios";

const API = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
});

export const tickersAPI = {
  tickers: () => API.get("tickers"),
};
export const exchangesAPI = {
  exchanges: () => API.get("exchanges"),
};
export const coinsAPI = {
  coins: () => API.get("coins"),
  coinDetail: (coin_id) => API.get(`coins/${coin_id}`),
  coinExchanges: (coin_id) => API.get(`coins/${coin_id}/exchanges`),
  coinMarkets: (coin_id) => API.get(`coins/${coin_id}/markets`),
};
