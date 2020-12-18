import React from "react";
import Loader from "../Components/Loader";
import Coin from "../Components/Coin";
import useCoins from "../Hooks/useCoins";

const Coins = () => {
  const { loading, coins } = useCoins();
  return loading ? (
    <Loader />
  ) : (
    coins
      .filter((coin) => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map((coin) => <Coin key={coin.id} {...coin} />)
  );
};

export default Coins;
