import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import { exchangesAPI } from "../../API";

const Container = styled.div`
  padding-left: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
`;
const Description = styled.p``;
const Link = styled.div``;

const ExchangesPresenter = ({ exchanges, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges && exchanges.length > 0 && (
        <List>
          {exchanges.map((exchange) => (
            <Item key={exchange.id}>
              <Title>{exchange.id}</Title>
              <Description>{exchange.description}</Description>
              <Link>links</Link>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );

ExchangesPresenter.propTypes = {
  exchanges: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default ExchangesPresenter;
