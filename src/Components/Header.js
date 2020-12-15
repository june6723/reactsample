import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background: #f0f0f0;
  padding-left: 20px;
  width: 100%;
`;
const Title = styled.span`
  font-size: 36px;
`;
const List = styled.ul`
  display: flex;
  margin-top: 20px;
  height: 36px;
`;
const Item = styled.li`
  font-size: 18px;
  height: 100%;
  margin-right: 20px;
  background-color: ${(props) => (props.current ? "#fdcb6e" : "transparent")};
  color: ${(props) => (props.current ? "white" : "black")};
`;
const PageLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ location: { pathname } }) => (
  <Nav>
    <Title>Coin Explorer</Title>
    <List>
      <Item current={pathname === "/"}>
        <PageLink to="/">Prices</PageLink>
      </Item>
      <Item current={pathname === "/exchanges"}>
        <PageLink to="/exchanges">Exchanges</PageLink>
      </Item>
      <Item current={pathname.includes("/coins")}>
        <PageLink to="/coins">Coins</PageLink>
      </Item>
    </List>
  </Nav>
);
export default withRouter(Header);
