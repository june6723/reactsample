import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";

export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true,
  };

  render() {
    const { exchanges, error, loading } = this.state;
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
