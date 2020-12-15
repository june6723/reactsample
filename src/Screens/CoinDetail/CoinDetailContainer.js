import React from "react";
import CoinDetailPresenter from "./CoinDetailPresenter";
import { coinsAPI } from "../../API";

class CoinDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      coinData: null,
      coinExchanges: null,
      coinMarkets: null,
      loading: true,
      pathname,
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data: coinData } = await coinsAPI.coinDetail(id);
      this.setState({ coinData });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps) {
    const curr_path = this.props.location.pathname;
    if (prevProps.location.pathname !== curr_path) {
      if (curr_path.includes("markets")) {
        const { data: coinMarkets } = await coinsAPI.coinMarkets(
          this.props.match.params.id
        );
        this.setState({ coinMarkets });
      }
      if (curr_path.includes("/exchanges")) {
        const { data: coinExchanges } = await coinsAPI.coinExchanges(
          this.props.match.params.id
        );
        this.setState({ coinExchanges });
      }
    }
  }
  render() {
    return <CoinDetailPresenter {...this.state} />;
  }
}
export default CoinDetailContainer;
