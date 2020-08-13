import React, { Component } from 'react';
import { Pricing } from '../components/Pricing/Pricing';
import price from '../services/price.json';
import withLog from '../components/hoc/withLog';

class PricePage extends Component {
  state = {
    manicure: [],
    isLoading: false,
  };
  componentDidMount() {
    this.getAllPrice();
  }
  getAllPrice() {
    const manicure = price.manicure.map(item => {
      return item;
    });
    this.setState({ manicure });
  }

  render() {
    const { manicure } = this.state;
    return (
      <div>
        <Pricing manicure={manicure} />
      </div>
    );
  }
}

export default withLog(PricePage);
