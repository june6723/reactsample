import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" component={Coins} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
