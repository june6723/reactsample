import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  margin-bottom: 5px;
`;
const PricesPresenter = ({ tickers, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {tickers && tickers.length > 0 && (
        <List>
          {tickers.map((ticker) => (
            <Item key={ticker.id}>
              {ticker.name} / {ticker.symbol} : ${ticker.quotes.USD.price}
            </Item>
          ))}
        </List>
      )}
    </Container>
  );

PricesPresenter.propTypes = {
  tickers: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PricesPresenter;
