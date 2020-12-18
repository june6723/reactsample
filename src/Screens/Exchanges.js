import React from "react";
import Loader from "../Components/Loader";
import Exchange from "../Components/Exchange";
import useExchanges from "../Hooks/useExchanges";

const Exchanges = () => {
  const { exchanges, loading } = useExchanges();
  return loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
};

export default Exchanges;
