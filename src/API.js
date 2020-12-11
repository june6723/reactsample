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
};
