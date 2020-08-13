import React from 'react';
import { Component } from 'react';

const passProps = props => WrapedComponent => {
  return class PassProps extends Component {
    render() {
      return <WrapedComponent {...props} {...this.props} />;
    }
  };
};
export default passProps;
