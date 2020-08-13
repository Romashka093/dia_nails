import React, { Component } from 'react';
// import { Bonus } from './Bonus/Bonus';
// import { Sale } from './Sale/Sale';
import Toggleable from '../renderProp/Toggleable';

export class Pricing extends Component {
  render() {
    const shortid = require('shortid');
    const { manicure } = this.props;
    console.log(manicure);
    return (
      <div>
        <h2 id="pricing">Pricing</h2>
        <ul>
          {manicure.map(item => (
            <li id={shortid.generate()} key={shortid.generate()}>
              <Toggleable>
                {({ on, onToggle }) => (
                  <>
                    <button onClick={onToggle}>
                      {on ? <h3>{item.name}</h3> : 'Click me'}
                    </button>
                    {on && (
                      <>
                        {/* <h3>{item.name}</h3> */}
                        <span>{item.service}</span>
                        <span>{item.cost} </span>
                        <span>{item.currency}</span>
                      </>
                    )}
                  </>
                )}
              </Toggleable>
              {/* <h3>{item.name}</h3>
              <span>{item.service} </span>
              <span>{item.cost} </span>
              <span>{item.currency}</span> */}
            </li>
          ))}
        </ul>
        {/* <Bonus />
        <Sale /> */}
      </div>
    );
  }
}
