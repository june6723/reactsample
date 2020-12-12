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
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
`;
const Description = styled.div`
  width: 50%;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Link = styled.a`
  text-decoration: underline;
`;

const ExchangesPresenter = ({ exchanges, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges && exchanges.length > 0 && (
        <List>
          {exchanges.map((exchange, index) => {
            if (exchange.links === null) {
              return (
                <Item key={exchange.id}>
                  <Title>{exchange.id}</Title>
                  <Description>{exchange.description}</Description>
                  <Link>No link</Link>
                </Item>
              );
            } else {
              return (
                <Item key={exchange.id}>
                  <Title>{exchange.id}</Title>
                  <Description>{exchange.description}</Description>
                  <Link href={exchange.links.website}>
                    {exchange.links.website}
                  </Link>
                </Item>
              );
            }
          })}
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
