import React from "react";
import PricesPresenter from "./PricesPresenter";
import { tickersAPI } from "../../API";

export default class extends React.Component {
  state = {
    tickers: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: tickers } = await tickersAPI.tickers();
      this.setState({ tickers });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <PricesPresenter {...this.state} />;
  }
}
