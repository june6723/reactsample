import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsAPI } from "../../API";

class CoinsContainer extends React.Component {
  state = {
    coins: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data: coins } = await coinsAPI.coins();
      this.setState({ coins });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <CoinsPresenter {...this.state} />;
  }
}
export default CoinsContainer;
