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
const CoinsPresenter = ({ coins, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {coins && coins.length > 0 && (
        <List>
          {coins.map((coin) => (
            <Item key={coin.id}>
              #{coin.rank} {coin.name}/{coin.symbol}
            </Item>
          ))}
        </List>
      )}
    </Container>
  );

CoinsPresenter.propTypes = {
  coins: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CoinsPresenter;
