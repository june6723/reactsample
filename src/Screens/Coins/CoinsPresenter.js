import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";

const CoinsPresenter = ({ coins, loading }) =>
  loading ? (
    <Loader />
  ) : (
    coins
      .filter((coin) => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map((coin) => <Coin key={coin.id} {...coin} />)
  );

CoinsPresenter.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CoinsPresenter;
