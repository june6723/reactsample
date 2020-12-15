import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  font-size: 16px;
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const DetailList = styled.ul``;
const DetailItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
const DetailTitle = styled.span`
  font-weight: 500;
`;

const CoinDetail = ({
  name,
  symbol,
  description,
  rank,
  open_source,
  proof_type,
  org_structure,
}) => (
  <Container>
    <Title>
      {name} / {symbol}
    </Title>
    <Description>{description}</Description>
    <DetailList>
      <DetailItem>
        <DetailTitle>Rank: </DetailTitle>
        {rank}
      </DetailItem>
      <DetailItem>
        <DetailTitle>Open Source: </DetailTitle>
        {open_source ? "Yes" : "No"}
      </DetailItem>
      <DetailItem>
        <DetailTitle>Proof Type: </DetailTitle>
        {proof_type}
      </DetailItem>
      <DetailItem>
        <DetailTitle>Structure: </DetailTitle>
        {org_structure}
      </DetailItem>
    </DetailList>
  </Container>
);

CoinDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number,
  open_source: PropTypes.bool,
  proof_type: PropTypes.string,
  org_structure: PropTypes.string,
};
export default CoinDetail;
