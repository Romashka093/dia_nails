import React, { Component } from 'react';
import { Bonus } from './Bonus/Bonus';
import { Sale } from './Sale/Sale';

export class Pricing extends Component {
  render() {
    // console.log('price :>> ', this.props.manicure);
    const { manicure } = this.props;
    return (
      <div>
        <h2 id="pricing">Pricing</h2>
        {manicure.map(item => (
          <ul>
            <li>
              <h3>{item.name}</h3>
              <span>{item.service} </span>
              <span>{item.cost} </span>
              <span>{item.currency}</span>
            </li>
          </ul>
        ))}
        <Bonus />
        <Sale />
      </div>
    );
  }
}
