import usePrices from "../Hooks/usePrices";
import React from "react";
import Loader from "../Components/Loader";
import Price from "../Components/Price";

const Prices = () => {
  const { loading, prices } = usePrices();
  return loading ? (
    <Loader />
  ) : (
    prices.map((price) => <Price key={price.id} {...price} />)
  );
};

export default Prices;
