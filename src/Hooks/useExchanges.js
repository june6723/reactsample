import { getExchanges } from "../api";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data: exchanges } = await getExchanges();
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(getData, []);

  return { exchanges, loading };
};
useExchanges.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      links: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    }).isRequired
  ).isRequired,
};
export default useExchanges;
