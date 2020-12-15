import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";

const PricesPresenter = ({ tickers, loading }) =>
  loading ? (
    <Loader />
  ) : (
    tickers.map((ticker) => <Price key={ticker.id} {...ticker} />)
  );

PricesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tickers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default PricesPresenter;
