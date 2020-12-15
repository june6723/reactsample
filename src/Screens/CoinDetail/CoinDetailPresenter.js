import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinDetail from "../../Components/CoinDetail";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import CoinMarket from "../../Components/CoinMarket";
import CoinExchange from "../../Components/CoinExchange";

const Container = styled.div``;
const LinkContainer = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;
const LinkItem = styled.li`
  width: 100px;
  height: 30px;
  border: 3px solid #00b894;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.current ? "white" : "black")};
  background-color: ${(props) => (props.current ? "#00b894" : "white")};
`;
const DetailLink = styled(Link)``;

const CoinDetailPresenter = ({
  loading,
  coinData,
  location: { pathname },
  coinExchanges,
  coinMarkets,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <CoinDetail {...coinData} />
      <LinkContainer>
        <LinkItem current={pathname.includes("/market")}>
          <DetailLink to={`/coins/${coinData.id}/markets`}>Market</DetailLink>
        </LinkItem>
        <LinkItem current={pathname.includes("/exchanges")}>
          <DetailLink to={`/coins/${coinData.id}/exchanges`}>
            Exchange
          </DetailLink>
        </LinkItem>
      </LinkContainer>
      <IsMarketClicked pathname={pathname} coinMarkets={coinMarkets} />
      <IsExchangeClicked pathname={pathname} coinExchanges={coinExchanges} />
    </Container>
  );

const IsMarketClicked = ({ pathname, coinMarkets }) => {
  if (pathname.includes("/markets")) {
    if (coinMarkets === null) {
      return <Loader />;
    } else {
      return <MarketList coinMarkets={coinMarkets} />;
    }
  } else {
    return <div />;
  }
};
const MarketList = ({ coinMarkets }) =>
  coinMarkets.map((market, index) => <CoinMarket key={index} {...market} />);

const IsExchangeClicked = ({ pathname, coinExchanges }) => {
  if (pathname.includes("/exchanges")) {
    if (coinExchanges === null) {
      return <Loader />;
    } else {
      return <ExchangeList coinExchanges={coinExchanges} />;
    }
  } else {
    return <div />;
  }
};
const ExchangeList = ({ coinExchanges }) =>
  coinExchanges.map((exchange, index) => (
    <CoinExchange key={index} {...exchange} />
  ));

CoinDetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coinData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number,
    open_source: PropTypes.bool,
    proof_type: PropTypes.string,
    org_structure: PropTypes.string,
  }),
  coinMarkets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_name: PropTypes.string.isRequired,
      market_url: PropTypes.string,
    })
  ),
  coinExchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default withRouter(CoinDetailPresenter);
