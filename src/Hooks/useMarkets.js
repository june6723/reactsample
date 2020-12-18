import { getCoinMarkets } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const useMarkets = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getMarkets = async () => {
    try {
      const { data: markets } = await getCoinMarkets(id);
      setMarkets(markets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(getMarkets, []);

  return { markets, loading };
};

useMarkets.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default useMarkets;
