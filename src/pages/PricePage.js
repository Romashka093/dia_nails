import React, { Component } from 'react';
import { Pricing } from '../components/Pricing/Pricing';
import price from '../services/price.json';

class PricePage extends Component {
  state = { manicure: [] };
  componentDidMount() {
    this.getAllPrice();
  }
  getAllPrice() {
    const manicure = price.services.manicure.map(item => {
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

export default PricePage;
