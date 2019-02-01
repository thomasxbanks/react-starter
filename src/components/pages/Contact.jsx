import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Contact Us',
    };
  }

  render() {
    const { greeting } = this.state;
    console.log('Home.jsx', this.state);
    return (
      <Fragment>
        <Helmet>
          <title>
            {greeting}
          </title>
        </Helmet>
        <h1>
          {greeting}
        </h1>
      </Fragment>
    );
  }
}

export default Home;
