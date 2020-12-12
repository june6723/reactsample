import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesAPI } from "../../API";

export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data: exchanges } = await exchangesAPI.exchanges();
      this.setState({ exchanges });
    } catch {
      this.setState({ error: "Can't load data." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { exchanges, error, loading } = this.state;
    console.log(this.state);
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
