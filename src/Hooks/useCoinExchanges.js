import { getCoinExchanges } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const useCoinExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getExchanges = async () => {
    try {
      const { data: exchanges } = await getCoinExchanges(id);
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(getExchanges, []);

  return { exchanges, loading };
};

useCoinExchanges.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      adjusted_volume_24h_share: PropTypes.number,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          symbol: PropTypes.string,
        })
      ),
    })
  ),
};

export default useCoinExchanges;
