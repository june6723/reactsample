import { useState, useEffect } from "react";
import { getCoins } from "../api";
import PropTypes from "prop-types";

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const { data: coins } = await getCoins();
      setCoins(coins);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(getData, []);

  return { coins, loading };
};

useCoins.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default useCoins;
