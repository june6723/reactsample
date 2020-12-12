import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsAPI } from "../../API";

export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data: coins } = await coinsAPI.coins();
      this.setState({ coins });
    } catch {
      this.setState({ error: "Can't load information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { coins, error, loading } = this.state;
    console.log(this.state);
    return <CoinsPresenter coins={coins} error={error} loading={loading} />;
  }
}
