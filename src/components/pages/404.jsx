import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { fuzzyFind } from 'helpers/fuzzyFind';

class FourOhFour extends Component {
  constructor() {
    super();
    this.state = {
      interval: 60,
    };
  }

  componentDidMount() {
    let { interval } = this.state;
    const { location, routes } = this.props;
    const searchTerm = location.pathname;
    console.log(searchTerm, routes, this.props);
    this.setState({
      proposedRoute: fuzzyFind(searchTerm, routes),
    });
    const countdown = setInterval(() => {
      this.setState({ interval: --interval });
      if (interval === 0) {
        clearInterval(countdown);
        window.location.href = '/';
      }
    }, 1000);
  }

  render() {
    const { interval, proposedRoute } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>
            {'404'}
          </title>
        </Helmet>
        <h1>Page not found</h1>
        <p>

          {'You will be redirected to the homepage in '}
          <span>{interval}</span>
          {' seconds.'}

        </p>
        <p>
          {'Did you mean '}
          <a href={proposedRoute}><code>{proposedRoute}</code></a>
          {'?'}
        </p>
      </Fragment>
    );
  }
}


export default FourOhFour;
