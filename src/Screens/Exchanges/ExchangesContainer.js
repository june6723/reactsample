import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesAPI } from "../../API";

export default class extends React.Component {
  state = {
    exchanges: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data: exchanges } = await exchangesAPI.exchanges();
      this.setState({ exchanges });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <ExchangesPresenter {...this.state} />;
  }
}
