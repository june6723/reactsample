import { useState, useEffect } from "react";
import { getCoinDetail } from "../api";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const useCoinDetail = () => {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function getData() {
    try {
      const { data: coin } = await getCoinDetail(id);
      setCoin(coin);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(getData, []);

  return { coin, loading };
};

useCoinDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired,
  }),
};

export default useCoinDetail;
