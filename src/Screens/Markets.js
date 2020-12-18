import React from "react";
import Loader from "../Components/Loader";
import Market from "../Components/Market";
import useMarkets from "../Hooks/useMarkets";

const Markets = () => {
  const { loading, markets } = useMarkets();
  return loading ? (
    <Loader />
  ) : (
    markets
      .filter((market) => market.market_url)
      .map((market, index) => (
        <Market
          key={market.id || index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );
};

export default Markets;
