import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
`;
const PayCurrency = styled.span``;
const Currency = styled.span`
  margin-right: 3px;
`;

const CoinExchange = ({ id, fiats }) => (
  <Container>
    <Title>{id}</Title>
    <PayCurrency>
      Pay On{" "}
      {fiats.map((fiat) => (
        <Currency key={fiat.symbol}>{fiat.symbol}</Currency>
      ))}
    </PayCurrency>
  </Container>
);

CoinExchange.propTypes = {
  id: PropTypes.string.isRequired,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    })
  ),
};

export default CoinExchange;
