import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MarketLink = styled.a`
  font-size: 16px;
  text-decoration: underline;
  display: block;
  margin-bottom: 5px;
`;
const NoLink = styled.span`
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
`;

const CoinMarket = ({ exchange_name, market_url }) =>
  market_url === null ? (
    <NoLink>{exchange_name}</NoLink>
  ) : (
    <MarketLink href={market_url}>{exchange_name}</MarketLink>
  );

CoinMarket.propTypes = {
  exchange_name: PropTypes.string.isRequired,
  market_url: PropTypes.string,
};

export default CoinMarket;
