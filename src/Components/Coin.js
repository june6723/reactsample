import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  text-decoration: underline;
`;

const Ranking = styled.span`
  font-weight: 600;
`;

const CoinLink = styled(Link)``;

const Coin = ({ id, name, symbol, rank }) => (
  <Container>
    <CoinLink to={`/coins/${id}`}>
      <Ranking>#{rank}</Ranking> {name}/{symbol} <span>→</span>
    </CoinLink>
  </Container>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coin;
