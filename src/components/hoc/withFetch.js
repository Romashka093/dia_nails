// import React, { Component } from 'react';

// const withFetch = url => WrapedComponent => {
//   return class WithFetch extends Component {
//     state = {
//       data: {},
//       isLoading: false,
//       error: null,
//     };
//     async componentDidMount() {
//       this.fetchPrice();
//       //   this.setState({ isLoading: true });
//       // await fetch(url, {
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //     Accept: 'application/json',
//       //   },
//       // })
//       //     .then(res => console.log(res))
//       //     // .then(data => data.map(item => console.log(item)));
//       //     .then(data => this.setState({ data }));
//       //   // .then(data => console.log(data));
//     }

//     async fetchPrice(url) {
//       try {
//         const data = await fetch(url).then(res => res.json());
//         console.log(data);
//         this.setState({ data });
//       } catch (error) {
//         console.log(error);
//         throw error;
//       }
//     }

//     // .catch(error => this.setState({ error }))
//     // .finally(() => this.setState({ isLoading: false }));

//     // getAllPrice() {
//     //   const data = price.data.map(item => {
//     //     return item;
//     //   });
//     //   this.setState({ data });
//     // }

//     render() {
//       console.log(url);
//       return <WrapedComponent {...this.props} {...this.state} />;
//     }
//   };
// };

// export default withFetch;
