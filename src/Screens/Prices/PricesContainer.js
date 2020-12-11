import React from "react";
import PricesPresenter from "./PricesPresenter";
import { tickersAPI } from "../../API";

export default class extends React.Component {
  state = {
    tickers: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: tickers } = await tickersAPI.tickers();
      this.setState({ tickers });
    } catch {
      this.setState({ error: "Can't load information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { tickers, error, loading } = this.state;
    console.log(this.state);
    return (
      <PricesPresenter tickers={tickers} error={error} loading={loading} />
    );
  }
}
