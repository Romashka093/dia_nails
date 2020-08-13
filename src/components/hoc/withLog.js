import React, { Component } from 'react';

// const withLog = function(BaseComponent) {
// 	return function WithLog(props) {
// 		console.log(`Calling to ${BaseComponent.name} with his props: ${props}`);

// 		return <BaseComponent {...props} />;
// 	};
// };
// export default withLog;

const withLog = BaseComponent => {
  return class WithLog extends Component {
    render() {
      console.log(
        `Calling to ${BaseComponent.name} with his props: ${this.props}`,
      );
      return <BaseComponent {...this.props} />;
    }
  };
};
export default withLog;
