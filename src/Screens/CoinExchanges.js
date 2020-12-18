import React from "react";
import Loader from "../Components/Loader";
import Exchange from "../Components/CoinExchange";
import useCoinExchanges from "../Hooks/useCoinExchanges";

const CoinExchanges = () => {
  const { loading, exchanges } = useCoinExchanges();
  return loading ? (
    <Loader />
  ) : (
    exchanges
      .filter((exchange) => exchange.fiats.length > 0)
      .map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
};

export default CoinExchanges;
