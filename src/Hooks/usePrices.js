import { useState, useEffect } from "react";
import { getPrices } from "../api";
import PropTypes from "prop-types";

const usePrices = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data: prices } = await getPrices();
      setPrices(prices);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(getData, []);

  return { prices, loading };
};

usePrices.propTypes = {
  loading: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(
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

export default usePrices;
