import React, { Component } from 'react';
import { Bonus } from './Bonus/Bonus';
import { Sale } from './Sale/Sale';

export class Pricing extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  };
  // }
  render() {
    return (
      <div>
        <h2 id="pricing">Pricing</h2>
        <Bonus />
        <Sale />
      </div>
    );
  }
}
