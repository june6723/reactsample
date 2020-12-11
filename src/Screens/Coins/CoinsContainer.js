import React from "react";
import CoinsPresenter from "./CoinsPresenter";

export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true,
  };

  render() {
    const { coins, error, loading } = this.state;
    return <CoinsPresenter coins={coins} error={error} loading={loading} />;
  }
}
